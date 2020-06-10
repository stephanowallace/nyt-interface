import { validateObject, validateString } from './typeValidationUtil';

describe('TypeValidationUtil', () => {
  it('validateString', () => {
    const callbackSuccess = jest.fn();
    const callbackFail = jest.fn();
    validateString('test', callbackSuccess);
    expect(callbackSuccess).toHaveBeenCalled();

    validateString(100, callbackSuccess, callbackFail);
    expect(callbackFail).toHaveBeenCalled();

    expect(() => validateString(100, callbackSuccess)).toThrowError(TypeError);
  });

  it('validateObject', () => {
    const callbackSuccess = jest.fn();
    const callbackFail = jest.fn();
    validateObject({ test: 'test' }, callbackSuccess);
    expect(callbackSuccess).toHaveBeenCalled();

    validateObject(100, callbackSuccess, callbackFail);
    expect(callbackFail).toHaveBeenCalled();

    expect(() => validateObject(100, callbackSuccess)).toThrowError(TypeError);
  });
});
