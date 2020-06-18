
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const queriesSelector = createSelector(
  selectors.dataSelector,
  data => data.query,
);

export default queriesSelector;
