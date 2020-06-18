
import { select, all, take, actionChannel, call } from 'redux-saga/effects';

import { actionTypes } from '../../constants';
import selectors from '../selectors';
import registerQuery from './registerQuery';

function* registerQueries(api) {
  const existingQueries = (yield select(selectors.apiQueriesSelector))(api.id);

  yield all(existingQueries.map(query => call(registerQuery, api, query.action)));

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
