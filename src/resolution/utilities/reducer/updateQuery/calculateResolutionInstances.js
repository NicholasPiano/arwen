
import isUndefined from 'lodash/isUndefined';
import slice from 'lodash/slice';

import currentInstances from './currentInstances';
import immutableSplice from './immutableSplice';
import hashList from './hashList';

const calculateResolutionInstances = ({
  resolution,
  digest,
  splice,
  result,
  added = [],
  removed = [],
}) => {
  const instances = currentInstances(resolution, result);

  if (digest) {
    const localDigest = hashList(instances);

    if (localDigest !== digest) {
      return { instances, added, removed };
    }
  }

  if (!splice) {
    return { instances, added, removed };
  }

  const [first, ...rest] = splice;

  if (first) {
    const { position, remove, ids } = first;

    if (isUndefined(position) && isUndefined(remove)) {
      return calculateResolutionInstances({
        resolution,
        splice: rest,
        result: ids,
        added: [
          ...added,
          ...ids,
        ],
        removed,
      });
    }

    const newRemoved = slice(instances, position, position + remove);
    const update = immutableSplice(instances, position, remove, ids);

    return calculateResolutionInstances({
      resolution,
      splice: rest,
      result: update,
      added: [
        ...added,
        ...ids,
      ],
      removed: [
        ...removed,
        ...newRemoved,
      ],
    });
  }

  return { instances, added, removed };
};

export default calculateResolutionInstances;
