
import API from '../API/API';
import { WebsocketMessage } from './utilities';

class WebsocketAPI extends API {

  start() {
    this.socket = new WebSocket(this.url);
  }

}

WebsocketAPI.Message = WebsocketMessage;

export default WebsocketAPI;
