
import { reducer as apiReducer } from '../../api';
import { reducer as instanceReducer } from '../../instance';
import { reducer as modelReducer } from '../../model';
import { reducer as queryReducer } from '../../query';
import { reducer as resolutionReducer } from '../../resolution';
import updateLock from './updateLock';

const data = (state = {}, action) => {
  const { api, instance, lock: initialLock = {}, model, query, resolution } = state;
  const { lock, resolutionsToUpdate } = updateLock(initialLock, action);

  return {
    api: apiReducer(api, action),
    instance: instanceReducer(instance, action),
    lock,
    model: modelReducer(model, action),
    query: queryReducer(query, action),
    resolution: resolutionReducer(resolution, action, resolutionsToUpdate),
  };
};

export default {
  data,
};
