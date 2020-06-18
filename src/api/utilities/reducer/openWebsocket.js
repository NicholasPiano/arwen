
const openWebsocket = (state, action) => {
  const { api, url } = action.payload;

  return {
    ...state,
    [api]: {
      id: api,
      attributes: {
        url,
        initialized: true,
        open: true,
      },
    },
  };
};

export default openWebsocket;
