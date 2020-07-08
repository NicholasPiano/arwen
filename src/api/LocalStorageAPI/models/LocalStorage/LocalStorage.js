
import { Model } from '../../../../model';

import LocalStorageManager from './LocalStorageManager';

class LocalStorage extends Model {

}

LocalStorage.objects = new LocalStorageManager(LocalStorage);

export default LocalStorage;
