
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../query';
import { selectors } from '../../resolution';
import { createManagerQuery, generateSort, isRegisterable } from './utilities';

class Manager {

  constructor(model) {
    this.model = model;
  }

  useQuery(parameters, blocked = false) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    const { query, queryId } = createManagerQuery(
      parameters,
      this.model,
      blocked,
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const selector = useSelector(selectors.resolutionSelector);
    const resolution = selector(queryId);
    const register = isRegisterable(query, resolution);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (register) {
        dispatch(actions.registerQuery(query));
      }

      return () => register && dispatch(actions.unregisterQuery(query));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryId]);

    const dispatchQuery = instanceQuery => {
      dispatch(actions.registerQuery(instanceQuery));

      return {
        cancel: () => dispatch(actions.unregisterQuery(instanceQuery)),
      };
    };

    return this.model.resolve(resolution, dispatchQuery);
  }

  useFilter({ sort: sortFunction, page, size, ...filter }) {
    const sort = generateSort(sortFunction, this.model);

    return this.useQuery({ filter, page, size, sort });
  }

  useGet(id) {
    const instances = this.useFilter({ id });

    if (!instances) {
      return null;
    }

    return instances[0];
  }

}

export default Manager;
