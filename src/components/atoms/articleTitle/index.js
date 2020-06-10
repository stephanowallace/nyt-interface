import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'Components/atoms/contentLoader';
import styles from './styles.css';

const ArticleTitle = ({ children, className, loading }) => {
  if (loading) {
    return <ContentLoader className={styles.title} height="26px" width="300px" />;
  }
  return (
    <h2 className={`${styles.title} ${className}`}>
      {children}
    </h2>
  );
};

ArticleTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

ArticleTitle.defaultProps = {
  className: '',
  loading: false,
};

export default ArticleTitle;
