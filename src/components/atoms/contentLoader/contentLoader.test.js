import React from 'react';
import { shallow } from 'enzyme';
import ContentLoader from '.';

describe('Content loader', () => {
  it('Renders default state', () => {
    const component = shallow(<ContentLoader height="150px" width="150px" />);
    expect(component).toMatchSnapshot();
  });
});
