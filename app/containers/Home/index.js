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
import { makeSelectNode, makeSelectLink } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SankeyChart from '../../components/Sankey';

import { loadSankeyData } from './actions';

export function Home({ loadData, nodes, links }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  useEffect(() => {
    // dispatch(loadSankeyData());
    if (nodes.length === 0) {
      loadData();
    }
  });
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <SankeyChart nodes={nodes} links={links} />
    </div>
  );
}

Home.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  nodes: makeSelectNode(),
  links: makeSelectLink(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(loadSankeyData());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
