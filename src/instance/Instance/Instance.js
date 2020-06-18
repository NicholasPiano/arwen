
class Instance {

  constructor(instance) {
    this.id = instance.id;
    this.attributes = instance.attributes;
    this.relationships = instance.relationships;
  }

  get model() {
    const { model } = this.relationships;

    return model;
  }

}

export default Instance;
