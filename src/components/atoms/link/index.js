import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Link = ({ children, className, href, target, visited }) => (
  <a
    className={`
      ${style.link}
      ${visited ? style.visited : ''}
      ${className}`}
    href={href}
    target={target}
  >
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  visited: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  target: '_blank',
  visited: false,
};

export default Link;
