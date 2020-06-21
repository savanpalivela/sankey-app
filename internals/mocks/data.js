const DATA = [
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

const DATA_1 = [
  {
    incomeType: 'services',
    value: 400,
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

const DATA_2 = [
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
        value: 130,
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

const DATA_3 = [
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

const DATA_4 = [
  {
    incomeType: 'services',
    value: 500,
    valueMap: [
      {
        expenseType: 'operations',
        value: 100,
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

const DATA_5 = [
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
  {
    incomeType: 'consultation',
    value: 300,
    valueMap: [],
  },
];

const DATA_6 = [
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
      {
        expenseType: 'tax',
        value: 300,
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

export { DATA, DATA_1, DATA_2, DATA_3, DATA_4, DATA_5, DATA_6 };
