const data1 = [
  {
    incomeType: 'services',
    value: 500,
    valueMap: [
      {
        expenseType: 'operations',
        value: 100,
      },
      {
        expenseType: 'nonOperating',
        value: 30,
      },
      {
        expenseType: 'fixed',
        value: 200,
      },
      {
        expenseType: 'variable',
        value: 100,
      },
    ],
  },
  {
    incomeType: 'recurring',
    value: 540,
    valueMap: [
      {
        expenseType: 'operations',
        value: 20,
      },
      {
        expenseType: 'nonOperating',
        value: 30,
      },
      {
        expenseType: 'fixed',
        value: 100,
      },
      {
        expenseType: 'variable',
        value: 900,
      },
    ],
  },
  {
    incomeType: 'project',
    value: 1000,
    valueMap: [
      {
        expenseType: 'operations',
        value: 1000,
      },
      {
        expenseType: 'nonOperating',
        value: 121,
      },
      {
        expenseType: 'fixed',
        value: 401,
      },
      {
        expenseType: 'variable',
        value: 101,
      },
    ],
  },
  {
    incomeType: 'interest',
    value: 300,
    valueMap: [
      {
        expenseType: 'operations',
        value: 20,
      },
      {
        expenseType: 'nonOperating',
        value: 30,
      },
      {
        expenseType: 'fixed',
        value: 100,
      },
      {
        expenseType: 'variable',
        value: 90,
      },
    ],
  },
];

const data = [
  {
    incomeType: 'services',
    value: 110,
    valueMap: [
      {
        expenseType: 'operations',
        value: 100,
      },
      {
        expenseType: 'nonOperating',
        value: 30,
      },
    ],
  },
  {
    incomeType: 'interest',
    value: 100,
    valueMap: [
      {
        expenseType: 'operations',
        value: 10,
      },
      {
        expenseType: 'nonOperating',
        value: 30,
      },
    ],
  },
];

const DATA_1 = [
  {
    incomeType: 'services',
    value: 300,
    valueMap: [
      {
        expenseType: 'fixed',
        value: 150,
      },
      {
        expenseType: 'variable',
        value: 100,
      },
    ],
  },
  {
    incomeType: 'recurring',
    value: 640,
    valueMap: [
      {
        expenseType: 'operations',
        value: 200,
      },
      {
        expenseType: 'variable',
        value: 700,
      },
    ],
  },
  {
    incomeType: 'project',
    value: 600,
    valueMap: [
      {
        expenseType: 'operations',
        value: 100,
      },
      {
        expenseType: 'fixed',
        value: 80,
      },
      {
        expenseType: 'variable',
        value: 100,
      },
    ],
  },
  {
    incomeType: 'interest',
    value: 400,
    valueMap: [
      {
        expenseType: 'operations',
        value: 200,
      },
      {
        expenseType: 'variable',
        value: 150,
      },
    ],
  },
];

const NODES_1 = [
  { name: 'services', color: '#0C6980' },
  { name: 'recurring', color: '#00A8A8' },
  { name: 'project', color: '#2EB5E0' },
  { name: 'interest', color: '#4C5270' },
  { name: 'cashpool', color: '#70B692' },
  { name: 'fixed', color: '#0C6980' },
  { name: 'variable', color: '#00A8A8' },
  { name: 'operations', color: '#2EB5E0' },
  { name: 'profit', color: '#4C5270' },
];
const LINKS_1 = [
  { source: 0, target: 5, value: 150, color: '#0C6980' },
  { source: 0, target: 6, value: 100, color: '#0C6980' },
  { source: 0, target: 4, value: 50, color: '#0C6980' },
  { source: 1, target: 7, value: 200, color: '#00A8A8' },
  { source: 1, target: 6, value: 440, color: '#00A8A8' },
  { source: 4, target: 6, value: 260, color: '#00A8A8' },
  { source: 2, target: 7, value: 100, color: '#2EB5E0' },
  { source: 2, target: 5, value: 80, color: '#2EB5E0' },
  { source: 2, target: 6, value: 100, color: '#2EB5E0' },
  { source: 2, target: 4, value: 320, color: '#2EB5E0' },
  { source: 3, target: 7, value: 200, color: '#4C5270' },
  { source: 3, target: 6, value: 150, color: '#4C5270' },
  { source: 3, target: 4, value: 50, color: '#4C5270' },
  { source: 4, target: 8, value: 160 },
];

const INCOME_KEYS_1 = ['services', 'recurring', 'project', 'interest'];
const EXPENSE_KEYS_1 = ['fixed', 'variable', 'operations'];
const NODE_KEY_ID_1 = {
  cashpool: 4,
  fixed: 5,
  interest: 3,
  operations: 7,
  profit: 8,
  project: 2,
  recurring: 1,
  services: 0,
  variable: 6,
};
const DIFF_1 = 160;

export {
  data,
  data1,
  NODES_1,
  LINKS_1,
  DATA_1,
  INCOME_KEYS_1,
  EXPENSE_KEYS_1,
  DIFF_1,
  NODE_KEY_ID_1,
};
