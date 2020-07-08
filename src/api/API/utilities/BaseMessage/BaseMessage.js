
class BaseMessage {

  constructor(data) {
    this.model = data.model;
    this.query = data.query;
    this.instance = data.instance;
    this.splice = data.splice;
  }

}

export default BaseMessage;
