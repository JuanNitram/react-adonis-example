'use strict';

const { ioc } = require('@adonisjs/fold');
const Config = use('Config');

const BaseRepository = use('App/Repositories/BaseRepository');

class PlaceRepository extends BaseRepository {

  constructor(model)
  {
    super(model);
  }

}

ioc.singleton('PlaceRepository', function (app) {
  const model = app.use('App/Models/Place');
  return new PlaceRepository(model);
});


module.exports = ioc.use('PlaceRepository');
