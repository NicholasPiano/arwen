
class Resolution {

  constructor(resolution) {
    const { id, attributes, relationships } = resolution;

    this.id = id;
    this.attributes = attributes;
    this.relationships = relationships;
  }

  get lock() {
    const { lock } = this.attributes;

    return lock;
  }

  get error() {
    const { error } = this.attributes;

    return error;
  }

  get model() {
    return this.relationships.model;
  }

  get instances() {
    return this.relationships.instances;
  }

  setInstances(instances) {
    this.modelInstances = instances;
  }

  render() {
    return this.modelInstances;
  }

}

export default Resolution;
