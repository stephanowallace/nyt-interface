export const orderStoriesByPublishDate = storiesList => (
  storiesList.sort((actualStory, nextStory) => {
    const a = new Date(actualStory.published_date);
    const b = new Date(nextStory.published_date);
    return b - a;
  })
);

export const removeRepeatedStories = storiesList => (
  storiesList.filter((thing, index, self) => (
    index === self.findIndex(t => (
      t.short_url === thing.short_url
    ))
  ))
);
