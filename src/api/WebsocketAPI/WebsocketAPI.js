
import API from '../API/API';
import { WebsocketMessage } from './utilities';

class WebsocketAPI extends API {

  static prepareSubscription(Subscription) {
    /* eslint-disable-next-line no-param-reassign */
    Subscription.api = this;
    this.Subscription = Subscription;
    this.models[Subscription.id] = Subscription;
  }

  createSocket({ url } = {}) {
    const websocketURL = url || this.constructor.url;

    this.socket = new WebSocket(websocketURL);
  }

}

WebsocketAPI.Message = WebsocketMessage;

export default WebsocketAPI;
