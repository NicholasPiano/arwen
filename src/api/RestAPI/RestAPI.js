
import API from '../API/API';
import { RestMessage, RestSocket } from './utilities';

class RestAPI extends API {

  createSocket() {
    this.socket = new RestSocket(this.url);
  }

  async send(data) {
    try {
      const { model, query } = data;
      const response = await this.socket.send(data);

      return this.socket.processResponse({ model, query, response });
    } catch (error) {
      return this.socket.processError(error);
    }
  }

}

RestAPI.Message = RestMessage;
RestAPI.models = RestAPI.prepareModels();

export default RestAPI;
