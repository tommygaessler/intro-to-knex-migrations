'use strict';

exports.up = function(knex) {
  return knex.schema.table('tracks', (table) => {
    table.dropColumn('artist');
    table.integer('artist_id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('tracks', (table) => {
    table.string('artist').notNullable().defaultTo('');
    table.dropColumn('artist_id');
  });
};
