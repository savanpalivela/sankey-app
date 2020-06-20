/*
 * Convert Income - expense mapping data to Sankey data
 *
 * Output is expected as 3 tiers
 *
 * Income is mapped to mulitiple expense
 * Gap in the mapping is pointed to pool node
 */

import { uniq, forEach } from 'lodash';

const LOSS_NODE_KEY = 'loss';
const PROFILE_NODE_KEY = 'profit';

const COLOR_PALETTE = ['#0C6980', '#00A8A8', '#2EB5E0', '#4C5270', '#70B692'];

export function GetColor(i) {
  return COLOR_PALETTE[i % COLOR_PALETTE.length];
}

export function GetListOfExpenseType(dataArg) {
  const expenseKeys = [];
  dataArg.forEach(item => {
    expenseKeys.push(...item.valueMap.map(obj => obj.expenseType));
  });
  return uniq(expenseKeys);
}

export function GetNodeKeyIdMap(incomeKeys, expenseKeys, diff) {
  const retObj = {};
  let counter = 0; // nodeId
  incomeKeys.forEach(item => {
    retObj[item] = counter;
    counter += 1;
  });

  if (diff < 0) {
    retObj[LOSS_NODE_KEY] = counter;
    counter += 1;
  }

  retObj.cashpool = counter;
  counter += 1;

  expenseKeys.forEach(item => {
    retObj[item] = counter;
    counter += 1;
  });

  if (diff > 0) {
    retObj[PROFILE_NODE_KEY] = counter;
    counter += 1;
  }
  return retObj;
}

export function GetNodeArr(nodeKeyIdMap) {
  const nodeArr = Array(Object.keys(nodeKeyIdMap).length);
  forEach(nodeKeyIdMap, (item, key) => {
    nodeArr[item] = { name: key, color: GetColor(item) };
  });
  return nodeArr;
}

export function GetDiffValue(dataArg) {
  return dataArg.reduce((main, item) => {
    let ret = main;
    const expenseSum = item.valueMap.reduce((m, i) => {
      let r = m;
      r += i.value;
      return r;
    }, 0);
    ret += item.value - expenseSum;

    return ret;
  }, 0);
}

export function GetLinkArr(dataArg, nodeKeyIdMap, diff) {
  const linkArr = [];

  forEach(dataArg, item => {
    let valueGap = item.value;
    forEach(item.valueMap, obj => {
      if (valueGap >= 0) {
        if (valueGap - obj.value < 0) {
          linkArr.push({
            source: nodeKeyIdMap[item.incomeType],
            target: nodeKeyIdMap[obj.expenseType],
            value: valueGap,
            color: GetColor(nodeKeyIdMap[item.incomeType]),
          });
          linkArr.push({
            source: nodeKeyIdMap.cashpool,
            target: nodeKeyIdMap[obj.expenseType],
            value: Math.abs(valueGap - obj.value),
            color: GetColor(nodeKeyIdMap[obj.expenseType]),
          });
        } else {
          linkArr.push({
            source: nodeKeyIdMap[item.incomeType],
            target: nodeKeyIdMap[obj.expenseType],
            value: obj.value,
            color: GetColor(nodeKeyIdMap[item.incomeType]),
          });
        }
      } else {
        linkArr.push({
          source: nodeKeyIdMap.cashpool,
          target: nodeKeyIdMap[obj.expenseType],
          value: obj.value,
          color: GetColor(nodeKeyIdMap[item.expenseType]),
        });
      }
      valueGap -= obj.value;
    });
    if (valueGap >= 0) {
      linkArr.push({
        source: nodeKeyIdMap[item.incomeType],
        target: nodeKeyIdMap.cashpool,
        value: valueGap,
        color: GetColor(nodeKeyIdMap[item.incomeType]),
      });
    }
  });

  if (diff > 0) {
    linkArr.push({
      source: nodeKeyIdMap.cashpool,
      target: nodeKeyIdMap[PROFILE_NODE_KEY],
      value: diff,
    });
  }

  if (diff < 0) {
    linkArr.push({
      source: nodeKeyIdMap[LOSS_NODE_KEY],
      target: nodeKeyIdMap.cashpool,
      value: Math.abs(diff),
    });
  }

  return linkArr;
}

export default function GetSankeyData(data) {
  const incomeKeys = data.map(item => item.incomeType);
  const expenseKeys = GetListOfExpenseType(data);
  const diff = GetDiffValue(data);
  const nodeKeyIdMap = GetNodeKeyIdMap(incomeKeys, expenseKeys, diff);
  return {
    nodes: GetNodeArr(nodeKeyIdMap),
    links: GetLinkArr(data, nodeKeyIdMap, diff),
  };
}
