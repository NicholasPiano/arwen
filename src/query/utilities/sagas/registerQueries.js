
import { fork, take, actionChannel, call } from 'redux-saga/effects';

import { actionTypes } from '../../constants';
import registerExistingQueries from './registerExistingQueries';
import registerQuery from './registerQuery';

function* registerQueries(api) {
  yield fork(registerExistingQueries, api);

  const registerQueryAction = action => (
    action.type === actionTypes.REGISTER_QUERY
    && action.payload.api === api.id
  );
  const queryRegisterChannel = yield actionChannel(registerQueryAction);

  while (true) {
    const action = yield take(queryRegisterChannel);

    yield call(registerQuery, api, action);
  }
}

export default registerQueries;
