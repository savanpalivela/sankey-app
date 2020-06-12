/**
 *
 * HeaderCom
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './styles.scss';
import centimeLogo from '../../images/centime-logo.png';

function HeaderCom() {
  return (
    <div className={`${styles.headerContainer} row`}>
      <div className="col-sm-2">
        <img className={styles.logo} alt="logo" src={centimeLogo} />
      </div>
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}

HeaderCom.propTypes = {};

export default HeaderCom;
