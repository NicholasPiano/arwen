
import { fork } from 'redux-saga/effects';

import registerQueries from './registerQueries';
import updateQueries from './updateQueries';

function* processQueries(api) {
  yield fork(registerQueries, api);
  yield fork(updateQueries, api);
}

export default processQueries;
