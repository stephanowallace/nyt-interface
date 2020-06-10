import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('renders text inside button', () => {
    const onClickMock = jest.fn();
    const component = shallow(<Button onClick={onClickMock}>test child</Button>);
    expect(component.text()).toBe('test child');
  });

  it('sets loading text when loading prop is true', () => {
    const onClickMock = jest.fn();
    const component = shallow(<Button loading onClick={onClickMock}>test child</Button>);
    expect(component.text()).toBe('loading');
  });

  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const component = shallow(<Button onClick={onClickMock}>test child</Button>);
    component.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  it('doesnt call onClick prop if loading or disabled', () => {
    const onClickMock = jest.fn();
    const component = shallow(<Button onClick={onClickMock} loading>test child</Button>);
    component.find('button').simulate('click');
    expect(onClickMock).not.toHaveBeenCalled();

    component.setProps({ disabled: true, loading: false });
    component.find('button').simulate('click');
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
