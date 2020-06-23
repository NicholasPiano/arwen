
import { actionTypes } from '../../constants';
import openApi from './openApi';

const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN:
      return openApi(state, action);

    default:
      return state;
  }
};

export default reducer;
