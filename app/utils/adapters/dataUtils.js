export function getIncomeRecords(data) {
  return data.map(item => ({
    key: item.incomeType,
    value: item.value,
  }));
}

export function getExpenseRecords(data) {
  return data.map(item => ({
    key: item.expenseType,
    value: item.value,
  }));
}
