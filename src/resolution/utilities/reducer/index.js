
import isEmpty from 'lodash/isEmpty';

import resolutionReducer from './resolutionReducer';
import reduceResolutionsToUpdate from './reduceResolutionsToUpdate';

const reducer = (state = {}, action, resolutionsToUpdate) => {
  const newState = resolutionReducer(state, action);

  if (isEmpty(resolutionsToUpdate)) {
    return newState;
  }

  return resolutionsToUpdate.reduce(reduceResolutionsToUpdate, newState);
};

export default reducer;
