
import { actionTypes } from '../../constants';
import startApi from './startApi';
import openApi from './openApi';
import closeApi from './closeApi';
import stopApi from './stopApi';

const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START:
      return startApi(state, action);

    case actionTypes.OPEN:
      return openApi(state, action);

    case actionTypes.CLOSE:
      return closeApi(state, action);

    case actionTypes.STOP:
      return stopApi(state, action);

    default:
      return state;
  }
};

export default reducer;
