/*
 * Convert Income and expense data to Sankey data
 *
 * Output is expected as 3 tiers
 *
 * Inflow - Income
 * Cashflow
 * Outflow - Expense & profit
 *
 */

export function GetDiffListValue(arr1, arr2) {
  const diff =
    arr1
      .map(i => i.value)
      .reduce((main, item) => {
        let ret = main;
        ret += item;
        return ret;
      }, 0) -
    arr2
      .map(i => i.value)
      .reduce((main, item) => {
        let ret = main;
        ret += item;
        return ret;
      }, 0);
  return diff;
}

export default function GetSankeyData(income, expense) {
  const nodes = [];
  const links = [];

  const middleNode = {
    name: 'cashFlow',
  };
  const diff = GetDiffListValue(income, expense);
  const middleNodeTarget = income.length + (diff < 0 ? 1 : 0);
  // traverse income to create nodes links
  income.forEach((element, index) => {
    nodes.push({
      name: element.key,
    });
    links.push({
      source: index,
      target: middleNodeTarget,
      value: element.value || 0,
    });
  });

  // appending lose Node if condition is satisfied
  if (diff < 0) {
    nodes.push({
      name: 'lose',
    });
    links.push({
      source: middleNodeTarget - 1,
      target: middleNodeTarget,
      value: Math.abs(diff),
    });
  }

  // appending middle Node
  nodes.push(middleNode);
  // traverse expense to create nodes links
  expense.forEach((element, index) => {
    nodes.push({
      name: element.key,
    });
    links.push({
      source: middleNodeTarget,
      target: middleNodeTarget + index + 1,
      value: element.value || 0,
    });
  });

  if (diff > 0) {
    nodes.push({
      name: 'profit',
    });
    links.push({
      source: middleNodeTarget,
      target: nodes.length - 1,
      value: diff,
    });
  }

  return {
    nodes,
    links,
  };
}
