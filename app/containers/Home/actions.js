/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SANKEY_DATA,
  GET_SANKEY_DATA_SUCCESS,
  GET_SANKEY_DATA_ERROR,
  UPDATE_RECORD_DATA,
  REMOVE_ATT_RECORD_DATA,
} from './constants';

const defaultAction = () => ({
  type: DEFAULT_ACTION,
});

const editRecordValuesAction = payload => ({
  type: UPDATE_RECORD_DATA,
  payload,
});

const loadSankeyData = () => ({
  type: GET_SANKEY_DATA,
});

const setSankeyData = payload => ({
  type: GET_SANKEY_DATA_SUCCESS,
  payload,
});

const setSankeyDataError = payload => ({
  type: GET_SANKEY_DATA_ERROR,
  payload,
});

const removeRecordAttributeAction = payload => ({
  type: REMOVE_ATT_RECORD_DATA,
  payload,
});

export {
  defaultAction,
  loadSankeyData,
  setSankeyData,
  setSankeyDataError,
  editRecordValuesAction,
  removeRecordAttributeAction,
};
