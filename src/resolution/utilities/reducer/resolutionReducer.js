
import { actionTypes } from '../../../query/constants';
import updateQuery from './updateQuery';

const resolutionReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return updateQuery(state, action);

    default:
      return state;
  }
};

export default resolutionReducer;
