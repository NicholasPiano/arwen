
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import Instance from '../../Instance/Instance';
import instancesSelector from './instancesSelector';

const instanceSelector = createSelector(
  instancesSelector,
  instances => memoize(
    instanceId => new Instance(instances[instanceId]),
  ),
);

export default instanceSelector;
