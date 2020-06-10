import React from 'react';
import { shallow } from 'enzyme';
import FontUtil from 'Utils/fontUtil';
import FontSizeGroupButton from '.';

describe('FontSizeGroupButton', () => {
  it('renders all buttons', () => {
    const component = shallow(<FontSizeGroupButton />);
    expect(component.find('Button')).toHaveLength(3);
  });

  it('renders correct labels', () => {
    const component = shallow(<FontSizeGroupButton />);
    expect(component.find('Button').at(0).dive().text()).toBe('A -');
    expect(component.find('Button').at(1).dive().text()).toBe('A');
    expect(component.find('Button').at(2).dive().text()).toBe('A +');
  });

  it('inserts className', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    expect(component.props().className).toBe('test');
  });

  it('initial state of fontSize from localStorage', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    expect(component.state().fontSize).toBe(FontUtil.rootFontSize);
  });

  it('sets default size', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    component.find('Button').at(1).simulate('click');
    expect(component.state().fontSize).toBe(16);
  });

  it('increments font size', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    const { fontSize } = component.state();
    component.find('Button').at(2).simulate('click');
    expect(component.state().fontSize).toBe(fontSize + 1);
  });

  it('decrements font size', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    const { fontSize } = component.state();
    component.find('Button').at(0).simulate('click');
    expect(component.state().fontSize).toBe(fontSize - 1);
  });

  it('applies root style', () => {
    const component = shallow(<FontSizeGroupButton className="test" />);
    component.find('Button').at(0).simulate('click');
    expect(document.querySelector(':root').style.fontSize).toBe(`${component.state().fontSize}px`);
  });
});
