
import { actionTypes } from '../../constants';
import registerModels from './registerModels';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_MODELS:
      return registerModels(state, action);

    default:
      return state;
  }
};

export default reducer;
