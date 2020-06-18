
import { actionTypes } from '../../constants';

const updateQuery = parameters => ({
  type: actionTypes.UPDATE_QUERY,
  payload: { ...parameters },
});

export default updateQuery;
