
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDeepCompareMemoize from './useDeepCompareMemoize';

const useAPI = (api, parameters) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (api.shouldStart(parameters)) {
      dispatch(api.start(parameters));

      return () => dispatch(api.stop(parameters));
    }

    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useDeepCompareMemoize(parameters));

  return null;
};

export default useAPI;
