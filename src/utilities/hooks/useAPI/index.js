
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDeepCompareMemoize from './useDeepCompareMemoize';

const useAPI = (api, parameters) => {
  const dispatch = useDispatch();
  const dependencies = useDeepCompareMemoize(parameters);

  useEffect(() => {
    if (api.shouldStart(parameters)) {
      dispatch(api.start(parameters));

      return () => dispatch(api.stop(parameters));
    }

    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return null;
};

export default useAPI;
