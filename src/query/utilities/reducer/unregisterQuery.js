
const unregisterQuery = (state, action) => {
  const { query } = action.payload;
  const { [query]: existingQuery } = state;

  if (!existingQuery) {
    return state;
  }

  return {
    ...state,
    [query]: {
      ...existingQuery,
      attributes: {
        ...existingQuery.attributes,
        registered: false,
      },
    },
  };
};

export default unregisterQuery;
