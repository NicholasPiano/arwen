
import API from '../API/API';
import { RestMessage, RestSocket } from './utilities';

class RestAPI extends API {

  start() {
    this.socket = new RestSocket(this.url);
  }

}

RestAPI.Message = RestMessage;

export default RestAPI;
