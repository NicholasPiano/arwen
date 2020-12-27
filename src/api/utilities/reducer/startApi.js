
const startApi = (state, action) => {
  const { api, parameters } = action.payload;

  return {
    ...state,
    [api]: {
      id: api,
      attributes: {
        ...parameters,
        initialized: true,
        running: true,
      },
    },
  };
};

export default startApi;
