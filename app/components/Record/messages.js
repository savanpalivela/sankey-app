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
});
