/**
 *
 * HeaderCom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './styles.scss';
import centimeLogo from '../../images/centime-logo.png';

function HeaderCom({ languageSelect }) {
  return (
    <div className={`${styles.headerContainer} row`}>
      <div className="col-sm-2">
        <img className={styles.logo} alt="logo" src={centimeLogo} />
      </div>
      <div className="col-sm-8" />
      <div className="col-sm-2">
        <button
          type="button"
          className="btn btn-default"
          onClick={() => {
            languageSelect('en');
          }}
        >
          EN
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={() => {
            languageSelect('de');
          }}
        >
          DE
        </button>
      </div>
    </div>
  );
}

HeaderCom.propTypes = {
  languageSelect: PropTypes.func.isRequired,
};

export default HeaderCom;
