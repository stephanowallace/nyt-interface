import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const clickHandler = (disabled, onClick) => (disabled ? null : onClick);

const LinkButton = ({ children, className, disabled, onClick }) => (
  <button
    className={`
      ${style.linkButton}
      ${className}`}
    onClick={clickHandler(disabled, onClick)}
    type="button"
  >
    {children}
  </button>
);

LinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  className: '',
  disabled: false,
  onClick: null,
};

export default LinkButton;
