
import { BaseMessage } from '../../../API/utilities';

class WebsocketMessage extends BaseMessage {

  get isPing() {
    return this.type === 'PING';
  }

}

export default WebsocketMessage;
