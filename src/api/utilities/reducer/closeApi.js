
const closeApi = (state, action) => {
  const { api } = action.payload;
  const { [api]: { attributes } } = state;

  return {
    ...state,
    [api]: {
      id: api,
      attributes: {
        ...attributes,
        open: false,
      },
    },
  };
};

export default closeApi;
