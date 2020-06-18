
const reduceResolutionsToUpdate = (resolution, queryId) => {
  const { [queryId]: existing } = resolution;
  const { attributes } = existing;
  const { lock } = attributes;

  return {
    ...resolution,
    [queryId]: {
      ...existing,
      attributes: {
        ...attributes,
        lock: lock + 1,
      },
    },
  };
};

export default reduceResolutionsToUpdate;
