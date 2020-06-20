/**
 *
 * RecordAttribute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Trash } from 'react-bootstrap-icons';

import { FormattedMessage } from 'react-intl';
import messages from './recordAttribute.messages';
import styles from './recordAttribute.styles.scss';

function RecordAttribute({
  keyText,
  value,
  handleValueChange,
  handleRemoveAttRecord,
}) {
  const handleChange = e => {
    handleValueChange(parseInt(e.currentTarget.value, 10));
  };

  return (
    <div className={`row ${styles.attibuteItem}`}>
      <div className={`col-sm-5 ${styles.recordKeyText}`}>
        <FormattedMessage {...messages[keyText]} />
      </div>
      <div className="col-sm-5">
        <input
          className="form-control"
          onChange={handleChange}
          value={value}
          type="number"
        />
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-light"
          type="button"
          onClick={handleRemoveAttRecord}
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

RecordAttribute.propTypes = {
  keyText: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleRemoveAttRecord: PropTypes.func.isRequired,
};

export default RecordAttribute;
