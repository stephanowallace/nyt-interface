import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from '.';

describe('Link button', () => {
  it('renders default state', () => {
    const component = shallow(<LinkButton>test</LinkButton>);
    expect(component).toMatchSnapshot();
  });

  it('calls on click', () => {
    const onClick = jest.fn();
    const component = shallow(<LinkButton onClick={onClick}>test</LinkButton>);
    component.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('doesnt call onClick function if disabled', () => {
    const onClick = jest.fn();
    const component = shallow(<LinkButton onClick={onClick} disabled>test</LinkButton>);
    component.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders child in a button tag', () => {
    const component = shallow(<LinkButton>test</LinkButton>);
    expect(component.find('button').text()).toBe('test');
  });
});
