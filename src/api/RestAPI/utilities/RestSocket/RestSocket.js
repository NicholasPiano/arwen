
import { BaseSocket } from '../../../API/utilities';

class RestSocket extends BaseSocket {

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

  // eslint-disable-next-line class-methods-use-this
  send(data) {
    return fetch(data);
  }

}

export default RestSocket;
