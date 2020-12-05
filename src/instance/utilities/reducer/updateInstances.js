
const updateInstances = (state, action) => {
  const { instance, model } = action.payload;

  if (!instance) {
    return state;
  }

  return instance.reduce(
    (acc, { id, attributes, relationships }) => ({
      ...acc,
      [id]: {
        id,
        attributes,
        relationships: {
          ...relationships,
          model,
        },
      },
    }),
    state,
  );
};

export default updateInstances;
