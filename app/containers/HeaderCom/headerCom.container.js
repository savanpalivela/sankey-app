/**
 *
 * HeaderCom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

// import { FormattedMessage } from 'react-intl';
// import messages from './headerCom-messages';
import styles from './headerCom.styles.scss';
import centimeLogo from '../../images/centime-logo.png';
import { changeLocale } from '../LanguageProvider/languageProvider.actions';

export function HeaderCom({ changeLocaleHandler }) {
  return (
    <div className={`${styles.headerContainer} row`}>
      <div className="col-sm-2">
        <img className={styles.logo} alt="logo" src={centimeLogo} />
      </div>
      <div className="col-sm-8" />
      <div className={`${styles.langBtnGroup} col-sm-2`}>
        <button
          type="button"
          className="btn btn-default"
          onClick={() => {
            changeLocaleHandler('en');
          }}
        >
          EN
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={() => {
            changeLocaleHandler('de');
          }}
        >
          DE
        </button>
      </div>
    </div>
  );
}

HeaderCom.propTypes = {
  changeLocaleHandler: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    changeLocaleHandler: lang => {
      dispatch(changeLocale(lang));
    },
  };
}

const mapStateToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HeaderCom);
