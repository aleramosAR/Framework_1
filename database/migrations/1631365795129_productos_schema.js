'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 80).notNullable()
      table.integer('price').notNullable()
      table.string('thumbnail', 20).notNullable()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
