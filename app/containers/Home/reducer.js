/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_SANKEY_DATA,
  GET_SANKEY_DATA_SUCCESS,
  GET_SANKEY_DATA_ERROR,
} from './constants';

export const initialState = {
  nodes: [],
  links: [],
  errorMsg: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SANKEY_DATA:
        break;
      case GET_SANKEY_DATA_SUCCESS: {
        const { nodes, links } = action.payload;
        draft.nodes = nodes;
        draft.links = links;
        break;
      }
      case GET_SANKEY_DATA_ERROR:
        draft.nodes = [];
        draft.links = [];
        draft.errorMsg = action.payload;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default homeReducer;
