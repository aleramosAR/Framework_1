'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensajesSchema extends Schema {
  up () {
    this.create('mensajes', (table) => {
      table.increments()
      table.timestamps()
      table.string('username', 80).notNullable()
      table.string('texto', 254).notNullable()
      table.string('fecha', 60).notNullable()
    })
  }

  down () {
    this.drop('mensajes')
  }
}

module.exports = MensajesSchema
