/**
 *
 * Tests for HeaderCom
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import ShallowRenderer from 'react-test-renderer/shallow';

import { HeaderCom } from '../headerCom.container';

const renderer = new ShallowRenderer();

describe('<HeaderCom />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<HeaderCom changeLocaleHandler={() => {}} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    renderer.render(<HeaderCom changeLocaleHandler={() => {}} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
