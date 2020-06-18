
const updateInstances = (state, action) => {
  const { instance, model } = action.payload;

  if (!instance) {
    return state;
  }

  return instance.reduce(
    (acc, { id, ...attributes }) => ({
      ...acc,
      [id]: {
        id,
        attributes,
        relationships: {
          model,
        },
      },
    }),
    state,
  );
};

export default updateInstances;
