import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const SectionTitle = ({ children, className }) => {
  if (children) {
    return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
  }
  return null;
};

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  children: '',
  className: '',
};

export default SectionTitle;
