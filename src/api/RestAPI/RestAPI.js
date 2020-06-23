
import API from '../API/API';
import { RestMessage, RestSocket } from './utilities';

class RestAPI extends API {

  start() {
    this.socket = new RestSocket(this.url);
  }

  send(data) {
    return this.socket.send(data).then(this.socket.onmessage).catch(this.socket.onerror);
  }

}

RestAPI.Message = RestMessage;
RestAPI.models = RestAPI.prepareModels();

export default RestAPI;
