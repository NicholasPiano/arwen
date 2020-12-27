
const updateQuery = (state, action, added, removed) => {
  const { model } = action.payload;
  const {
    [model]: {
      relationships: {
        instances = new Set(),
        ...relationships
      },
      ...rest
    },
  } = state;

  added.forEach(add => instances.add(add));
  removed.forEach(remove => instances.remove(remove));

  return {
    ...state,
    [model]: {
      ...rest,
      relationships: {
        ...relationships,
        instances,
      },
    },
  };
};

export default updateQuery;
