/**
 *
 * Tests for Record
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { INCOME_5 } from '../../../../internals/mocks/data';
import { INCOME_RECORD_ATT_KEYS } from '../../../containers/Home/constants';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Record from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Record />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Record
          title="income"
          data={INCOME_5}
          attributeKeyList={INCOME_RECORD_ATT_KEYS}
          handleValueChange={() => {}}
          handleRemoveAttRecord={() => {}}
          handleAddAttRecord={() => {}}
        />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
