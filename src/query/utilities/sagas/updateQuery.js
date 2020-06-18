
import { put, select } from 'redux-saga/effects';

import selectors from '../selectors';
import actions from '../actions';

function* updateQuery(api, action) {
  const { query, ...rest } = action.payload;
  const { model } = (yield select(selectors.querySelector))(query);

  yield put(actions.updateQuery({ query, ...rest, model }));
}

export default updateQuery;
