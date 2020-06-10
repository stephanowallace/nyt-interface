import React from 'react';
import { shallow } from 'enzyme';
import articles from 'Fixtures/articles';
import paginationHandler from './__fixtures__/paginationHandler';
import match from './__fixtures__/params';
import Section from './section';

describe('Section', () => {
  const props = {
    history: { push: jest.fn() },
    match,
    pagination: paginationHandler,
  };

  it('Renders default state', () => {
    const component = shallow(<Section {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Change page', () => {
    fetch.mockResponseOnce(JSON.stringify({ articles }));
    const component = shallow(<Section {...props} />);
    component.instance().handlePageChange(2);
    expect(paginationHandler.setPageNumber).toHaveBeenCalledWith(2);
  });

  it('Change pagination size', () => {
    fetch.mockResponseOnce(JSON.stringify({ articles }));
    const component = shallow(<Section {...props} />);
    const option = { label: '20', value: '20' };
    component.instance().handlePaginationSizeChange(option);
    expect(paginationHandler.setPageSize).toHaveBeenCalledWith(option.value);
  });

  it('Retrieves new stories if section change', () => {
    fetch.mockResponseOnce(JSON.stringify({ articles }));
    const component = shallow(<Section {...props} />, { lifecycleExperimental: true });
    const instance = component.instance();
    jest.spyOn(instance, 'retrieveTopStoriesFromAPI');
    component.setProps({ match: { params: { section: 'world' } } });
    expect(instance.retrieveTopStoriesFromAPI).toHaveBeenCalled();
  });
});
