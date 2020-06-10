import articles from 'Fixtures/articles';
import articlesDisorderly from 'Fixtures/articlesDisorderly';
import articlesWithRepeatedItems from 'Fixtures/articlesWithRepeatedItems';
import { orderStoriesByPublishDate, removeRepeatedStories } from './storiesUtil';

describe('StoriesUtil', () => {
  it('orderStoriesByPublishDate', () => {
    expect(orderStoriesByPublishDate(articlesDisorderly)).toEqual(articles);
  });

  it('removeRepeatedStories', () => {
    expect(removeRepeatedStories(articlesWithRepeatedItems)).toEqual(articles);
  });
});
