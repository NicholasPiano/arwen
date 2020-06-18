
import { put, cancel, call, fork, take, delay } from 'redux-saga/effects';

import { sagas as querySagas } from '../../../query';
import { actions as modelActions } from '../../../model';
import receive from './receive';

function* open(api) {
  yield put(modelActions.registerModels(api));

  api.start();
  const apiReceive = yield fork(receive, api);

  yield take(api.openActionType);

  const apiProcessQueries = yield fork(querySagas.processQueries, api);

  yield take(api.closeActionType);

  yield delay(3000);
  yield cancel(apiProcessQueries);
  yield cancel(apiReceive);
  yield call(open, api);
}

export default open;
