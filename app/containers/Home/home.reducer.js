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
  UPDATE_EXPENSE_RECORD,
  ADD_EXPENSE_RECORD,
  REMOVE_EXPENSE_RECORD,
  UPDATE_INCOME_RECORD,
  ADD_INCOME_RECORD,
  REMOVE_INCOME_RECORD,
} from './home.constants';

export const initialState = {
  records: [],
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
        const { records } = action.payload;
        draft.records = records;
        draft.isLoaded = true;
        break;
      }

      case GET_RECORD_DATA_ERROR: {
        draft.records = [];
        draft.isLoaded = true;
        draft.errorMsg = action.payload;
        break;
      }

      case UPDATE_INCOME_RECORD: {
        const records = [...state.records];
        records[action.payload.incomeIndex].value = action.payload.value;
        draft.records = records;
        break;
      }

      case UPDATE_EXPENSE_RECORD: {
        const records = [...state.records];
        records[action.payload.incomeIndex].valueMap[
          action.payload.expenseIndex
        ].value = action.payload.value;
        draft.records = records;
        break;
      }

      case ADD_INCOME_RECORD: {
        const records = [...state.records];
        records.push({
          incomeType: action.payload.incomeKeyText,
          value: action.payload.value,
          valueMap: [],
        });
        draft.records = records;
        break;
      }

      case ADD_EXPENSE_RECORD: {
        const records = [...state.records];
        records[action.payload.incomeIndex].valueMap.push({
          expenseType: action.payload.expenseKeyText,
          value: action.payload.value,
        });
        draft.records = records;
        break;
      }

      case REMOVE_INCOME_RECORD: {
        const records = [...state.records];
        records.splice(action.payload.incomeIndex, 1);
        draft.records = records;
        break;
      }

      case REMOVE_EXPENSE_RECORD: {
        const records = [...state.records];
        records[action.payload.incomeIndex].valueMap.splice(
          action.payload.expenseIndex,
          1,
        );
        draft.records = records;
        break;
      }

      case DEFAULT_ACTION:
        break;
    }
  });

export default homeReducer;
