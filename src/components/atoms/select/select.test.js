import React from 'react';
import { shallow } from 'enzyme';
import selectOptions from './__fixture__/selectOptions';
import Select from '.';

describe('Select', () => {
  it('renders default state', () => {
    const props = {
      options: selectOptions,
      onChange: jest.fn(),
      selectedValue: selectOptions[0],
    };
    const component = shallow(<Select {...props} />);
    expect(component).toMatchSnapshot();
  });
});
