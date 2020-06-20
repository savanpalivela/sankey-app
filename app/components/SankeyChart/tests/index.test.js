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
import { LINK_1, NODE_5 } from '../../../../internals/mocks/data';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Sankey from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Sankey />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Sankey links={LINK_1} nodes={NODE_5} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
