import React from 'react';
import { shallow } from 'enzyme';
import SecondaryText from '.';

describe('SecondaryText', () => {
  it('renders default state', () => {
    const component = shallow(<SecondaryText>test</SecondaryText>);
    expect(component).toMatchSnapshot();
  });
});
