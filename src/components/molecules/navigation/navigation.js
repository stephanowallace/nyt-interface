import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkButton from 'Components/atoms/linkButton';
import { orderedSectionsWithIdentifiers } from 'Utils/sectionUtil';
import { mountSectionPathById } from 'Utils/urlCreationUtil';
import styles from './styles.css';

class Navigation extends Component {
  handleNavigationLinkClick(section) {
    const { history } = this.props;
    history.push(mountSectionPathById(section.identifier));
  }

  renderNavigationItems() {
    return orderedSectionsWithIdentifiers.map(section => (
      <li key={section.identifier}>
        <LinkButton
          className={styles.navLink}
          onClick={this.handleNavigationLinkClick.bind(this, section)}
        >
          {section.name}
        </LinkButton>
      </li>
    ));
  }

  render() {
    return (
      <nav>
        <ol className={styles.list}>
          {this.renderNavigationItems()}
        </ol>
      </nav>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Navigation;
