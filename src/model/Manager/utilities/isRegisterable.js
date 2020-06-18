
const isRegisterable = (query, resolution) => {
  if (!query) {
    return false;
  }

  const { filter } = query;

  if (!filter) {
    return true;
  }

  const { id } = filter;

  if (!id) {
    return true;
  }

  return !resolution;
};

export default isRegisterable;
