
const registerQuery = (state, action) => {
  const { query, api, model, ...rest } = action.payload;

  return {
    ...state,
    [query]: {
      id: query,
      attributes: {
        ...rest,
        registered: true,
      },
      relationships: {
        api,
        model,
      },
    },
  };
};

export default registerQuery;
