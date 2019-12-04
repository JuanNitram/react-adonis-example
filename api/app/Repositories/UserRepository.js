'use strict';

const { ioc } = require('@adonisjs/fold');
const Config = use('Config');

const BaseRepository = use('App/Repositories/BaseRepository');

class UserRepository extends BaseRepository {

  constructor(model)
  {
    super(model);
  }

}

ioc.singleton('UserRepository', function (app) {
  const model = app.use('App/Models/User');
  return new UserRepository(model);
});


module.exports = ioc.use('UserRepository');