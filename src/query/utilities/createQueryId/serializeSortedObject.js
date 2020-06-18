
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

const serializeSortedObject = object => {
  if (isArray(object)) {
    const items = object.map(item => serializeSortedObject(item));

    return JSON.stringify(items);
  }

  if (isObject(object)) {
    const keys = Object.keys(object);
    const sortedKeys = keys.sort((a, b) => {
      if (a > b) {
        return 1;
      }

      return -1;
    });
    const serializedValues = sortedKeys.map(key => ({
      key,
      value: serializeSortedObject(object[key]),
    }));

    return serializedValues.reduce((final, { key, value }) => `${final}${key}.${value}.`, '');
  }

  return JSON.stringify(object);
};

export default serializeSortedObject;
