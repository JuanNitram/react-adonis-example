'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments();

      table.string('name').notNullable();
      table.string('description').notNullable();
      table.string('long_description');
      table.string('lat').notNullable();
      table.string('lng').notNullable();

      table.timestamps();
    })
  }

  down () {
    this.drop('places');
  }
}

module.exports = PlacesSchema
