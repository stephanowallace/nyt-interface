import Constants from 'Constants';
import articleImages from './__fixtures__/articleImages';
import { formatImage, getImageBySize } from './articleImageUtil';

describe('ArticleImageUtil', () => {
  it('formatImage', () => {
    const imageObj = { caption: 'image caption', url: 'https://www.thoughtworks.com/' };
    const expectedReturn = { alt: imageObj.caption, src: imageObj.url };
    expect(formatImage(imageObj)).toEqual(expectedReturn);

    const imageNoUrlObj = { caption: 'image caption' };
    expect(formatImage(imageNoUrlObj)).toBeNull();

    const imageNoCaptionObj = { url: 'https://www.thoughtworks.com/' };
    const expectedNoCaptionReturn = { alt: '', src: imageObj.url };
    expect(formatImage(imageNoCaptionObj)).toEqual(expectedNoCaptionReturn);
  });

  it('getImageBySize', () => {
    const size = Constants.IMAGE_FORMATS.STANDARD_THUMB;
    expect(getImageBySize(articleImages, size))
      .toMatchObject({ format: size });

    const nonExistentSize = 'test';
    expect(getImageBySize(articleImages, nonExistentSize))
      .toBeNull();

    expect(getImageBySize('non array', size))
      .toBeNull();
  });
});
