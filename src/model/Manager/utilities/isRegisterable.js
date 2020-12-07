
const isRegisterable = (query, resolution, blocked) => {
  if (blocked) {
    return false;
  }

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
