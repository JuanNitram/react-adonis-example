'use strict';

class BaseRepository {

  constructor(model)
  {
    this.model = model;
  }

  async all(relations = [])
  {
    return await this.model.query().fetch();
  }

  async findOrFail(id, relations = [])
  {
    return await this.model.findOrFail(id).with(relations);
  }

  async store(attributes)
  {
    return await this.model.create(attributes);
  }

}

module.exports = BaseRepository;
