
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../query';
import { selectors } from '../../resolution';
import { createManagerQuery, generateSort, isRegisterable } from './utilities';

class Manager {

  constructor(model) {
    this.model = model;
  }

  // eslint-disable-next-line class-methods-use-this
  useCallback(fn, deps) {
    return useCallback(fn, deps);
  }

  // eslint-disable-next-line class-methods-use-this
  useState(initial) {
    return useState(initial);
  }

  useQuery({ blocked = false, ...parameters }) {
    const [queryParameters, setQueryParameters] = useState(parameters);
    const [queryBlocked, setQueryBlocked] = useState(blocked);
    const dispatch = useDispatch();
    const { query, queryId } = createManagerQuery(
      queryParameters,
      this.model,
      queryBlocked,
    );
    const resolution = useSelector(selectors.resolutionSelector)(queryId);
    const register = isRegisterable(query, resolution, queryBlocked);
    const onQuery = deferredParameters => {
      setQueryBlocked(false);
      setQueryParameters({ ...queryParameters, ...deferredParameters });
    };

    useEffect(() => {
      if (register) {
        dispatch(actions.registerQuery(query));
      }

      return () => register && dispatch(actions.unregisterQuery(query));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryId]);

    return this.model.resolve(resolution, onQuery);
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
