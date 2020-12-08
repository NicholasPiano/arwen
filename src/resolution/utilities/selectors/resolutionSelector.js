
import memoize from 'lodash/memoize';

import { selectors as instanceSelectors } from '../../../instance';
import Resolution from '../../Resolution/Resolution';
import resolutionsSelector from './resolutionsSelector';

const resolutionSelector = state => memoize(
  queryId => {
    const resolutions = resolutionsSelector(state);
    const { [queryId]: resolutionPrototype } = resolutions;

    if (!resolutionPrototype) {
      return null;
    }

    const resolution = new Resolution(resolutionPrototype);
    const instances = instanceSelectors.instanceSetSelector(state)(resolution);

    resolution.setInstances(instances);

    return resolution;
  },
);

export default resolutionSelector;
