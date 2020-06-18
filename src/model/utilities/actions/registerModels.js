
import { actionTypes } from '../../constants';

const registerModels = ({ constructor: { id: apiId, models } }) => {
  const reducedModels = Object.keys(models).map(modelId => {
    const { [modelId]: modelClass } = models;
    const { name } = modelClass;

    return {
      id: modelId,
      name,
    };
  });

  return {
    type: actionTypes.REGISTER_MODELS,
    payload: { apiId, models: reducedModels },
  };
};

export default registerModels;
