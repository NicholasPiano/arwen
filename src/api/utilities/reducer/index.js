
import { actionTypes } from '../../constants';
import openWebsocket from './openWebsocket';

const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN:
      return openWebsocket(state, action);

    default:
      return state;
  }
};

export default reducer;
