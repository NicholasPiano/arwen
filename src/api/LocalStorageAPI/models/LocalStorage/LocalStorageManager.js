
import { Manager } from '../../../../model';
import { methods } from '../../constants';

class LocalStorageManager extends Manager {

  useGet() {
    const { instances, ...rest } = this.useQuery({ method: methods.GET });

    if (!instances) {
      return rest;
    }

    const { attributes } = instances[0];

    return { ...attributes, ...rest };
  }

  useSet(data) {
    const blocked = !data;

    return this.useQuery({ method: methods.SET, data, blocked });
  }

}

export default LocalStorageManager;
