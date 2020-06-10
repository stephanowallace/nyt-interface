import { mountUrlWithSection } from 'Utils/urlCreationUtil';

const getSectionData = section => (
  fetch(mountUrlWithSection(section), {
    method: 'GET',
  })
    .then(response => response.json())
);

export default getSectionData;
