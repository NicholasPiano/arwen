
import LocalStorageAPI from './LocalStorageAPI';

const localStorageAPI = new LocalStorageAPI();

const { LocalStorage } = localStorageAPI.exportModels();

export {
  LocalStorage,
  localStorageAPI,
};
