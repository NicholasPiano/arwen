
import includes from 'lodash/includes';

const reduceInstancesToLock = queryId => ({ lock, resolutionsToUpdate }, instance) => {
  const { id } = instance;

  if (!(id in lock)) {
    return {
      lock: {
        ...lock,
        [id]: [
          queryId,
        ],
      },
      resolutionsToUpdate: [
        ...resolutionsToUpdate,
        queryId,
      ],
    };
  }

  const queryIds = lock[id];

  if (!includes(queryIds, queryId)) {
    const allQueryIds = [...queryIds, queryId];

    return {
      lock: {
        ...lock,
        [id]: allQueryIds,
      },
      resolutionsToUpdate: [
        ...resolutionsToUpdate,
        ...allQueryIds,
      ],
    };
  }

  return {
    lock,
    resolutionsToUpdate,
  };
};

export default reduceInstancesToLock;
