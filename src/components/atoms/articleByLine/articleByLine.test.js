import React from 'react';
import { render, shallow } from 'enzyme';
import ArticleByLine from '.';

describe('Article ByLine', () => {
  it('renders loader', () => {
    const component = render(<ArticleByLine loading>test</ArticleByLine>);
    expect(component).toMatchSnapshot();
    expect(component.find('.loader')).toHaveLength(1);
  });

  it('renders content', () => {
    const component = render(<ArticleByLine>test</ArticleByLine>);
    expect(component.find('span').text()).toBe('test');
    expect(component).toMatchSnapshot();
  });

  it('accepts className prop', () => {
    const component = shallow(<ArticleByLine className="testClass">test</ArticleByLine>);
    expect(component.find('.testClass').exists()).toBeTruthy();
  });

  it('rejects not defined props', () => {
    const component = shallow(<ArticleByLine test="test">test</ArticleByLine>);
    expect(component.props().test).toBeUndefined();
  });
});
