
import { actionTypes } from '../../constants';

const registerQuery = parameters => ({
  type: actionTypes.REGISTER_QUERY,
  payload: { ...parameters },
});

export default registerQuery;
