
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const instancesSelector = createSelector(
  selectors.dataSelector,
  data => (data || {}).instance,
);

export default instancesSelector;
