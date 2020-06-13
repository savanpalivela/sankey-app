/*
 * RecordAttribute Messages
 *
 * This contains all the text for the RecordAttribute component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.RecordAttribute';

export default defineMessages({
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
  lose: {
    id: `${scope}.lose`,
    defaultMessage: 'Lose',
  },
});
