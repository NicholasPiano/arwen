
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const resolutionsSelector = createSelector(
  selectors.arwenSelector,
  data => data.resolution,
);

export default resolutionsSelector;
