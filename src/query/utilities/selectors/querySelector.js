
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import queriesSelector from './queriesSelector';
import Query from '../../Query/Query';

const querySelector = createSelector(
  queriesSelector,
  queries => memoize(
    queryId => new Query(queries[queryId]),
  ),
);

export default querySelector;
