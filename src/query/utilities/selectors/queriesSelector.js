
import { createSelector } from 'reselect';

import selectors from '../../../utilities/selectors';

const queriesSelector = createSelector(
  selectors.arwenSelector,
  data => data.query,
);

export default queriesSelector;
