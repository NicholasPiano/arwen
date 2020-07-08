
import createAPIId from '../../utilities/createAPIId';
import { actionTypes } from '../constants';
import { BaseMessage, BaseSocket } from './utilities';

class API {

  static get id() {
    if (!this.apiId) {
      this.apiId = createAPIId(this.url);
    }

    return this.apiId;
  }

  static prepareModels(...models) {
    this.models = models.reduce((acc, modelClass) => {
      /* eslint-disable-next-line no-param-reassign */
      modelClass.api = this.id;

      return {
        ...acc,
        [modelClass.id]: modelClass,
      };
    }, {});
  }

  exportModels() {
    return Object.keys(this.constructor.models).reduce((acc, modelId) => {
      const modelClass = this.constructor.models[modelId];

      return {
        [modelClass.name]: modelClass,
      };
    }, {});
  }

  get id() {
    return this.constructor.id;
  }

  createSocket() {
    this.socket = new BaseSocket(this.url);
  }

  send(data) {
    return this.socket.send(data);
  }

  createMessage(data) {
    return new this.constructor.Message(data);
  }

  matchesId(action) {
    if (!action.payload) {
      return false;
    }

    return action.payload.api === this.constructor.id;
  }

  get startActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.START;
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

  get errorActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.ERROR;
  }

  get stopActionType() {
    return action => this.matchesId(action) && action.type === actionTypes.STOP;
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

  // eslint-disable-next-line class-methods-use-this
  shouldStart() {
    return true;
  }

  start(parameters) {
    return this.baseAction(actionTypes.START, parameters);
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

  stop(parameters) {
    return this.baseAction(actionTypes.STOP, parameters);
  }

}

API.apiId = null;
API.url = null;
API.models = {};
API.Message = BaseMessage;

export default API;
