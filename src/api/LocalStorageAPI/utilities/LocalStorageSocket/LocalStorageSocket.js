
import { BaseSocket } from '../../../API/utilities';
import { methods, LOCAL_STORAGE_ID } from '../../constants';

class LocalStorageSocket extends BaseSocket {

  constructor() {
    super();

    setImmediate(() => {
      this.onopen();
    });
  }

  onmessage() {
    return this;
  }

  onerror() {
    return this;
  }

  async send({ method, ...rest }) {
    switch (method) {
      case methods.GET: {
        const id = LOCAL_STORAGE_ID;
        const attributes = Object.keys(localStorage).reduce((acc, key) => {
          const item = localStorage.getItem(key);

          return {
            ...acc,
            [key]: item,
          };
        }, {});
        const data = {
          ...rest,
          instance: [
            {
              id,
              attributes,
            },
          ],
          splice: [{ ids: [id] }],
        };

        return this.onmessage(data);
      }

      case methods.SET: {
        const { data: localStorageData, ...queryParameters } = rest;

        Object.keys(localStorageData).forEach(key => {
          const value = localStorageData[key];

          localStorage.setItem(key, value);
        });

        return this.send({ method: methods.GET, ...queryParameters });
      }

      default:
        return null;
    }
  }

}

export default LocalStorageSocket;
