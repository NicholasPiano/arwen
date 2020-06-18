
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const modelsSelector = createSelector(
  selectors.dataSelector,
  data => data.model,
);

export default modelsSelector;
