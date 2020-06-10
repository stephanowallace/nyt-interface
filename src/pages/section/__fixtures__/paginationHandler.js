import articles from 'Fixtures/articles';

module.exports = {
  data: {
    numberOfPages: 1,
    pageNumber: 1,
    pageSize: 10,
    paginatedContent: articles,
  },
  setContent: jest.fn(),
  setPageNumber: jest.fn(),
  setPageSize: jest.fn(),
};
