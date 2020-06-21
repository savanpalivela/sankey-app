/**
 *
 * Home
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectIsLoaded, makeSelectRecords } from './home.selectors';
import reducer from './home.reducer';
import saga from './home.saga';
import messages from './home.messages';
import SankeyChart from '../../components/SankeyChart';
import Record from '../../components/Record';
import {
  getIncomeRecords,
  getExpenseRecords,
} from '../../utils/adapters/dataUtils';
import {
  loadRecordData,
  updateIncomeRecordValueAction,
  updateExpenseRecordValueAction,
  addIncomeRecordAction,
  addExpenseRecordAction,
  removeIncomeRecordAction,
  removeExpenseRecordAction,
} from './home.actions';
import {
  INCOME_RECORD_ATT_KEYS,
  EXPENSE_RECORD_ATT_KEYS,
} from './home.constants';
import styles from './home.styles.scss';
export function Home({
  loadData,
  isLoaded,
  records,
  updateIncomeRecordValue,
  updateExpenseRecordValue,
  addIncomeRecord,
  addExpenseRecord,
  removeIncomeRecord,
  removeExpenseRecord,
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  useEffect(() => {
    if (!isLoaded) {
      loadData();
    }
  });

  const [selectedIncomeIndex, setSelectedIncomeIndex] = useState(0);
  const handleValueChange = (recordType, index, value) => {
    if (recordType === 'income') {
      updateIncomeRecordValue(index, value);
    } else if (recordType === 'expense') {
      updateExpenseRecordValue(selectedIncomeIndex, index, value);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <h3 className={styles.pageTitle}>
        <FormattedMessage {...messages.header} />
      </h3>
      {records && records.length && <SankeyChart records={records} />}
      {records && records.length && (
        <div className="row">
          <div className="col-sm-6">
            <Record
              title="income"
              data={getIncomeRecords(records)}
              attributeKeyList={INCOME_RECORD_ATT_KEYS}
              handleValueChange={(index, val) => {
                handleValueChange('income', index, val);
              }}
              handleRemoveAttRecord={index => {
                if (index === selectedIncomeIndex) {
                  setSelectedIncomeIndex(0);
                }
                removeIncomeRecord(index);
              }}
              handleAddAttRecord={({ key, value }) => {
                addIncomeRecord(key, value);
                setSelectedIncomeIndex(records.length);
              }}
              enableAttSelection
              onRowSelect={i => {
                setSelectedIncomeIndex(i);
              }}
              selectedAttrubiteIndex={selectedIncomeIndex}
            />
          </div>
          <div className="col-sm-6">
            <Record
              title="expense"
              titleSecondary={records[selectedIncomeIndex].incomeType}
              data={getExpenseRecords(records[selectedIncomeIndex].valueMap)}
              attributeKeyList={EXPENSE_RECORD_ATT_KEYS}
              handleValueChange={(index, val) => {
                handleValueChange('expense', index, val);
              }}
              handleRemoveAttRecord={index => {
                removeExpenseRecord(selectedIncomeIndex, index);
              }}
              handleAddAttRecord={({ key, value }) => {
                addExpenseRecord(selectedIncomeIndex, key, value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  updateIncomeRecordValue: PropTypes.func.isRequired,
  updateExpenseRecordValue: PropTypes.func.isRequired,
  addIncomeRecord: PropTypes.func.isRequired,
  addExpenseRecord: PropTypes.func.isRequired,
  removeIncomeRecord: PropTypes.func.isRequired,
  removeExpenseRecord: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  isLoaded: makeSelectIsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(loadRecordData());
    },
    updateIncomeRecordValue: (incomeIndex, value) => {
      dispatch(
        updateIncomeRecordValueAction({
          incomeIndex,
          value,
        }),
      );
    },
    updateExpenseRecordValue: (incomeIndex, expenseIndex, value) => {
      dispatch(
        updateExpenseRecordValueAction({
          incomeIndex,
          expenseIndex,
          value,
        }),
      );
    },
    addIncomeRecord: (incomeKeyText, value) => {
      dispatch(
        addIncomeRecordAction({
          incomeKeyText,
          value,
        }),
      );
    },
    addExpenseRecord: (incomeIndex, expenseKeyText, value) => {
      dispatch(
        addExpenseRecordAction({
          incomeIndex,
          expenseKeyText,
          value,
        }),
      );
    },
    removeIncomeRecord: incomeIndex => {
      dispatch(
        removeIncomeRecordAction({
          incomeIndex,
        }),
      );
    },
    removeExpenseRecord: (incomeIndex, expenseIndex) => {
      dispatch(
        removeExpenseRecordAction({
          incomeIndex,
          expenseIndex,
        }),
      );
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
