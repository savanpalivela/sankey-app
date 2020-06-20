/**
 *
 * Sankey
 *
 */

import React, { useState } from 'react';
import { Sankey, Hint } from 'react-vis';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import GetSankeyData from '../../utils/adapters/sankeyData';

import styles from './sankeyChart.styles.scss';

import messages from './sankeyChart-messages';

function SankeyChart({ income, expense, intl }) {
  const [activeLink, setActiveLink] = useState(null);
  const { nodes, links } = GetSankeyData(income, expense);
  // const intl = useIntl();
  const renderHint = () => {
    // calculate center x,y position of link for positioning of hint
    const x =
      activeLink.source.x1 + (activeLink.target.x0 - activeLink.source.x1) / 2;
    const y = activeLink.y0 - (activeLink.y0 - activeLink.y1) / 2;
    const hintValue = {
      [`${activeLink.source.name} ➞ ${
        activeLink.target.name
      }`]: intl.formatNumber(activeLink.value),
    };
    return <Hint x={x} y={y} value={hintValue} />;
  };

  if (nodes === undefined) {
    return null;
  }

  return (
    <div className={`${styles.sankeyWrapper} card`}>
      <Sankey
        className={`${styles.sankeyWrapper}`}
        nodes={nodes.map(item => ({
          name: intl.formatMessage({ ...messages[item.name] }),
          key: item.key,
        }))}
        links={links}
        width={800}
        height={400}
        style={{
          labels: {
            color: '#404040',
          },
        }}
        onLinkMouseOver={node => setActiveLink(() => node)}
        onLinkMouseOut={() => setActiveLink(() => {})}
      >
        {activeLink && renderHint()}
      </Sankey>
    </div>
  );
}

SankeyChart.propTypes = {
  income: PropTypes.arrayOf(PropTypes.object).isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(SankeyChart);
