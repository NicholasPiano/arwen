
import { put, cancel, call, fork, take, race, delay } from 'redux-saga/effects';

import { sagas as querySagas } from '../../../query';
import { actions as modelActions } from '../../../model';
import receive from './receive';

function* open(api) {
  yield put(modelActions.registerModels(api));

  const { payload } = yield take(api.startActionType);

  yield call(api.createSocket.bind(api), payload);
  const apiReceive = yield fork(receive, api);

  const { error, stop } = yield race({
    error: take(api.errorActionType),
    open: take(api.openActionType),
    stop: take(api.stopActionType),
  });

  if (error || stop) {
    yield cancel(apiReceive);

    if (error) {
      return;
    }

    if (stop) {
      yield call(open, api);
    }
  }

  const apiProcessQueries = yield fork(querySagas.processQueries, api);

  const { close } = yield race({
    error: take(api.errorActionType),
    close: take(api.closeActionType),
    stop: take(api.stopActionType),
  });

  yield cancel(apiProcessQueries);
  yield cancel(apiReceive);

  if (close) {
    yield delay(3000);
  }

  yield call(open, api);
}

export default open;
