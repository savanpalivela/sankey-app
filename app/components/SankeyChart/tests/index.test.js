/**
 *
 * Tests for Sankey
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { DATA_1 } from '../../../../internals/mocks/data';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import SankeyChart from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Sankey />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <SankeyChart records={DATA_1} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
