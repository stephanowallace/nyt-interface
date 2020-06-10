import React from 'react';
import { shallow } from 'enzyme';
import Error from '.';

describe('Error', () => {
  it('renders default state', () => {
    const component = shallow(<Error />);
    expect(component).toMatchSnapshot();
  });
});
