import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'Components/molecules/pagination';
import ArticleList from 'Components/organisms/articleList';
import PageHeader from 'Components/organisms/pageHeader';
import CenterContent from 'Layouts/centerContent';
import { getSectionNameById } from 'Utils/sectionUtil';
import { mountUrlPath } from 'Utils/urlCreationUtil';
import getTopStoriesBySection from 'Services/topStoriesNYT';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingArticles: false };
    this.handlePaginationSizeChange = this.handlePaginationSizeChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.retrieveTopStoriesFromAPI();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.section !== match.params.section) {
      this.retrieveTopStoriesFromAPI();
    }
  }

  retrieveTopStoriesFromAPI() {
    const { history, match, pagination } = this.props;
    this.setState({ loadingArticles: true });
    getTopStoriesBySection(match.params.section)
      .then(pagination.setContent.bind(this))
      .catch(() => history.push(mountUrlPath('error')))
      .finally(() => this.setState({ loadingArticles: false }));
  }

  handlePageChange(pageNumber) {
    const { pagination } = this.props;
    pagination.setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  }

  handlePaginationSizeChange(option) {
    const { pagination } = this.props;
    pagination.setPageSize(option.value);
    window.scrollTo(0, 0);
  }

  render() {
    const { loadingArticles } = this.state;
    const { pagination, match } = this.props;
    return (
      <CenterContent>
        <PageHeader title={getSectionNameById(match.params.section)} />
        <ArticleList
          articles={pagination.data.paginatedContent}
          loading={loadingArticles}
          section={match.params.section}
        />
        <Pagination
          numberOfPages={pagination.data.numberOfPages}
          onPageChange={this.handlePageChange}
          onPageSizeChange={this.handlePaginationSizeChange}
          selectedPage={pagination.data.pageNumber}
          selectedPageSize={{
            label: pagination.data.pageSize,
            value: pagination.data.pageSize,
          }}
        />
      </CenterContent>
    );
  }
}

Section.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  pagination: PropTypes.shape({
    data: PropTypes.object,
    setContent: PropTypes.func.isRequired,
    setPageNumber: PropTypes.func.isRequired,
    setPageSize: PropTypes.func.isRequired,
  }).isRequired,
};

export default Section;
