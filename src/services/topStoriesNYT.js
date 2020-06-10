import Constants from 'Constants';
import { orderStoriesByPublishDate, removeRepeatedStories } from 'Utils/storiesUtil';
import getSectionData from 'Utils/requestUtil';

const getTopStoriesBySection = (sectionName) => {
  const { SECTION_IDS } = Constants;
  if (sectionName === SECTION_IDS.SCITEC) {
    return Promise.all([
      getSectionData(SECTION_IDS.SCIENCE),
      getSectionData(SECTION_IDS.TECHNOLOGY),
    ])
      .then((response) => {
        let results = [];
        response.forEach((sectionData) => {
          results = [...results, ...sectionData.results];
        });
        return orderStoriesByPublishDate(removeRepeatedStories(results));
      });
  }
  return getSectionData(sectionName)
    .then(response => orderStoriesByPublishDate(response.results));
};

export default getTopStoriesBySection;
