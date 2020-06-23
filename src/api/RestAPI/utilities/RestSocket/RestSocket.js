
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

  send(data) {
    return fetch(data);
  }

}

export default RestSocket;
