import React from 'react';
import { shallow } from 'enzyme';
import ContentLoader from 'Components/atoms/contentLoader';
import ArticleImage from '.';

describe('Article image', () => {
  it('renders default state', () => {
    const props = { src: 'test', alt: 'test' };
    const component = shallow(<ArticleImage {...props} />);
    expect(component.find('img').exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it('renders loader', () => {
    const component = shallow(<ArticleImage loading />);
    expect(component.contains(<ContentLoader height="75px" width="75px" />)).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it('missing src prop', () => {
    const props = { alt: 'test' };
    const component = shallow(<ArticleImage {...props} />);
    expect(component.html()).toBeNull();
  });

  it('missing alt prop', () => {
    const props = { src: 'test' };
    const component = shallow(<ArticleImage {...props} />);
    expect(component.html()).toBeNull();
  });
});
