
import { actionTypes } from '../../constants';

const unregisterQuery = parameters => ({
  type: actionTypes.UNREGISTER_QUERY,
  payload: { ...parameters },
});

export default unregisterQuery;
