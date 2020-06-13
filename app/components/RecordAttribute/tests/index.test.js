/**
 *
 * Tests for RecordAttribute
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import RecordAttribute from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<RecordAttribute />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <RecordAttribute
          keyText="operations"
          value={100}
          handleValueChange={() => {}}
          handleRemoveAttRecord={() => {}}
        />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
