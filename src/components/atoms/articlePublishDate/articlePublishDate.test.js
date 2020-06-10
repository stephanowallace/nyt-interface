import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ArticlePublishDate from '.';

describe('Article publish date', () => {
  const date = moment('2018-12-15T13:22:47-05:00').format('MMM DD, YYYY');

  it('renders default state', () => {
    const component = shallow(<ArticlePublishDate>{date}</ArticlePublishDate>);
    expect(component).toMatchSnapshot();
  });

  it('renders loader', () => {
    const component = shallow(<ArticlePublishDate loading>test</ArticlePublishDate>);
    expect(component).toMatchSnapshot();
  });

  it('renders child in an time tag', () => {
    const component = shallow(<ArticlePublishDate>{date}</ArticlePublishDate>);
    expect(component.find('time').text()).toBe(date);
  });
});
