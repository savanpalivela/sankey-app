/**
 *
 * Sankey
 *
 */

import React, { useState, useMemo } from 'react';
import { Sankey, Hint } from 'react-vis';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import GetSankeyData from '../../utils/adapters/sankeyData';

import styles from './sankeyChart.styles.scss';
import messages from './sankeyChart.messages';

const BLURRED_LINK_OPACITY = 0.4;
const FOCUSED_LINK_OPACITY = 0.8;
function SankeyChart({ records, intl }) {
  const [activeLink, setActiveLink] = useState(null);
  const { nodes, links } = useMemo(() => GetSankeyData(records), [records]);

  const renderHint = () => {
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

  return (
    nodes && (
      <div className={`${styles.sankeyWrapper} card`}>
        <Sankey
          className={`${styles.sankeyWrapper}`}
          nodes={nodes.map(item => ({
            name: intl.formatMessage({ ...messages[item.name] }),
            key: item.key,
          }))}
          links={links.map((d, i) => ({
            ...d,
            opacity:
              activeLink && i === activeLink.index
                ? FOCUSED_LINK_OPACITY
                : BLURRED_LINK_OPACITY,
          }))}
          width={1000}
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
    )
  );
}

SankeyChart.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(SankeyChart);
