import Constants from 'Constants';

const { SECTION_IDS, SECTIONS } = Constants;

export const orderedSectionsWithIdentifiers = [
  { name: SECTIONS.SCITEC, identifier: SECTION_IDS.SCITEC },
  { name: SECTIONS.HEALTH, identifier: SECTION_IDS.HEALTH },
  { name: SECTIONS.POLITICS, identifier: SECTION_IDS.POLITICS },
  { name: SECTIONS.WORLD, identifier: SECTION_IDS.WORLD },
];

export const getSectionNameById = (sectionId) => {
  const matchingIdSection = orderedSectionsWithIdentifiers
    .filter(section => section.identifier === sectionId);
  return matchingIdSection.length
    ? matchingIdSection[0].name
    : null;
};

export const isSectionIdAvailable = (sectionId) => {
  const availableSectionsIds = orderedSectionsWithIdentifiers
    .map(section => section.identifier);
  return availableSectionsIds.includes(sectionId);
};
