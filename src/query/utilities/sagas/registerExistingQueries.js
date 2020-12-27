
import { select, all, call } from 'redux-saga/effects';

import selectors from '../selectors';
import registerQuery from './registerQuery';

function* registerExistingQueries(api) {
  const existingQueries = (yield select(selectors.apiQueriesSelector))(api.id);

  yield all(existingQueries.map(query => call(registerQuery, api, query.action)));
}

export default registerExistingQueries;
