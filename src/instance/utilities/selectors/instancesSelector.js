
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const instancesSelector = createSelector(
  selectors.arwenSelector,
  data => (data || {}).instance,
);

export default instancesSelector;
