
import { LocalStorageAPI } from '../api';

const localStorageAPI = new LocalStorageAPI();

const { LocalStorage } = localStorageAPI.exportModels();

export {
  LocalStorage,
  localStorageAPI,
};
