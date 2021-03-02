// Migrations add remove edit data in the db. They are what migrates data from the code to the db.
// Models connect to the migrations to interact with the db from the controllers which are kinda like the front end part of the framework. 


// I think migrations and models are connected by their names. Models have upercase singular names like User and 
// migrations have lowercase plural name, like users.


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
      table.integer('user_id') // An integer is a number. This migration is acociated with a model. That job model has a hasMany relationship with the user model. That's why we have user_id here. And user_id has to be named exactly that because the hasMany relationship automatically adds the user id to this field.
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobsSchema


// Now after creating your migrations, and after you've set up the database, you can exacute adonis migration:run 
// in the terminal of visual studio code and it'll run your migrations to the database. Creating all your tables you 
// made in your migrations and the collums that your data in the tables is going to be stored in inside the database. 


// Go to the documentation of adonis and look up migration commands in database migrations to get a list of all the 
// the commands you can use on your migrations. Like adonis miagration:refresh. That refreshes all your migrations 
// back to the begining. So that you can start over with them, which will also delete all the data in them too.


// Adonis migration:rollback will role back your last migration.


// To alter a migration, (e.g make or update columns) run adonis migration:make name_of_the_migration_you_want_to_alter. 
// Then the option to chose select table or make table will pop up. Choose select table. Then go to the new migration file and alter the
//  table.
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumMessagesSchema extends Schema {
  up () {
    this.table('forum_messages', (table) => {
      table.string('message', 3000).notNullable().alter() // Write the column name of the calumn you want to alter, change the column however you like, then write .alter() at the end of the column to indicate that the column is being altered.
    })
  }

  down () {
    this.table('forum_messages', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ForumMessagesSchema
// And to add a new column, add the column normally with a new name, but dont add alter at the end.
// Now run adonis migration:run to migrate the new migration file and your table should be updated.  











