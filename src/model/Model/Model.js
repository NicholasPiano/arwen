
import forge from 'node-forge';

import createModelId from '../utilities/createModelId';

class Model {

  constructor(instance, dispatchQuery) {
    this.id = instance.id;
    this.attributes = instance.attributes;
    this.relationships = instance.relationships;
    this.dispatchQuery = dispatchQuery;
  }

  static get id() {
    if (!this.name || !this.api) {
      return null;
    }

    return createModelId(this);
  }

  static resolve(resolution, dispatchQuery) {
    if (!resolution) {
      return {};
    }

    const { modelInstances, error } = resolution;

    if (error) {
      return { error };
    }

    const instances = modelInstances.map(instance => new this(instance, dispatchQuery));

    return { instances };
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
