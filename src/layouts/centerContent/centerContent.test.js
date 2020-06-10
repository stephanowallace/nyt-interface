import React from 'react';
import { shallow } from 'enzyme';
import CenterContent from '.';

describe('CenterContent', () => {
  it('Renders default state', () => {
    const component = shallow(<CenterContent><div>content</div></CenterContent>);
    expect(component).toMatchSnapshot();
  });
});
