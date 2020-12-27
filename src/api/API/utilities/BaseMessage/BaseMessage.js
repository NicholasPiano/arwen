
class BaseMessage {

  constructor(data) {
    this.instance = data.instance;
    this.splice = data.splice;
    this.error = data.error;
    this.model = data.model;
    this.query = data.query;
  }

}

export default BaseMessage;
