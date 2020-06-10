import { URL_PATH } from 'Constants';
import { validateString } from 'Utils/typeValidationUtil';

export const mountSectionPathById = section => (
  validateString(section, () => `/${URL_PATH.NYT}/${URL_PATH.SECTION}/${section}`)
);

export const mountUrlWithSection = section => (
  validateString(
    section,
    () => `${process.env.NYT_API_URL}${section}.json?api-key=${process.env.NYT_API_KEY}`,
  )
);

export const mountUrlPath = path => (
  validateString(path, () => `/${URL_PATH.NYT}/${path}`)
);
