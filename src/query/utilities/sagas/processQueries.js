
import { fork } from 'redux-saga/effects';

import registerQueries from './registerQueries';
import updateQueries from './updateQueries';
import unregisterQueries from './unregisterQueries';

function* processQueries(api) {
  yield fork(registerQueries, api);
  yield fork(updateQueries, api);
  yield fork(unregisterQueries, api);
}

export default processQueries;
