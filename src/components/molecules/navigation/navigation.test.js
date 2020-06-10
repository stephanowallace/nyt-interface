import React from 'react';
import { shallow } from 'enzyme';
import { orderedSectionsWithIdentifiers } from 'Utils/sectionUtil';
import Navigation from './navigation';

describe('Navigation', () => {
  const props = { history: { push: jest.fn() } };

  it('renders default state', () => {
    const component = shallow(<Navigation {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders all navigation defined in sectionUtil', () => {
    const component = shallow(<Navigation {...props} />);
    expect(component.find('li')).toHaveLength(orderedSectionsWithIdentifiers.length);
  });

  it('change history path on click', () => {
    const component = shallow(<Navigation {...props} />);
    component.find('.navLink').at(0).simulate('click');
    expect(props.history.push).toHaveBeenCalled();
  });
});
