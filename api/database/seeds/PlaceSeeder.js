'use strict'

/*
|--------------------------------------------------------------------------
| PlaceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const PlaceRepository = use('App/Repositories/PlaceRepository');

class PlaceSeeder {
  async run () {
    for(let i = 0; i < 20; i++){
      let place = await Factory.model('App/Models/Place').make();
      await PlaceRepository.store(place.$attributes);
    }
  }
}

module.exports = PlaceSeeder;
