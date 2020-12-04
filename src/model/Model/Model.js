
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

  static resolve(resolution, onQuery) {
    if (!resolution) {
      return { onQuery };
    }

    const { modelInstances, error, data } = resolution;

    if (error) {
      return { error, onQuery };
    }

    if (data) {
      return { data, onQuery };
    }

    const instances = modelInstances.map(instance => new this(instance));

    return { instances, onQuery };
  }

  static generateId(data) {
    return forge.md.sha256.create().update(data).digest().toHex();
  }

  static receive({ ...parameters }) {
    return parameters;
  }

  get name() {
    return this.attributes.name;
  }

}

Model.fields = {};

export default Model;
