
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { actions } from '../../query';
import { selectors as resolutionSelectors } from '../../resolution';
import { selectors as instanceSelectors } from '../../instance';
import {
  selectors as modelSelectors,
  createManagerQuery,
  generateSort,
  isRegisterable,
} from '../utilities';

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

  // eslint-disable-next-line class-methods-use-this
  useMemo(fn, deps) {
    return useMemo(fn, deps);
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
    const resolution = useSelector(resolutionSelectors.resolutionSelector)(queryId);
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

    useEffect(() => {
      setQueryBlocked(blocked);

      if (!blocked) {
        setQueryParameters(parameters);
      }
    }, [blocked]);

    return this.model.resolve({ resolution, onQuery, blocked, queryBlocked });
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

  useLocalFirst() {
    const model = useSelector(modelSelectors.modelSelector)(this.model.id);
    const instances = useSelector(instanceSelectors.instanceSetSelector)(model);

    if (isEmpty(instances)) {
      return {};
    }

    // eslint-disable-next-line new-cap
    return new this.model(instances[0]);
  }

}

export default Manager;
