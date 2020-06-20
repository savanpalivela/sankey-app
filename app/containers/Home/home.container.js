/**
 *
 * Home
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectIsLoaded,
  makeSelectIncome,
  makeSelectExpense,
} from './home.selectors';
import reducer from './home.reducer';
import saga from './home.saga';
import messages from './home.messages';
import SankeyChart from '../../components/SankeyChart';
import Record from '../../components/Record';
import {
  loadRecordData,
  editRecordValuesAction,
  removeRecordAttributeAction,
  addRecordAttributeAction,
} from './home.actions';
import {
  INCOME_RECORD_ATT_KEYS,
  EXPENSE_RECORD_ATT_KEYS,
} from './home.constants';
import styles from './home.styles.scss';
export function Home({
  loadData,
  isLoaded,
  income,
  expense,
  editRecordValue,
  removeRecordAttribute,
  addRecordAttribute,
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  useEffect(() => {
    if (!isLoaded) {
      loadData();
    }
  });

  const handleValueChange = (recordType, key, value) => {
    editRecordValue(recordType, key, value);
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
      {income && income.length && (
        <SankeyChart income={income} expense={expense} />
      )}
      <div className="row">
        <div className="col-sm-6">
          <Record
            title="income"
            data={income}
            attributeKeyList={INCOME_RECORD_ATT_KEYS}
            handleValueChange={(key, val) => {
              handleValueChange('income', key, val);
            }}
            handleRemoveAttRecord={index => {
              removeRecordAttribute('income', index);
            }}
            handleAddAttRecord={attObj => {
              addRecordAttribute('income', attObj);
            }}
          />
        </div>
        <div className="col-sm-6">
          <Record
            title="expense"
            data={expense}
            attributeKeyList={EXPENSE_RECORD_ATT_KEYS}
            handleValueChange={(key, val) => {
              handleValueChange('expense', key, val);
            }}
            handleRemoveAttRecord={index => {
              removeRecordAttribute('expense', index);
            }}
            handleAddAttRecord={attObj => {
              addRecordAttribute('expense', attObj);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
  income: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  removeRecordAttribute: PropTypes.func.isRequired,
  addRecordAttribute: PropTypes.func.isRequired,
  editRecordValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  income: makeSelectIncome(),
  expense: makeSelectExpense(),
  isLoaded: makeSelectIsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(loadRecordData());
    },
    editRecordValue: (recordType, key, value) => {
      const payload = {
        recordType,
        key,
        value,
      };
      dispatch(editRecordValuesAction(payload));
    },
    removeRecordAttribute: (recordType, index) => {
      const payload = {
        recordType,
        index,
      };
      dispatch(removeRecordAttributeAction(payload));
    },
    addRecordAttribute: (recordType, attObj) => {
      const payload = {
        recordType,
        attObj,
      };
      dispatch(addRecordAttributeAction(payload));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
