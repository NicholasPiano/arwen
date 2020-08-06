
function* unregisterQuery(api, action) {
  const { query, ...rest } = action.payload;

  const shouldSend = true;

  if (shouldSend) {
    yield api.unregister({ query, ...rest });
  }
}

export default unregisterQuery;
