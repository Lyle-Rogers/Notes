// Migrations add remove edit data in the db. They are what migrates data from the code to the db.
// Models connect to the migrations to interact with the db from the controllers which are kinda like the front end part of the framework. 


// This is a migration
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema') // A schema is whats altering the db data, not the migration itself.

class UserSchema extends Schema {
  up () { // The up function takes the data up to the db.
    this.create('users', (table) => { // This is creating a new table called users. The models connect the controllers to the schemas. Accessing the data from the controllers is really simple. You simply import the model and after you can call the data directly , to interact with it from the db.
      table.increments() // I think this is creating the bellow tables by incrementing (adding) a new table everytime needed. Not sure though.
      table.string('username', 80).notNullable().unique() // This is creating a username collumn in the users table. The string after table is making the data type a string instead of bolean or something. There are many data types to choose from. You can see them all either in the documentation or the GUI by clicking on the data type of an object in a table.
      table.string('email', 254).notNullable().unique() // .unique() you can't have an email that isn't unique to another email.
      table.string('password', 60).notNullable() // I'm pretty sure the number after the name of the collum is the max length of letters or numbers that can be in the password.
      table.timestamps() // Creates time stamps saying when the user created his/her data and when the updated it.
    })
  }

  down () { // The down function drops the data back down to the aplication.
    this.drop('users')
  }
}

module.exports = UserSchema


// This is another migration for a job table. Migrations are for creating the data in the db. In the controllers is where you interact with the data so that user can do things like post, update, and delete jobs.
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobsSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('title') // Table is giving it a new table. String is making the data in that table a string. And title is the name of that table, which you can use to access the data.
      table.string('link')
      table.string('description')
      table.integer('user_id') // An integer is a number.
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobsSchema



















