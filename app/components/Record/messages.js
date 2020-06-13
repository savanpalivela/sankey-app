/*
 * Record Messages
 *
 * This contains all the text for the Record component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Record';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Record component!',
  },
  income: {
    id: `${scope}.income`,
    defaultMessage: 'Income Records',
  },
  expense: {
    id: `${scope}.expense`,
    defaultMessage: 'Expense Records',
  },
  addRecordAtt: {
    id: `${scope}.addRecordAtt`,
    defaultMessage: 'Add',
  },
  operations: {
    id: `${scope}.operations`,
    defaultMessage: 'Operations',
  },
  nonOperating: {
    id: `${scope}.nonOperating`,
    defaultMessage: 'Non - Operating',
  },
  fixed: {
    id: `${scope}.fixed`,
    defaultMessage: 'Fixed',
  },
  variable: {
    id: `${scope}.variable`,
    defaultMessage: 'Variable',
  },
  services: {
    id: `${scope}.services`,
    defaultMessage: 'Services',
  },
  recurring: {
    id: `${scope}.recurring`,
    defaultMessage: 'Recurring',
  },
  project: {
    id: `${scope}.project`,
    defaultMessage: 'Project',
  },
  consultation: {
    id: `${scope}.consultation`,
    defaultMessage: 'Consultation',
  },
  interest: {
    id: `${scope}.interest`,
    defaultMessage: 'Interest',
  },
  tax: {
    id: `${scope}.tax`,
    defaultMessage: 'Tax',
  },
  lose: {
    id: `${scope}.lose`,
    defaultMessage: 'Lose',
  },
  defaultSelect: {
    id: `${scope}.defaultSelect`,
    defaultMessage: 'Please Select',
  },
});
