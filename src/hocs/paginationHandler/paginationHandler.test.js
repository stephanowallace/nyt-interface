import React from 'react';
import { shallow } from 'enzyme';
import PaginationHandler from '.';

const baseComponent = () => <div>test</div>;

describe('PaginationHandler', () => {
  const content = [1, 2, 3, 4, 5, 6, 7];

  it('render default state', () => {
    const PaginationHandlerComponent = PaginationHandler(baseComponent);
    const component = shallow(<PaginationHandlerComponent />);
    expect(component).toMatchSnapshot();
  });

  it('setContent', () => {
    const PaginationHandlerComponent = PaginationHandler(baseComponent);
    const component = shallow(<PaginationHandlerComponent />);
    component.instance().setContent(content);
    expect(component.instance().content).toEqual(content);
    expect(component.props().pagination.data.pageNumber).toBe(1);
    expect(component.props().pagination.data.numberOfPages).toBe(1);
  });

  it('setPageNumber', () => {
    const PaginationHandlerComponent = PaginationHandler(baseComponent);
    const component = shallow(<PaginationHandlerComponent />);
    component.props().pagination.setPageNumber(2);
    expect(component.props().pagination.data.pageNumber).toBe(2);
  });

  it('setPageSize', () => {
    const PaginationHandlerComponent = PaginationHandler(baseComponent);
    const component = shallow(<PaginationHandlerComponent />);
    component.props().pagination.setContent(content);
    component.props().pagination.setPageSize(5);
    expect(component.props().pagination.data.pageSize).toBe(5);
    expect(component.props().pagination.data.numberOfPages).toBe(2);
  });
});
