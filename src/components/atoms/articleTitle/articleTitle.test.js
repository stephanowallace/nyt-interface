import React from 'react';
import { shallow } from 'enzyme';
import ArticleTitle from '.';

describe('Article title', () => {
  it('renders default state', () => {
    const component = shallow(<ArticleTitle>test</ArticleTitle>);
    expect(component).toMatchSnapshot();
  });

  it('renders loader', () => {
    const component = shallow(<ArticleTitle loading>test</ArticleTitle>);
    expect(component).toMatchSnapshot();
  });

  it('renders child in an h2 tag', () => {
    const component = shallow(<ArticleTitle>test</ArticleTitle>);
    expect(component.find('h2').text()).toBe('test');
  });
});
