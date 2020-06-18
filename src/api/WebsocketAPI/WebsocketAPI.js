
import createAPIId from '../../utilities/createAPIId';
import { actionTypes } from '../constants';

class WebsocketAPI {

  static get id() {
    if (!this.apiId) {
      this.apiId = createAPIId(this.url);
    }

    return this.apiId;
  }

  static prepareModels(...models) {
    return models.reduce((acc, modelClass) => {
      /* eslint-disable-next-line no-param-reassign */
      modelClass.api = this.id;

      return {
        ...acc,
        [modelClass.id]: modelClass,
      };
    }, {});
  }

  static exportModels() {
    return Object.keys(this.models).reduce((acc, modelId) => {
      const modelClass = this.models[modelId];

      return {
        [modelClass.name]: modelClass,
      };
    }, {});
  }

  get id() {
    return this.constructor.id;
  }

  start() {
    // eslint-disable-next-line no-undef
    this.socket = new WebSocket(this.url);
  }

  matchesId(action) {
    return action.payload.api === this.constructor.id;
  }

  get openActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.OPEN;
  }

  get receiveActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.RECEIVE;
  }

  get sendActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.SEND;
  }

  get closeActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.CLOSE;
  }

  baseAction(type, data) {
    return {
      type,
      payload: {
        api: this.constructor.id,
        ...data,
      },
    };
  }

  open() {
    return this.baseAction(
      actionTypes.OPEN,
      {
        url: this.constructor.url,
      },
    );
  }

  receive(message) {
    return this.baseAction(actionTypes.RECEIVE, { ...message });
  }

  error(data) {
    return this.baseAction(actionTypes.ERROR, { ...data });
  }

  close(data) {
    return this.baseAction(actionTypes.CLOSE, { ...data });
  }

  send(data) {
    return this.socket.send(JSON.stringify(data));
  }

}

WebsocketAPI.apiId = null;
WebsocketAPI.url = null;
WebsocketAPI.models = {};

export default WebsocketAPI;
