import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const ContentLoader = ({ className, height, width }) => (
  <div className={`${styles.container} ${className}`} style={{ width, height }}>
    <div className={styles.loader} />
  </div>
);

ContentLoader.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

ContentLoader.defaultProps = {
  className: '',
};

export default ContentLoader;
