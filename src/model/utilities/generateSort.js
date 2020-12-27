
import isArray from 'lodash/isArray';

const generateSort = (sortFunction, model) => {
  if (!sortFunction) {
    return [];
  }

  const descending = field => field && `-${field}`;

  const sort = sortFunction(model.fields, descending);

  if (!isArray(sort)) {
    return [sort];
  }

  return sort;
};

export default generateSort;
