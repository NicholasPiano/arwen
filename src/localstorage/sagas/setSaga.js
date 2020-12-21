
import { call } from 'redux-saga/effects';

import { sagas as modelSagas } from '../../model';
import { localStorageMethods } from '../../api';
import { LocalStorage } from '../api';

function* setSaga(data) {
  yield call(modelSagas.query, {
    parameters: {
      method: localStorageMethods.SET,
      data,
    },
    model: LocalStorage,
  });
}

export default setSaga;
