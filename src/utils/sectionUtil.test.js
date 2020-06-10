import Constants from 'Constants';
import { getSectionNameById, isSectionIdAvailable } from './sectionUtil';

describe('SectionImageUtil', () => {
  const { SECTION_IDS, SECTIONS } = Constants;

  it('getSectionNameById', () => {
    expect(getSectionNameById(SECTION_IDS.SCITEC)).toEqual(SECTIONS.SCITEC);
    expect(getSectionNameById('notAvailableId')).toBeNull();
  });

  it('isSectionIdAvailable', () => {
    expect(isSectionIdAvailable(SECTION_IDS.SCITEC)).toBeTruthy();
    expect(isSectionIdAvailable('notAvailableId')).toBeFalsy();
  });
});
