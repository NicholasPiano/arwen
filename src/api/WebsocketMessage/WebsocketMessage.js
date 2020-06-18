
class WebsocketMessage {

  constructor(rawData) {
    const [type, response] = JSON.parse(rawData);
    const { callId: id, method, result, error } = JSON.parse(response);

    this.type = type;
    this.id = id;
    this.method = method;
    this.result = result;
    this.error = error;
  }

  get isPing() {
    return this.type === 'PING';
  }

}

export default WebsocketMessage;
