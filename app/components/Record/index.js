/**
 *
 * Record
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RecordAttribute from '../RecordAttribute';

function Record({ title, data, handleValueChange, handleRemoveAttRecord }) {
  return (
    <div className="card">
      <div className="card-header">
        <FormattedMessage {...messages[title]} />
      </div>
      <div className="card-body">
        {data.map((item, i) => (
          <RecordAttribute
            key={item.key}
            keyText={item.key}
            value={item.value}
            handleValueChange={val => handleValueChange(item.key, val)}
            handleRemoveAttRecord={() => handleRemoveAttRecord(i)}
          />
        ))}
      </div>
    </div>
  );
}

Record.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf().isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleRemoveAttRecord: PropTypes.func.isRequired,
};

export default Record;
