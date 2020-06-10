import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'Components/atoms/contentLoader';

const ArticleImage = ({ alt, className, loading, src }) => {
  if (loading) {
    return (
      <div className={className}>
        <ContentLoader height="75px" width="75px" />
      </div>);
  }
  if (src && alt) {
    return (
      <figure className={className}>
        <img alt={alt} src={src} />
      </figure>);
  }
  return null;
};

ArticleImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  src: PropTypes.string,
};

ArticleImage.defaultProps = {
  alt: null,
  className: '',
  loading: false,
  src: null,
};

export default ArticleImage;
