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

export { data, data1 };
