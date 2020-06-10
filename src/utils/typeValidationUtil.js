const validateType = (type, valueToBeTested, callbackSuccess, callbackFailed) => {
  try {
    if (typeof valueToBeTested === type) return callbackSuccess();
    if (callbackFailed) return callbackFailed();
    throw new TypeError(`Expected ${type}`);
  } catch (e) { throw e; }
};

export const validateString = (valueToBeTested, callbackSuccess, callbackFailed) => (
  validateType('string', valueToBeTested, callbackSuccess, callbackFailed)
);

export const validateObject = (valueToBeTested, callbackSuccess, callbackFailed) => (
  validateType('object', valueToBeTested, callbackSuccess, callbackFailed)
);
