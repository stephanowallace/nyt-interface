import React from 'react';
import { shallow } from 'enzyme';
import Constants from 'Constants';
import Responsive from '.';

describe('Responsive', () => {
  const child = ({ mode }) => <div>{mode}</div>;

  it('renders default state', () => {
    const component = shallow(<Responsive>{child}</Responsive>);
    expect(component).toMatchSnapshot();
  });

  it('clears timeout on resize', () => {
    const component = shallow(<Responsive>{child}</Responsive>);
    component.instance().timeout = 100;
    const clearTimeoutFunc = jest.spyOn(global, 'clearTimeout');
    const setTimeoutFunc = jest.spyOn(global, 'clearTimeout');
    global.innerWidth = 763;
    global.dispatchEvent(new Event('resize'));
    expect(clearTimeoutFunc).toHaveBeenCalledWith(100);
    expect(setTimeoutFunc).toHaveBeenCalled();
  });

  it('removes listener on unmount', () => {
    const component = shallow(<Responsive>{child}</Responsive>);
    const removeEventListenerFunc = jest.spyOn(global, 'removeEventListener');
    component.unmount();
    expect(removeEventListenerFunc).toHaveBeenCalled();
  });

  it('returns correct screen sizes', () => {
    const component = shallow(<Responsive>{child}</Responsive>);
    global.innerWidth = Constants.SCREEN_SIZES.EXTRA_SMALL - 1;
    expect(component.instance().getScreenMode()).toBe(Constants.SCREEN_SIZES.EXTRA_SMALL);
    global.innerWidth = Constants.SCREEN_SIZES.EXTRA_SMALL + 1;
    expect(component.instance().getScreenMode()).toBe(Constants.SCREEN_SIZES.SMALL);
    global.innerWidth = Constants.SCREEN_SIZES.SMALL + 1;
    expect(component.instance().getScreenMode()).toBe(Constants.SCREEN_SIZES.MEDIUM);
    global.innerWidth = Constants.SCREEN_SIZES.MEDIUM + 1;
    expect(component.instance().getScreenMode()).toBe(Constants.SCREEN_SIZES.LARGE);
  });
});
