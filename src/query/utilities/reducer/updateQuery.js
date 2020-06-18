
const updateQuery = (state, action) => {
  const { query } = action.payload;
  const { [query]: existingQuery } = state;

  return {
    ...state,
    [query]: {
      ...existingQuery,
      attributes: {
        ...existingQuery.attributes,
        resolved: true,
      },
    },
  };
};

export default updateQuery;
