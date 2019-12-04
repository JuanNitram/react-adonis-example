'use strict';

class BaseRepository {

  constructor(model)
  {
    this.model = model;
  }

  async findOrFail(id, relations = [])
  {
    await this.model.findOrFail(id).loadMany(relations);
  }

  async store(attributes)
  {
    await this.model.create(attributes);
  }

}

module.exports = BaseRepository;
