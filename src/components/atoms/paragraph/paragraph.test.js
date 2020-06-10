import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from '.';

describe('Paragraph', () => {
  it('renders correctly', () => {
    const component = shallow(<Paragraph>test</Paragraph>);
    expect(component).toMatchSnapshot();
  });

  it('insert class correctly', () => {
    const component = shallow(<Paragraph className="classTest">test</Paragraph>);
    expect(component.exists('p.classTest')).toBeTruthy();
  });
});
