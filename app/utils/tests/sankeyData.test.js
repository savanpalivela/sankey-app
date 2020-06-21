import GetSankeyData, {
  GetLinkArr,
  GetDiffValue,
  GetNodeArr,
  GetNodeKeyIdMap,
  GetListOfExpenseType,
} from '../adapters/sankeyData';

import {
  NODES_1,
  LINKS_1,
  DATA_1,
  INCOME_KEYS_1,
  EXPENSE_KEYS_1,
  NODE_KEY_ID_1,
  DIFF_1,
} from '../../../internals/mocks/data_1';

describe('GetDiffListValue()', () => {
  it('get difference', () => {
    expect(GetDiffValue(DATA_1)).toEqual(DIFF_1);
  });
});

describe('GetListOfExpenseType()', () => {
  it('get difference', () => {
    expect(GetListOfExpenseType(DATA_1)).toEqual(EXPENSE_KEYS_1);
  });
});

describe('GetNodeArr()', () => {
  it('get difference', () => {
    expect(GetNodeArr(NODE_KEY_ID_1)).toEqual(NODES_1);
  });
});

describe('GetNodeKeyIdMap()', () => {
  it('get difference', () => {
    expect(GetNodeKeyIdMap(INCOME_KEYS_1, EXPENSE_KEYS_1, DIFF_1)).toEqual(
      NODE_KEY_ID_1,
    );
  });
});

describe('GetLinkArr()', () => {
  it('get difference', () => {
    expect(GetLinkArr(DATA_1, NODE_KEY_ID_1, DIFF_1)).toEqual(LINKS_1);
  });
});

describe('GetSankeyData()', () => {
  it('convert data to nodes & links - profit', () => {
    expect(GetSankeyData(DATA_1)).toEqual({
      nodes: NODES_1,
      links: LINKS_1,
    });
  });
});
