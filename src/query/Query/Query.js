
class Query {

  constructor({ id, attributes, relationships } = {}) {
    this.id = id;
    this.attributes = attributes;
    this.relationships = relationships;
  }

  get filter() {
    return this.attributes.filter;
  }

  get api() {
    const { api } = this.relationships;

    return api;
  }

  get model() {
    const { model } = this.relationships;

    return model;
  }

  get action() {
    const { filter, page, size, sort, method } = this.attributes;
    const { model } = this.relationships;

    return {
      payload: {
        query: this.id,
        filter,
        page,
        size,
        sort,
        model,
        method,
      },
    };
  }

}

export default Query;
