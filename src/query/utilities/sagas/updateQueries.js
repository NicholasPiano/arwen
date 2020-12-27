
import { take, actionChannel, call } from 'redux-saga/effects';

import updateQuery from './updateQuery';

function* updateQueries(api) {
  const queryUpdateChannel = yield actionChannel(api.receiveActionType);

  while (true) {
    const action = yield take(queryUpdateChannel);

    yield call(updateQuery, action);
  }
}

export default updateQueries;
