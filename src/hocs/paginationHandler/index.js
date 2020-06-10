import React, { Component } from 'react';
import Constants from 'Constants';

const mockArticle = {
  byLine: '',
  publishDate: '',
  title: '',
  url: '',
};

const pageSizeFromStorage = () => localStorage.getItem('pageSize') || Constants.PAGINATION_SIZE;
const calculateNumberOfPages = contentLength => Math.ceil(contentLength / pageSizeFromStorage());

export default (WrappedComponent) => {
  class PaginationHandler extends Component {
    constructor(props) {
      super(props);
      this.content = [];
      this.state = {
        numberOfPages: 1,
        pageNumber: 1,
        pageSize: pageSizeFromStorage(),
        paginatedContent: Array
          .from(Array(parseInt(pageSizeFromStorage(), 10)))
          .map((_, index) => ({ ...mockArticle, short_url: index })),
      };
    }

    getPaginatedContent() {
      const { pageNumber, pageSize } = this.state;
      const start = (pageNumber - 1) * pageSize;
      const end = parseInt(start, 10) + parseInt(pageSize, 10);
      this.setState({ paginatedContent: this.content.slice(start, end) });
    }

    setContent(contentList) {
      this.content = contentList;
      const pageSize = pageSizeFromStorage();
      this.setState({
        numberOfPages: calculateNumberOfPages(this.content.length),
        pageNumber: 1,
        pageSize,
      }, () => this.getPaginatedContent());
    }

    setPageNumber(pageNumber) {
      this.setState({
        pageNumber,
      }, () => this.getPaginatedContent());
    }

    setPageSize(pageSize) {
      localStorage.setItem('pageSize', pageSize);
      this.setState({
        numberOfPages: calculateNumberOfPages(this.content.length),
        pageNumber: 1,
        pageSize,
      }, () => this.getPaginatedContent());
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          pagination={{
            data: { ...this.state },
            setContent: this.setContent.bind(this),
            setPageNumber: this.setPageNumber.bind(this),
            setPageSize: this.setPageSize.bind(this),
          }}
        />
      );
    }
  }

  return PaginationHandler;
};
