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
} from './constants';

const defaultAction = () => ({
  type: DEFAULT_ACTION,
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

export { defaultAction, loadSankeyData, setSankeyData, setSankeyDataError };
