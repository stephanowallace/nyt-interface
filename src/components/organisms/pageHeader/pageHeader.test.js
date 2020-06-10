import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from '.';

describe('PageHeader', () => {
  it('renders default state', () => {
    const component = shallow(<PageHeader title="test" />);
    expect(component).toMatchSnapshot();
  });
});
