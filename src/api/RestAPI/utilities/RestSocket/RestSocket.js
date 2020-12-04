
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
  async send(data) {
    const { method, body } = data;
    const { endpoint, method: httpMethod } = method;
    const getURL = () => `${this.url}${endpoint}`;
    const getMethod = () => {
      if (httpMethod) {
        return httpMethod;
      }

      return 'GET';
    };
    const getBody = () => {
      if (body) {
        return JSON.stringify(body);
      }

      return undefined;
    };
    const getHeaders = () => {
      if (body) {
        return {
          'Content-Type': 'application/json',
        };
      }

      return undefined;
    };

    const result = await fetch(
      getURL(),
      {
        method: getMethod(),
        body: getBody(),
        headers: getHeaders(),
      },
    );

    return result;
  }

}

export default RestSocket;
