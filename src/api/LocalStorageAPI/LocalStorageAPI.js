
import API from '../API/API';
import { LocalStorage } from './models';
import { LocalStorageMessage, LocalStorageSocket } from './utilities';

class LocalStorageAPI extends API {

  createSocket() {
    this.socket = new LocalStorageSocket();
  }

}

LocalStorageAPI.url = 'local-storage';
LocalStorageAPI.prepareModels(
  LocalStorage,
);
LocalStorageAPI.Message = LocalStorageMessage;

export default LocalStorageAPI;
