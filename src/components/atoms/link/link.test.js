import React from 'react';
import { shallow } from 'enzyme';
import Link from '.';

describe('Link', () => {
  it('renders correctly', () => {
    let component = shallow(<Link href="test">test</Link>);
    expect(component).toMatchSnapshot();

    component = shallow(<Link href="test" visited>test</Link>);
    expect(component).toMatchSnapshot();
  });

  it('renders child in an anchor tag', () => {
    const component = shallow(<Link href="test">test</Link>);
    expect(component.find('a').text()).toBe('test');
  });

  it('shows specific class when set as visited', () => {
    const component = shallow(<Link href="test" visited>test</Link>);
    expect(component.find('.visited')).toHaveLength(1);
  });
});
