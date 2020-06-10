import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, ...props }) => (
  <input className={className} {...props} />
);

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
