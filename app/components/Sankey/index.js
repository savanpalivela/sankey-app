/**
 *
 * Sankey
 *
 */

import React from 'react';
import { Sankey } from 'react-vis';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// const nodes = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
// const links = [
//   { source: 0, target: 1, value: 10 },
//   { source: 0, target: 2, value: 20 },
//   { source: 1, target: 2, value: 20 },
// ];

function SankeyChart({ nodes, links }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Sankey nodes={nodes} links={links} width={200} height={200} />
    </div>
  );
}

SankeyChart.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SankeyChart;
