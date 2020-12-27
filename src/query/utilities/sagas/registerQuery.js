
import { call } from 'redux-saga/effects';

import registerQueryLoopback from './registerQueryLoopback';

function* registerQuery(api, action) {
  const { query, ...rest } = action.payload;

  const shouldSend = yield call(registerQueryLoopback, api, { query, ...rest });

  if (shouldSend) {
    yield api.register({ query, ...rest });
  }
}

export default registerQuery;
