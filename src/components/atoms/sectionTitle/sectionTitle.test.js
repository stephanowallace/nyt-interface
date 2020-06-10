import React from 'react';
import { shallow } from 'enzyme';
import SectionTitle from '.';

describe('Section title', () => {
  it('renders default state', () => {
    const component = shallow(<SectionTitle>test</SectionTitle>);
    expect(component).toMatchSnapshot();
  });

  it('renders loader', () => {
    const component = shallow(<SectionTitle loading>test</SectionTitle>);
    expect(component).toMatchSnapshot();
  });

  it('renders child in an h1 tag', () => {
    const component = shallow(<SectionTitle>test</SectionTitle>);
    expect(component.find('h1').text()).toBe('test');
  });

  it('doesnt render if no child', () => {
    const component = shallow(<SectionTitle />);
    expect(component.find('h1')).toHaveLength(0);
  });
});
