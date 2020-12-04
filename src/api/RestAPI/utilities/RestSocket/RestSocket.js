
import { BaseSocket } from '../../../API/utilities';

class RestSocket extends BaseSocket {

  constructor(url) {
    super();
    this.url = url;

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

  processResponse(data) {
    return this.onmessage(data);
  }

  processError(error) {
    return this.onerror(error);
  }

  // eslint-disable-next-line class-methods-use-this
  send(data) {
    const { method } = data;
    const { endpoint, method: httpMethod } = method;
    const getURL = () => `${this.url}${endpoint}`;

    return fetch(getURL(), { method: httpMethod });
  }

}

export default RestSocket;
