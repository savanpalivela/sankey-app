import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate,
  );

const makeSelectNode = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.nodes,
  );

const makeSelectLink = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.links,
  );

export default makeSelectHome;
export { selectHomeDomain, makeSelectNode, makeSelectLink };
