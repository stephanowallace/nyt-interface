import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ExternalLink from 'Assets/svg/externalLink.svg';
import ArticleByLine from 'Components/atoms/articleByLine';
import ArticleImage from 'Components/atoms/articleImage';
import ArticlePublishDate from 'Components/atoms/articlePublishDate';
import ArticleTitle from 'Components/atoms/articleTitle';
import Link from 'Components/atoms/link';
import LinkButton from 'Components/atoms/linkButton';
import Paragraph from 'Components/atoms/paragraph';
import Responsive from 'Components/atoms/responsive';
import { getImageBySize } from 'Utils/articleImageUtil';
import Constants from 'Constants';

import styles from './styles.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleContent = this.toggleContent.bind(this);
  }

  getArticleImage() {
    const { isExpanded } = this.state;
    const { multiSizesImage } = this.props;
    return isExpanded
      ? getImageBySize(multiSizesImage, Constants.IMAGE_FORMATS.LARGE_THUMB)
      : getImageBySize(multiSizesImage, Constants.IMAGE_FORMATS.STANDARD_THUMB);
  }

  toggleContent() {
    this.setState(prevState => (
      { isExpanded: !prevState.isExpanded }
    ));
  }

  renderImage(responsiveData) {
    const { loading } = this.props;
    const { isExpanded } = this.state;
    const image = this.getArticleImage() || { src: '', alt: '' };
    if (responsiveData.mode !== Constants.SCREEN_SIZES.EXTRA_SMALL || isExpanded) {
      return (
        <ArticleImage
          alt={image.alt}
          className={styles.image}
          loading={loading}
          src={image.src}
        />
      );
    }
    return null;
  }

  renderInnerContent() {
    const { abstract, kicker, url } = this.props;
    const { isExpanded } = this.state;
    if (isExpanded) {
      return (
        <Fragment>
          <Paragraph>{kicker}</Paragraph>
          <Paragraph>
            {abstract}
            <span className={styles.externalLink}>
              <ExternalLink />
              <Link href={url} visited>See full article</Link>
            </span>
          </Paragraph>
        </Fragment>);
    }
    return null;
  }

  renderTitleAbstractAndByline() {
    const { byLine, loading, title } = this.props;
    return (
      <div className={styles.content}>
        <LinkButton onClick={this.toggleContent}>
          <ArticleTitle loading={loading}>{title}</ArticleTitle>
        </LinkButton>
        {this.renderInnerContent()}
        <ArticleByLine loading={loading}>{byLine}</ArticleByLine>
      </div>
    );
  }

  render() {
    const { loading, publishDate } = this.props;
    return (
      <div className={styles.container}>
        <ArticlePublishDate className={styles.publishDate} loading={loading}>
          {publishDate}
        </ArticlePublishDate>
        {this.renderTitleAbstractAndByline()}
        <Responsive>
          {this.renderImage.bind(this)}
        </Responsive>
      </div>
    );
  }
}

Article.propTypes = {
  abstract: PropTypes.string,
  byLine: PropTypes.string,
  kicker: PropTypes.string,
  loading: PropTypes.bool,
  multiSizesImage: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.string,
    url: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  })),
  publishDate: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Article.defaultProps = {
  abstract: '',
  byLine: '',
  kicker: '',
  loading: false,
  multiSizesImage: [],
  publishDate: '',
};

export default Article;
