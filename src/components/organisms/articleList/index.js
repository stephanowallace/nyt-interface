import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Article from 'Components/molecules/article';
import styles from './styles.css';

const ArticleListItems = (articles, loading, section) => (
  articles.map(article => (
    <li className={styles.article} key={`${section}-${article.short_url}`}>
      <Article
        abstract={article.abstract}
        byLine={article.byline}
        kicker={article.kicker}
        loading={loading}
        multiSizesImage={article.multimedia}
        publishDate={moment(article.published_date).format('MMM DD, YYYY')}
        title={article.title}
        url={article.url}
      />
    </li>
  ))
);

const ArticleList = ({ articles, loading, section }) => (
  <ol className={styles.list}>
    {ArticleListItems(articles, loading, section)}
  </ol>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      abstract: PropTypes.string,
      byLine: PropTypes.string,
      kicker: PropTypes.string,
      multimedia: PropTypes.array,
      published_date: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  loading: PropTypes.bool,
  section: PropTypes.string,
};

ArticleList.defaultProps = {
  loading: false,
  section: '',
};

export default ArticleList;
