
import { createQueryId } from '../../query';

const createManagerQuery = (parameters, model) => {
  const parametersWithModelAndAPI = {
    ...parameters,
    api: model.api.id,
    model: model.id,
    modelName: model.name,
  };
  const queryId = createQueryId(parametersWithModelAndAPI);

  const query = {
    ...parametersWithModelAndAPI,
    query: queryId,
  };

  return {
    query,
    queryId,
  };
};

export default createManagerQuery;
