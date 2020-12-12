
import forge from 'node-forge';

import createModelId from '../utilities/createModelId';

class Model {

  constructor(instance) {
    this.id = instance.id;
    this.attributes = instance.attributes;
    this.relationships = instance.relationships;
  }

  static get id() {
    if (!this.name || !this.api) {
      return null;
    }

    return createModelId(this);
  }

  static resolve({ resolution, onQuery, blocked, queryBlocked }) {
    const common = {
      loading: !resolution && !blocked,
      exists: !queryBlocked,
      onQuery,
    };

    if (!resolution) {
      return common;
    }

    const { modelInstances, error, data } = resolution;

    if (error) {
      return { error, ...common };
    }

    if (data) {
      return { data, ...common };
    }

    const instances = modelInstances.map(instance => new this(instance));

    return { instances, ...common };
  }

  static generateId(data) {
    return forge.md.sha256.create().update(data).digest().toHex();
  }

  static shouldSend() {
    return true;
  }

  static receive({ ...parameters }) {
    return parameters;
  }

  get name() {
    return this.attributes.name;
  }

  get instances() {
    const { instances } = this.relationships;

    if (!instances) {
      return [];
    }

    return [...instances];
  }

}

Model.fields = {};

export default Model;
