
import API from '../API/API';
import { WebsocketMessage } from './utilities';

class WebsocketAPI extends API {

  createSocket({ url } = {}) {
    const websocketURL = url || this.constructor.url;

    this.socket = new WebSocket(websocketURL);
  }

}

WebsocketAPI.Message = WebsocketMessage;

export default WebsocketAPI;
