import getSectionData from './requestUtil';

describe('RequestUtil', () => {
  const sectionName = 'health';
  const expectedUrl = `${process.env.NYT_API_URL}${sectionName}.json?api-key=${process.env.NYT_API_KEY}`;

  it('getSectionData', () => {
    getSectionData('health');
    expect(fetch.mock.calls[0][0]).toEqual(expectedUrl);
  });
});
