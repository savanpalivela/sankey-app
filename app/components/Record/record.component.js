/**
 *
 * Record
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Plus } from 'react-bootstrap-icons';
import messages from './record.messages';
import RecordAttribute from '../RecordAttribute';
import styles from './record.styles.scss';
function Record({
  title,
  data,
  handleValueChange,
  handleRemoveAttRecord,
  handleAddAttRecord,
  attributeKeyList,
  onRowSelect,
  selectedAttrubiteIndex,
  enableAttSelection,
  titleSecondary,
}) {
  const [showAddEl, setShowAddEl] = useState(false);
  const [unusedAttributes, setUnusedAttributes] = useState(attributeKeyList);
  const [newRecordAttObj, setNewRecordAttObj] = useState({ key: '', value: 0 });

  useEffect(() => {
    if (data) {
      const usedAttKeys = data.map(i => i.key);
      const newUnusedAttributes = attributeKeyList.filter(
        x => !usedAttKeys.includes(x),
      );
      setUnusedAttributes(() => newUnusedAttributes);
    }
  }, [data]);

  const handleAddAttClick = () => {
    handleAddAttRecord(newRecordAttObj);
    setNewRecordAttObj(() => ({ key: '', value: 0 }));
    setShowAddEl(false);
  };

  const getRecordEl = (item, i) => {
    const recordEl = (
      <RecordAttribute
        keyText={item.key}
        value={item.value}
        handleValueChange={val => handleValueChange(i, val)}
        handleRemoveAttRecord={() => handleRemoveAttRecord(i)}
      />
    );

    if (enableAttSelection) {
      return (
        <div
          role="button"
          onClick={() => {
            onRowSelect(i);
          }}
          onKeyDown={() => {
            onRowSelect(i);
          }}
          tabIndex={0}
          className={`${
            selectedAttrubiteIndex === i ? styles.active : ''
          } card ${styles.selectableRecord}`}
        >
          {recordEl}
        </div>
      );
    }
    return recordEl;
  };

  // Add record Attribute Element
  const addRecordAttEl = () =>
    showAddEl && (
      <div className="row" data-testid="add-attribute-el">
        <div className="col-sm-5">
          <select
            className="form-control"
            onChange={e => {
              setNewRecordAttObj({
                ...newRecordAttObj,
                key:
                  e.currentTarget.options[e.currentTarget.selectedIndex].value,
              });
            }}
          >
            <FormattedMessage {...messages.defaultSelect}>
              {message => <option value="">{message}</option>}
            </FormattedMessage>
            {unusedAttributes.map(item => {
              const key = `keys-${title}-${item}`;
              return (
                <FormattedMessage {...messages[item]} key={key}>
                  {message => <option value={item}>{message}</option>}
                </FormattedMessage>
              );
            })}
          </select>
        </div>
        <div className="col-sm-5">
          <input
            className="form-control"
            type="number"
            value={newRecordAttObj.value}
            onChange={e => {
              setNewRecordAttObj({
                ...newRecordAttObj,
                value: parseInt(e.currentTarget.value, 10),
              });
            }}
          />
        </div>
        <div className="col-sm-2">
          <button
            disabled={newRecordAttObj.key === '' || newRecordAttObj.value === 0}
            className="btn btn-light"
            type="button"
            data-testid="add-attribute-btn"
            onClick={handleAddAttClick}
          >
            <FormattedMessage {...messages.addRecordAtt} />
          </button>
        </div>
      </div>
    );

  return (
    <div className="card">
      <div className="card-header">
        <FormattedMessage {...messages[title]} />
        {titleSecondary && (
          <span>
            &nbsp;Mapped to&nbsp;
            <strong>
              <FormattedMessage {...messages[titleSecondary]} />
            </strong>
          </span>
        )}
      </div>
      <div className="card-body" data-testid="record-main">
        {data &&
          data.length > -1 &&
          data.map((item, i) => (
            <div key={item.key}>{getRecordEl(item, i)}</div>
          ))}
        {addRecordAttEl()}
        {unusedAttributes && unusedAttributes.length === 0 ? null : (
          <button
            data-testid="enable-add-btn"
            className="btn btn-light"
            type="button"
            onClick={() => {
              setShowAddEl(true);
            }}
          >
            <Plus size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

Record.propTypes = {
  title: PropTypes.string.isRequired,
  titleSecondary: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleRemoveAttRecord: PropTypes.func.isRequired,
  handleAddAttRecord: PropTypes.func.isRequired,
  attributeKeyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelect: PropTypes.func,
  selectedAttrubiteIndex: PropTypes.number,
  enableAttSelection: PropTypes.bool,
};

Record.defaultProps = {
  onRowSelect: () => {},
  selectedAttrubiteIndex: -1,
  enableAttSelection: false,
  titleSecondary: '',
};

export default Record;
