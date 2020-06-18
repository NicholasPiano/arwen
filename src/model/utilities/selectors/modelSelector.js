
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import Model from '../../Model/Model';
import modelsSelector from './modelsSelector';

const modelSelector = createSelector(
  modelsSelector,
  model => memoize(
    modelId => new Model(model[modelId]),
  ),
);

export default modelSelector;
