import React from 'react';
import { shallow } from 'enzyme';
import articles from 'Fixtures/articles';
import ArticleList from '.';

describe('Article list', () => {
  const props = { articles, section: 'Science' };
  it('Renders default state', () => {
    const component = shallow(<ArticleList {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders all articles passed', () => {
    const component = shallow(<ArticleList {...props} />);
    expect(component.find('li')).toHaveLength(articles.length);
  });
});
