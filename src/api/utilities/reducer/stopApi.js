
const stopApi = (state, action) => {
  const { api } = action.payload;
  const { [api]: { attributes } } = state;

  return {
    ...state,
    [api]: {
      id: api,
      attributes: {
        ...attributes,
        running: false,
      },
    },
  };
};

export default stopApi;
