// import produce from 'immer';
import homeReducer, { initialState } from '../home-reducer';
import {
  GET_RECORD_DATA,
  GET_RECORD_DATA_SUCCESS,
  GET_RECORD_DATA_ERROR,
  UPDATE_RECORD_DATA,
  REMOVE_ATT_RECORD_DATA,
  ADD_ATT_RECORD_DATA,
} from '../home-constants';

import {
  NODE_1,
  LINK_1,
  INCOME_1,
  EXPENSE_1,
  NODE_2,
  LINK_2,
  INCOME_2,
  EXPENSE_2,
  NODE_3,
  LINK_3,
  INCOME_3,
  EXPENSE_3,
  NODE_4,
  LINK_4,
  INCOME_4,
  EXPENSE_4,
} from '../../../../internals/mocks/data';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state = initialState;
  beforeEach(() => {
    state = {
      ...initialState,
      nodes: NODE_1,
      links: LINK_1,
      income: INCOME_1,
      expense: EXPENSE_1,
      isLoaded: true,
    };
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
      nodes: NODE_1,
      links: LINK_1,
      income: INCOME_1,
      expense: EXPENSE_1,
      isLoaded: true,
    };
    state = expectedResult;
    const actionObj = {
      type: GET_RECORD_DATA_SUCCESS,
      payload: { income: INCOME_1, expense: EXPENSE_1 },
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

  it('on updating the values', () => {
    const expectedResult = {
      ...initialState,
      nodes: NODE_2,
      links: LINK_2,
      income: INCOME_2,
      expense: EXPENSE_2,
      isLoaded: true,
    };
    const actionObj = {
      type: UPDATE_RECORD_DATA,
      payload: { recordType: 'income', key: 'a', value: 1000 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on deleting a record attribute', () => {
    const expectedResult = {
      ...initialState,
      nodes: NODE_3,
      links: LINK_3,
      income: INCOME_3,
      expense: EXPENSE_3,
      isLoaded: true,
    };
    const actionObj = {
      type: REMOVE_ATT_RECORD_DATA,
      payload: { recordType: 'income', index: 1 },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });

  it('on adding a record attribute', () => {
    const expectedResult = {
      ...initialState,
      nodes: NODE_4,
      links: LINK_4,
      income: INCOME_4,
      expense: EXPENSE_4,
      isLoaded: true,
    };
    const actionObj = {
      type: ADD_ATT_RECORD_DATA,
      payload: {
        recordType: 'income',
        attObj: {
          key: 'c',
          value: 250,
        },
      },
    };
    expect(homeReducer(state, actionObj)).toEqual(expectedResult);
  });
});
