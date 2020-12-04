
import calculateResolutionInstances from './calculateResolutionInstances';

const updateQuery = (state, action) => {
  const {
    api,
    instance,
    register,
    digest,
    splice,
    ...rest
  } = action.payload;
  const { query, model, error, data } = rest;
  const { [query]: existingResolution = {} } = state;

  if (register) {
    return state;
  }

  const { attributes = {} } = existingResolution;
  const { lock = 0 } = attributes;

  return {
    ...state,
    [query]: {
      id: query,
      attributes: {
        ...attributes,
        lock,
        error,
        data,
      },
      relationships: {
        api,
        model,
        instances: calculateResolutionInstances({
          resolution: existingResolution,
          digest,
          splice,
        }),
      },
    },
  };
};

export default updateQuery;
