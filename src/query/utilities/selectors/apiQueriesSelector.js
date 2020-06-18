
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import queriesSelector from './queriesSelector';
import Query from '../../Query/Query';

const apiQueriesSelector = createSelector(
  queriesSelector,
  query => memoize(
    apiId => {
      if (!query) {
        return null;
      }

      const queryIds = Object.keys(query);
      const apiQueryIds = queryIds.filter(
        queryId => query[queryId].relationships.api === apiId,
      );
      const apiQueries = apiQueryIds.map(queryId => new Query(query[queryId]));

      return apiQueries;
    },
  ),
);

export default apiQueriesSelector;
