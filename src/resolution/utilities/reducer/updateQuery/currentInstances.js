
import isEmpty from 'lodash/isEmpty';

const currentInstances = (resolution, result) => {
  if (result) {
    return result;
  }

  if (isEmpty(resolution)) {
    return [];
  }

  const { attributes: { instances } } = resolution;

  return instances;
};

export default currentInstances;
