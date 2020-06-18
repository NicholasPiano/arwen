
const registerModels = (state = {}, action) => {
  const { apiId, models } = action.payload;

  return models.reduce(
    (acc, { id, name }) => ({
      ...acc,
      [id]: {
        id,
        attributes: {
          name,
        },
        relationships: {
          api: apiId,
        },
      },
    }),
    state,
  );
};

export default registerModels;
