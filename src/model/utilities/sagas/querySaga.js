
import { take, put, select } from 'redux-saga/effects';

import { actions, actionTypes } from '../../../query';
import { selectors as resolutionSelectors } from '../../../resolution';
import createManagerQuery from '../createManagerQuery';
import isRegisterable from '../isRegisterable';

function* querySaga({ parameters, model }) {
  const { query, queryId } = createManagerQuery(
    parameters,
    model,
  );
  const initialResolution = (yield select(resolutionSelectors.resolutionSelector))(queryId);
  const register = isRegisterable(query, initialResolution);

  if (!register) {
    return model.resolve({ resolution: initialResolution });
  }

  yield put(actions.registerQuery(query));

  const updateQueryAction = ({ type, payload }) => {
    if (!payload) {
      return false;
    }

    if (type !== actionTypes.UPDATE_QUERY) {
      return false;
    }

    const { query: actionQueryId } = payload;

    if (actionQueryId !== queryId) {
      return false;
    }

    return true;
  };

  yield take(updateQueryAction);

  const resolution = (yield select(resolutionSelectors.resolutionSelector))(queryId);

  return model.resolve({ resolution });
}

export default querySaga;
