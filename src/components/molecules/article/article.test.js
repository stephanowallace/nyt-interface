import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Constants from 'Constants';
import Article from '.';

describe('Article', () => {
  const props = {
    abstract: 'abstract test',
    byLine: 'by Stéphano',
    loading: false,
    multiSizesImage: [],
    publishDate: moment('2018-12-15T13:22:47-05:00').format('MMM DD, YYYY'),
    title: 'title tst',
    url: 'https://www.thoughtworks.com/',
  };

  it('renders default state', () => {
    const component = shallow(<Article {...props}>test</Article>);
    expect(component).toMatchSnapshot();
    component.instance().renderImage({ mode: Constants.SCREEN_SIZES.MEDIUM });
    expect(component).toMatchSnapshot();
  });

  it('renders expanded content', () => {
    const component = shallow(<Article {...props}>test</Article>);
    component.setState({ isExpanded: true });
    component.instance().renderImage({ mode: Constants.SCREEN_SIZES.SMALL });
    expect(component).toMatchSnapshot();
    component.setState({ isExpanded: false });
    component.instance().renderImage({ mode: Constants.SCREEN_SIZES.EXTRA_SMALL });
    expect(component).toMatchSnapshot();
  });

  it('toggles content', () => {
    const component = shallow(<Article {...props}>test</Article>);
    component.setState({ isExpanded: false });
    component.find('LinkButton').simulate('click');
    expect(component.state().isExpanded).toBeTruthy();
  });

  it('doesnt render image if null', () => {
    const propsWithImage = {
      ...props,
      multiSizesImage: [{
        caption: '',
        copyright: 'Gaia Stella',
        format: 'Standard Thumbnail',
        height: 75,
        subtype: 'photo',
        type: 'image',
        url: 'https://static01.nyt.com/images/2018/12/11/science/11DIET/merlin_147850557_bd693001-7550-4fa6-8219-4ebffcda8e49-thumbStandard.jpg',
        width: 75,
      }],
    };
    const component = shallow(<Article {...propsWithImage}>test</Article>);
    expect(component).toMatchSnapshot();
  });
});
