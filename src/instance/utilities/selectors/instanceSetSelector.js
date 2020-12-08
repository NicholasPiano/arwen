
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import Instance from '../../Instance/Instance';
import instancesSelector from './instancesSelector';

const instanceSetSelector = createSelector(
  instancesSelector,
  instances => memoize(
    ({ instances: instanceIds = [] }) => instanceIds.map(
      id => new Instance(instances[id]),
    ),
    ({ lock }) => lock,
  ),
);

export default instanceSetSelector;
