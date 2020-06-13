import GetSankeyData, { GetDiffListValue } from '../adapters/sankeyData';

const arr1 = [
  {
    key: 'a',
    value: 100,
  },
  {
    key: 'b',
    value: 150,
  },
];

const arr2 = [
  {
    key: 'y',
    value: 100,
  },
  {
    key: 'z',
    value: 50,
  },
];

const NODES_P = [
  {
    name: 'a',
  },
  {
    name: 'b',
  },
  {
    name: 'cashFlow',
  },
  {
    name: 'y',
  },
  {
    name: 'z',
  },
  {
    name: 'profit',
  },
];
const LINKS_P = [
  {
    source: 0,
    target: 2,
    value: 100,
  },
  {
    source: 1,
    target: 2,
    value: 150,
  },
  {
    source: 2,
    target: 3,
    value: 100,
  },
  {
    source: 2,
    target: 4,
    value: 50,
  },
  {
    source: 2,
    target: 5,
    value: 100,
  },
];

const NODES_L = [
  {
    name: 'y',
  },
  {
    name: 'z',
  },
  {
    name: 'lose',
  },
  {
    name: 'cashFlow',
  },
  {
    name: 'a',
  },
  {
    name: 'b',
  },
];
const LINKS_L = [
  {
    source: 0,
    target: 3,
    value: 100,
  },
  {
    source: 1,
    target: 3,
    value: 50,
  },
  {
    source: 2,
    target: 3,
    value: 100,
  },
  {
    source: 3,
    target: 4,
    value: 100,
  },
  {
    source: 3,
    target: 5,
    value: 150,
  },
];

describe('GetDiffListValue()', () => {
  it('get difference', () => {
    expect(GetDiffListValue(arr1, arr2)).toEqual(100);
  });
});

describe('GetSankeyData()', () => {
  it('convert data to nodes & links - profit', () => {
    expect(GetSankeyData(arr1, arr2)).toEqual({
      nodes: NODES_P,
      links: LINKS_P,
    });
  });
  it('convert data to nodes & links - loss', () => {
    expect(GetSankeyData(arr2, arr1)).toEqual({
      nodes: NODES_L,
      links: LINKS_L,
    });
  });
});
