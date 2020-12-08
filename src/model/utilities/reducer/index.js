
import { actionTypes as queryActionTypes } from '../../../query/constants';
import { actionTypes } from '../../constants';
import registerModels from './registerModels';
import updateQuery from './updateQuery';

const reducer = (state = {}, action, added, removed) => {
  switch (action.type) {
    case actionTypes.REGISTER_MODELS:
      return registerModels(state, action);

    case queryActionTypes.UPDATE_QUERY:
      return updateQuery(state, action, added, removed);

    default:
      return state;
  }
};

export default reducer;
