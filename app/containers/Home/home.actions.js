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
  UPDATE_RECORD_DATA,
  REMOVE_ATT_RECORD_DATA,
  ADD_ATT_RECORD_DATA,
} from './home.constants';

const defaultAction = () => ({
  type: DEFAULT_ACTION,
});

const editRecordValuesAction = payload => ({
  type: UPDATE_RECORD_DATA,
  payload,
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

const removeRecordAttributeAction = payload => ({
  type: REMOVE_ATT_RECORD_DATA,
  payload,
});

const addRecordAttributeAction = payload => ({
  type: ADD_ATT_RECORD_DATA,
  payload,
});

export {
  defaultAction,
  loadRecordData,
  setRecordData,
  setRecordDataError,
  editRecordValuesAction,
  removeRecordAttributeAction,
  addRecordAttributeAction,
};
