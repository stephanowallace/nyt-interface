import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';

describe('Pagination', () => {
  const props = {
    numberOfPages: 10,
    onPageChange: jest.fn(),
    onPageSizeChange: jest.fn(),
    selectedPage: 1,
  };

  it('render default state', () => {
    const component = shallow(<Pagination {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders all page selectors', () => {
    const component = shallow(<Pagination {...props} />);
    expect(component.find('li')).toHaveLength(props.numberOfPages + 2);
  });
});
