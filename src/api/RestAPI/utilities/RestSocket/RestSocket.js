
import { BaseSocket } from '../../../API/utilities';

class RestSocket extends BaseSocket {

  constructor(api) {
    super();
    this.api = api;

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

  async processResponse({ response, model: modelId, method, ...rest }) {
    const data = await response.json();
    const model = this.api.constructor.models[modelId];
    const mutatedData = model.receive({ data, method });

    return this.onmessage({ ...mutatedData, model: modelId, ...rest });
  }

  processError(error) {
    return this.onerror(error);
  }

  // eslint-disable-next-line class-methods-use-this
  async send(data) {
    const { method, body, headers } = data;
    const { endpoint, method: httpMethod } = method;
    const getURL = () => `${this.api.constructor.url}${endpoint}`;
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
          ...headers,
          'Content-Type': 'application/json',
        };
      }

      return headers;
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
