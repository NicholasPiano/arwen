
import { actionTypes } from '../../../query/constants';
import updateQuery from './updateQuery';

const resolutionReducer = (resolution = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return updateQuery(resolution, action);

    default:
      return { resolution };
  }
};

export default resolutionReducer;
