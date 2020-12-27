
import { reducer as apiReducer } from '../../api';
import { reducer as instanceReducer } from '../../instance';
import { reducer as modelReducer } from '../../model';
import { reducer as queryReducer } from '../../query';
import { reducer as resolutionReducer } from '../../resolution';
import updateLock from './updateLock';

const arwen = (state = {}, action) => {
  const {
    api,
    instance,
    lock: initialLock = {},
    model,
    query,
    resolution: initialResolution,
  } = state;
  const { lock, resolutionsToUpdate } = updateLock(initialLock, action);
  const {
    resolution,
    added,
    removed,
  } = resolutionReducer(initialResolution, action, resolutionsToUpdate);

  return {
    api: apiReducer(api, action),
    instance: instanceReducer(instance, action),
    lock,
    model: modelReducer(model, action, added, removed),
    query: queryReducer(query, action),
    resolution,
  };
};

export default {
  arwen,
};
