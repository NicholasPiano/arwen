
import { call } from 'redux-saga/effects';

import { sagas as modelSagas } from '../../model';
import { localStorageMethods } from '../../api';
import { LocalStorage } from '../api';

function* getSaga() {
  const { instances } = yield call(modelSagas.query, {
    parameters: {
      method: localStorageMethods.GET,
    },
    model: LocalStorage,
  });

  return instances[0].attributes;
}

export default getSaga;
