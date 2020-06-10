import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const SecondaryText = ({ children, className }) => (
  <span className={`${styles.container} ${className}`}>{children}</span>
);

SecondaryText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
};

SecondaryText.defaultProps = {
  className: '',
  children: null,
};

export default SecondaryText;
