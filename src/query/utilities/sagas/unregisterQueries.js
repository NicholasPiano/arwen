
import { take, actionChannel, call } from 'redux-saga/effects';

import { actionTypes } from '../../constants';
import unregisterQuery from './unregisterQuery';

function* unregisterQueries(api) {
  const unregisterQueryAction = action => (
    action.type === actionTypes.UNREGISTER_QUERY
    && action.payload.api === api.id
  );
  const queryUnregisterChannel = yield actionChannel(unregisterQueryAction);

  while (true) {
    const action = yield take(queryUnregisterChannel);

    yield call(unregisterQuery, api, action);
  }
}

export default unregisterQueries;
