'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Place', (faker) => {
  return {
    name: faker.province({full: true}),
    description: faker.sentence({word:3}),
    long_description: faker.sentence({word: 10}),
    lat: '-32.54453',
    lng: '-32.54453',
  }
});
