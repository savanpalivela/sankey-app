/**
 *
 * RecordAttribute
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RecordAttribute() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RecordAttribute.propTypes = {};

export default RecordAttribute;
