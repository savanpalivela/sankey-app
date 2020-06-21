import { createSelector } from 'reselect';
import { initialState } from './home.reducer';

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
const makeSelectRecords = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.records,
  );
const makeSelectExpense = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.expense,
  );

const makeSelectIsLoaded = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.isLoaded,
  );

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectNode,
  makeSelectLink,
  makeSelectIsLoaded,
  makeSelectRecords,
  makeSelectExpense,
};
