/*
 *
 * Home reducer
 *
 */
import produce from 'immer';

import {
  DEFAULT_ACTION,
  GET_RECORD_DATA,
  GET_RECORD_DATA_SUCCESS,
  GET_RECORD_DATA_ERROR,
  UPDATE_RECORD_DATA,
  REMOVE_ATT_RECORD_DATA,
  ADD_ATT_RECORD_DATA,
} from './home.constants';

export const initialState = {
  income: [],
  expense: [],
  isLoaded: false,
  errorMsg: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_RECORD_DATA:
        break;
      case GET_RECORD_DATA_SUCCESS: {
        const { income, expense } = action.payload;
        draft.income = income;
        draft.expense = expense;
        draft.isLoaded = true;
        break;
      }
      case GET_RECORD_DATA_ERROR:
        draft.nodes = [];
        draft.links = [];
        draft.income = [];
        draft.expense = [];
        draft.isLoaded = true;
        draft.errorMsg = action.payload;
        break;

      case UPDATE_RECORD_DATA: {
        const income = [...state.income];
        const expense = [...state.expense];
        if (action.payload.recordType === 'income') {
          const obj = income.find(item => item.key === action.payload.key);
          obj.value = action.payload.value;
        } else if (action.payload.recordType === 'expense') {
          const obj = expense.find(item => item.key === action.payload.key);
          obj.value = action.payload.value;
        }
        draft.income = income;
        draft.expense = expense;
        break;
      }

      case REMOVE_ATT_RECORD_DATA: {
        const income = [...state.income];
        const expense = [...state.expense];
        if (action.payload.recordType === 'income') {
          income.splice(action.payload.index, 1);
        } else if (action.payload.recordType === 'expense') {
          expense.splice(action.payload.index, 1);
        }
        draft.income = income;
        draft.expense = expense;
        break;
      }

      case ADD_ATT_RECORD_DATA: {
        const income = [...state.income];
        const expense = [...state.expense];
        if (action.payload.recordType === 'income') {
          income.push(action.payload.attObj);
        } else if (action.payload.recordType === 'expense') {
          expense.push(action.payload.attObj);
        }
        draft.income = income;
        draft.expense = expense;
        break;
      }

      case DEFAULT_ACTION:
        break;
    }
  });

export default homeReducer;
