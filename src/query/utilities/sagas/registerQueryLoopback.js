
import { select, call } from 'redux-saga/effects';

import { selectors as instanceSelectors } from '../../../instance';
import updateQuery from './updateQuery';

function* registerQueryLoopback(api, { query, filter }) {
  if (!filter) {
    return true;
  }

  const { id } = filter;

  if (!id) {
    return true;
  }

  const existingInstance = (yield select(instanceSelectors.instanceSelector))(id);

  if (!existingInstance) {
    return true;
  }

  const { relationships: { model } } = existingInstance;

  const action = {
    payload: {
      query,
      splice: [{ ids: [id] }],
      model,
    },
  };

  yield call(updateQuery, api, action);

  return false;
}

export default registerQueryLoopback;
