import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'Components/atoms/contentLoader';
import SecondaryText from 'Components/atoms/secondaryText';
import styles from './styles.css';

const ArticlePublishDate = ({ children, className, loading }) => {
  if (loading) {
    return (
      <span className={className}>
        <ContentLoader height="11px" width="80px" />
      </span>);
  }
  return (
    <SecondaryText className={className}>
      <time className={styles.publishDate}>{children}</time>
    </SecondaryText>);
};

ArticlePublishDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

ArticlePublishDate.defaultProps = {
  className: '',
  loading: false,
};

export default ArticlePublishDate;
