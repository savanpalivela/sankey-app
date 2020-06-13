/**
 *
 * Record
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Plus } from 'react-bootstrap-icons';
import messages from './messages';
import RecordAttribute from '../RecordAttribute';

function Record({
  title,
  data,
  handleValueChange,
  handleRemoveAttRecord,
  handleAddAttRecord,
  attributeKeyList,
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

  const addRecordAttEl = () => {
    if (showAddEl) {
      return (
        <div className="row">
          <div className="col-sm-5">
            <select
              className="form-control"
              onChange={e => {
                setNewRecordAttObj({
                  ...newRecordAttObj,
                  key:
                    e.currentTarget.options[e.currentTarget.selectedIndex]
                      .value,
                });
              }}
            >
              <FormattedMessage {...messages.defaultSelect}>
                {message => <option value="">{message}</option>}
              </FormattedMessage>
              {unusedAttributes.map((item, i) => {
                const key = `keys-${title}-${i}`;
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
              disabled={
                newRecordAttObj.key === '' || newRecordAttObj.value === 0
              }
              className="btn btn-light"
              type="button"
              onClick={handleAddAttClick}
            >
              <FormattedMessage {...messages.addRecordAtt} />
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <div className="card-header">
        <FormattedMessage {...messages[title]} />
      </div>
      <div className="card-body">
        {data &&
          data.length > -1 &&
          data.map((item, i) => (
            <RecordAttribute
              key={item.key}
              keyText={item.key}
              value={item.value}
              handleValueChange={val => handleValueChange(item.key, val)}
              handleRemoveAttRecord={() => handleRemoveAttRecord(i)}
            />
          ))}
        {addRecordAttEl()}
        {unusedAttributes && unusedAttributes.length === 0 ? null : (
          <button
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleRemoveAttRecord: PropTypes.func.isRequired,
  handleAddAttRecord: PropTypes.func.isRequired,
  attributeKeyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Record;
