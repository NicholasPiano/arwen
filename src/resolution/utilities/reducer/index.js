
import isEmpty from 'lodash/isEmpty';

import resolutionReducer from './resolutionReducer';
import reduceResolutionsToUpdate from './reduceResolutionsToUpdate';

const reducer = (state = {}, action, resolutionsToUpdate) => {
  const { resolution, ...rest } = resolutionReducer(state, action);

  if (isEmpty(resolutionsToUpdate)) {
    return { resolution, ...rest };
  }

  return {
    resolution: resolutionsToUpdate.reduce(reduceResolutionsToUpdate, resolution),
    ...rest,
  };
};

export default reducer;
