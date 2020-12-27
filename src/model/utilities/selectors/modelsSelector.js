
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const modelsSelector = createSelector(
  selectors.arwenSelector,
  data => data.model,
);

export default modelsSelector;
