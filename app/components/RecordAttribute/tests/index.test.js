/**
 *
 * Tests for RecordAttribute
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import RecordAttribute from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

const renderer = new ShallowRenderer();

describe('<RecordAttribute />', () => {
  it('Should render and match the snapshot', () => {
    renderer.render(
      <RecordAttribute
        keyText="operations"
        value={1000}
        handleValueChange={() => {}}
        handleRemoveAttRecord={() => {}}
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

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
