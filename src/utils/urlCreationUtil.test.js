import { URL_PATH } from 'Constants';
import { mountSectionPathById, mountUrlPath, mountUrlWithSection } from './urlCreationUtil';

describe('UrlCreationtUtil', () => {
  const sectionName = 'health';

  it('mountSectionPathById', () => {
    const expectedUrl = `/${URL_PATH.NYT}/${URL_PATH.SECTION}/${sectionName}`;
    expect(mountSectionPathById(sectionName)).toBe(expectedUrl);
  });

  it('mountUrlWithSection', () => {
    const expectedUrl = `${process.env.NYT_API_URL}${sectionName}.json?api-key=${process.env.NYT_API_KEY}`;
    expect(mountUrlWithSection(sectionName)).toBe(expectedUrl);
  });

  it('mountUrlPath', () => {
    const expectedUrl = `/${URL_PATH.NYT}/${sectionName}`;
    expect(mountUrlPath(sectionName)).toBe(expectedUrl);
  });
});
