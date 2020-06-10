import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Paragraph = ({ children, className }) => (
  <p className={`${styles.abstract} ${className}`}>{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
