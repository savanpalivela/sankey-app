/**
 *
 * Sankey
 *
 */

import React from 'react';
import { Sankey } from 'react-vis';

import PropTypes from 'prop-types';

import styles from './styles.scss';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function SankeyChart({ nodes, links }) {
  return (
    <div className={`${styles.sankeyWrapper} card`}>
      <Sankey
        className={`${styles.sankeyWrapper}`}
        nodes={nodes}
        links={links}
        width={800}
        height={400}
      />
    </div>
  );
}

SankeyChart.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SankeyChart;
