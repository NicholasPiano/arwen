
const openApi = (state, action) => {
  const { api } = action.payload;
  const { [api]: { attributes } } = state;

  return {
    ...state,
    [api]: {
      id: api,
      attributes: {
        ...attributes,
        open: true,
      },
    },
  };
};

export default openApi;
