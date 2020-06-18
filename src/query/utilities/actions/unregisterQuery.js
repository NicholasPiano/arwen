
import { actionTypes } from '../../constants';

const unregisterQuery = ({ api, query }) => ({
  type: actionTypes.UNREGISTER_QUERY,
  payload: { api, query },
});

export default unregisterQuery;
