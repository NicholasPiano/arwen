
import { call } from 'redux-saga/effects';

import registerQueryLoopback from './registerQueryLoopback';

function* registerQuery(api, action) {
  const { query, ...rest } = action.payload;

  const shouldSend = yield call(registerQueryLoopback, api, { query, ...rest });

  if (shouldSend) {
    return api.send({ query, ...rest });
  }

  return undefined;
}

export default registerQuery;
