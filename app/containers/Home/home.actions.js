/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_RECORD_DATA,
  GET_RECORD_DATA_SUCCESS,
  GET_RECORD_DATA_ERROR,
  UPDATE_EXPENSE_RECORD,
  ADD_EXPENSE_RECORD,
  REMOVE_EXPENSE_RECORD,
  UPDATE_INCOME_RECORD,
  ADD_INCOME_RECORD,
  REMOVE_INCOME_RECORD,
} from './home.constants';

const defaultAction = () => ({
  type: DEFAULT_ACTION,
});

const loadRecordData = () => ({
  type: GET_RECORD_DATA,
});

const setRecordData = payload => ({
  type: GET_RECORD_DATA_SUCCESS,
  payload,
});

const setRecordDataError = payload => ({
  type: GET_RECORD_DATA_ERROR,
  payload,
});

/*
 * Payload - {incomeIndex, value}
 */
const updateIncomeRecordValueAction = payload => ({
  type: UPDATE_INCOME_RECORD,
  payload,
});

/*
 * Payload - {incomeIndex, expenseIndex, value}
 */
const updateExpenseRecordValueAction = payload => ({
  type: UPDATE_EXPENSE_RECORD,
  payload,
});

/*
 * Payload - {incomeKeyText, value}
 */
const addIncomeRecordAction = payload => ({
  type: ADD_INCOME_RECORD,
  payload,
});

/*
 * Payload - {incomeIndex, expenseKeyText, value}
 */
const addExpenseRecordAction = payload => ({
  type: ADD_EXPENSE_RECORD,
  payload,
});

/*
 * Payload - {incomeIndex}
 */
const removeIncomeRecordAction = payload => ({
  type: REMOVE_INCOME_RECORD,
  payload,
});

/*
 * Payload - {incomeIndex, expenseIndex}
 */
const removeExpenseRecordAction = payload => ({
  type: REMOVE_EXPENSE_RECORD,
  payload,
});

export {
  defaultAction,
  loadRecordData,
  setRecordData,
  setRecordDataError,
  updateIncomeRecordValueAction,
  updateExpenseRecordValueAction,
  addIncomeRecordAction,
  addExpenseRecordAction,
  removeIncomeRecordAction,
  removeExpenseRecordAction,
};
