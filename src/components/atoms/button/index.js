import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, disabled, loading, onClick }) => {
  const handleClick = () => !disabled && !loading && onClick();
  return (
    <button type="button" onClick={handleClick} disabled={disabled}>
      {loading ? 'loading' : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};

export default Button;
