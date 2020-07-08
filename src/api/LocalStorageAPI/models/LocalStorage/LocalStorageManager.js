
import { Manager } from '../../../../model';

class LocalStorageManager extends Manager {

  useGet() {
    const method = 'get';

    const { instances } = this.useQuery({ method });

    if (!instances) {
      return {};
    }

    const [instance] = instances;

    return instance.attributes;
  }

}

export default LocalStorageManager;
