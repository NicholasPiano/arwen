
import { actionTypes } from '../../../query/constants';
import reduceInstancesToLock from './reduceInstancesToLock';

const updateLock = (lock, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY: {
      const { query, instance } = action.payload;

      return instance.reduce(
        reduceInstancesToLock(query),
        {
          lock,
          resolutionsToUpdate: [],
        },
      );
    }

    default:
      return {
        lock,
        resolutionsToUpdate: [],
      };
  }
};

export default updateLock;
