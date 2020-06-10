import { validateObject } from 'Utils/typeValidationUtil';

export const formatImage = (imageObject) => {
  const imageFormatter = () => {
    if (imageObject.url) {
      return {
        alt: imageObject.caption || '',
        src: imageObject.url,
      };
    }
    return null;
  };
  return validateObject(imageObject, imageFormatter);
};

export const getImageBySize = (arrayOfImages, size) => {
  if (Array.isArray(arrayOfImages)) {
    const foundImageArray = arrayOfImages.filter(image => image.format === size);
    return foundImageArray.length
      ? {
        ...formatImage(foundImageArray[0]),
        format: foundImageArray[0].format,
      }
      : null;
  }
  return null;
};
