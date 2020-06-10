import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('Input', () => {
  it('renders an input', () => {
    const component = shallow(<Input />);
    expect(component.find('input')).toHaveLength(1);
  });

  it('insert class prop', () => {
    const component = shallow(<Input className="classTest" />);
    expect(component.find('.classTest')).toHaveLength(1);
  });

  
});
