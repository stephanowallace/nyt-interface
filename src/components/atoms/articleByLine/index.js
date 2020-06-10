import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'Components/atoms/contentLoader';
import SecondaryText from 'Components/atoms/secondaryText';
import styles from './styles.css';

const ArticleByLine = ({ children, className, loading }) => (
  <div className={`${styles.byLine} ${className}`}>
    {loading
      ? <ContentLoader height="11px" width="100px" />
      : <SecondaryText>{children}</SecondaryText>}
  </div>
);

ArticleByLine.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

ArticleByLine.defaultProps = {
  className: '',
  loading: false,
};

export default ArticleByLine;
