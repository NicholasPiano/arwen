
import isUndefined from 'lodash/isUndefined';

import currentInstances from './currentInstances';
import immutableSplice from './immutableSplice';
import hashList from './hashList';

const calculateResolutionInstances = ({ resolution, digest, splice, result }) => {
  const instances = currentInstances(resolution, result);

  if (digest) {
    const localDigest = hashList(instances);

    if (localDigest !== digest) {
      return instances;
    }
  }

  if (!splice) {
    return instances;
  }

  const [first, ...rest] = splice;

  if (first) {
    const { position, remove, ids } = first;

    if (isUndefined(position) && isUndefined(remove)) {
      return calculateResolutionInstances({
        resolution,
        splice: rest,
        result: ids,
      });
    }

    const update = immutableSplice(instances, position, remove, ids);

    return calculateResolutionInstances({
      resolution,
      splice: rest,
      result: update,
    });
  }

  return instances;
};

export default calculateResolutionInstances;
