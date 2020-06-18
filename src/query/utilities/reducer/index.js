
import { actionTypes } from '../../constants';
import registerQuery from './registerQuery';
import unregisterQuery from './unregisterQuery';
import updateQuery from './updateQuery';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_QUERY:
      return registerQuery(state, action);

    case actionTypes.UPDATE_QUERY:
      return updateQuery(state, action);

    case actionTypes.UNREGISTER_QUERY:
      return unregisterQuery(state, action);

    default:
      return state;
  }
};

export default reducer;
