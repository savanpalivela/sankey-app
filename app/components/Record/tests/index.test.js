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
import ShallowRenderer from 'react-test-renderer/shallow';

import { DATA } from '../../../../internals/mocks/data';
import { INCOME_RECORD_ATT_KEYS } from '../../../containers/Home/home.constants';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { getIncomeRecords } from '../../../utils/adapters/dataUtils';
import Record from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

const renderer = new ShallowRenderer();

describe('<Record />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Record
          title="income"
          data={getIncomeRecords(DATA)}
          attributeKeyList={INCOME_RECORD_ATT_KEYS}
          handleValueChange={() => {}}
          handleRemoveAttRecord={() => {}}
          handleAddAttRecord={() => {}}
        />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Record
          title="income"
          data={getIncomeRecords(DATA)}
          attributeKeyList={INCOME_RECORD_ATT_KEYS}
          handleValueChange={() => {}}
          handleRemoveAttRecord={() => {}}
          handleAddAttRecord={() => {}}
        />
      </IntlProvider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
