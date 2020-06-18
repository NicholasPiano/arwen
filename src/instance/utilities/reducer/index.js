
import { actionTypes } from '../../../query/constants';
import updateInstances from './updateInstances';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return updateInstances(state, action);

    default:
      return state;
  }
};

export default reducer;
