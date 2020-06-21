// import produce from 'immer';
import homeReducer, { initialState } from '../home.reducer';
import {
  GET_RECORD_DATA,
  GET_RECORD_DATA_SUCCESS,
  GET_RECORD_DATA_ERROR,
  UPDATE_INCOME_RECORD,
  UPDATE_EXPENSE_RECORD,
  REMOVE_INCOME_RECORD,
  REMOVE_EXPENSE_RECORD,
  ADD_INCOME_RECORD,
  ADD_EXPENSE_RECORD,
} from '../home.constants';

import {
  DATA,
  DATA_1,
  DATA_2,
  DATA_3,
  DATA_4,
  DATA_5,
  DATA_6,
} from '../../../../internals/mocks/data';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state = initialState;
  beforeEach(() => {
    state = JSON.parse(
      JSON.stringify({
        ...initialState,
        records: DATA,
        isLoaded: true,
      }),
    );
  });
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual(initialState);
  });

  it('fetching data from api', () => {
    const expectedResult = initialState;
    expect(homeReducer(initialState, { type: GET_RECORD_DATA })).toEqual(
      expectedResult,
    );
  });

  it('on success of fetching data', () => {
    const expectedResult = {
      ...initialState,
      records: DATA,
      isLoaded: true,
    };
    state = expectedResult;
    const actionObj = {
      type: GET_RECORD_DATA_SUCCESS,
      payload: { records: DATA },
    };
    expect(homeReducer(initialState, actionObj)).toEqual(expectedResult);
  });

  it('on failure of fetching data', () => {
    const expectedResult = {
      ...initialState,
      errorMsg: {},
      isLoaded: true,
    };
    const actionObj = {
      type: GET_RECORD_DATA_ERROR,
      payload: {},
    };
    expect(homeReducer(initialState, actionObj)).toEqual(expectedResult);
  });

  it('on updating income the values', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_1,
      isLoaded: true,
    };
    const actionObj = {
      type: UPDATE_INCOME_RECORD,
      payload: { incomeIndex: 0, value: 400 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on updating expense the values', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_2,
      isLoaded: true,
    };
    const actionObj = {
      type: UPDATE_EXPENSE_RECORD,
      payload: { incomeIndex: 0, expenseIndex: 1, value: 130 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on deleting a income record attribute', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_3,
      isLoaded: true,
    };
    const actionObj = {
      type: REMOVE_INCOME_RECORD,
      payload: { incomeIndex: 1 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on deleting a expense record attribute', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_4,
      isLoaded: true,
    };
    const actionObj = {
      type: REMOVE_EXPENSE_RECORD,
      payload: { incomeIndex: 0, expenseIndex: 1 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on adding a record attribute', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_5,
      isLoaded: true,
    };
    const actionObj = {
      type: ADD_INCOME_RECORD,
      payload: {
        incomeKeyText: 'consultation',
        value: 300,
      },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on expense a record attribute', () => {
    const expectedResult = {
      ...initialState,
      records: DATA_6,
      isLoaded: true,
    };
    const actionObj = {
      type: ADD_EXPENSE_RECORD,
      payload: {
        incomeIndex: 0,
        expenseKeyText: 'tax',
        value: 300,
      },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });
});
