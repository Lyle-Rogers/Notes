// Guide to Creating a MongoDB Database Along with Admin Database Users
db.createUser({
  user: 'jordan',
  pwd: 'password',
  customData: { startDate: new Date() },
  roles: [
    { role: 'clusterAdmin', db: 'admin' },
    { role: 'readAnyDatabase', db: 'admin' },
    'readWrite'
  ]
})
//  This is how to show the users using get and drop is to delete a user
db.getUsers()
db.dropUser('jon')


//  How to Create a MongoDB Collection. db is the comand for database .books is the name of the database. insert() is what we are inserting to the database. 
db.books.insert({
    "title": "OOP Programing",
    "startDate": new Date(),
    "authors": [
        { "name": "Jon Snow JR" },
    ]
})


// How to Insert Many Documents into a MongoDB Collection. insertMany() takes an array while insert just takes one object.
db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishDate": new Date(),
        "author": [
        {"name": "Avdi Grimm" }
        ]
    },
    {
        "name": "Confident Ruby",
        "publishDate": new Date(),
        "author": [
        {"name": "Steven Pressfield" }
        ]
    },
    {
        "name": "Confident Ruby",
        "publishDate": new Date(),
        "author": [
        {"name": "Malcolm Gladwell" }
        ]
    }
])


// This finds all the items in  the collection books. .pretty() makes it return all of the items in a prettier format.
db.books.find()
db.books.find().pretty()


// This is to find a specific item in the collection
db.books.find({ name: "Confident Ruby"}).pretty()


// This is how find specific items inside of an item in a collection.
db.books.find(
    {
        name: "Confident Ruby" // This is the object in the collection it is finding
    },
    {    // This is how to select specific things to return inside of an object. 1 is simular to true saying to return it and 0 is saying not to return in. If you dont select it and put 0 or 1 it will automatically not return it.
        _id: 0, // This id 0 is saying not to return the id.
        name: 1, // This name 1 is saying to return the name.
        authors: 1
    }
)


// Query for a Portion of a Nested Array Element in a Document Using $slice
db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
      { "name": "Malcolm Gladwell" },// Thies are the two diferent names
      { "name": "Ghost Writer" }
    ]
  });


db.books.find(
    {
        name: "Blink"
    },
    {
        publishedDate: 1,
        name: 1,
        authors: { $slice: -1 } //This is the number of the object in the arary you want to pull. You can use -1 to only grab the last element or use 1 or 2.
    }
).pretty()


// How to Delete Documents in MongoDB
db.books.remove({name: "OOP Programming"}, 1) // Removes a single document
db.books.remove({name: "OOP Programming"}) // Removes all documents


// How to Include Nested Fields in a find Query
db.books.find(
    {
        name: "Blink"
    },
    {
        name: 1,
        publishedDate: 1,
        "authors.name": 1 // this brings back only the authors and names without it saying if the are active or not.
    }
).pretty()


// Using the findOne Method in MongoDB to Query for a Single Document
db.books.find({name: "Blink"}).length() // This tells you the number of items

// This returns one item instead of all of them
db.books.findOne({ name: "OOP Programming" } )


// This is a regular expression that brings back the query even though the full name of the query was not defined
"name": "Deep Work: Rules for Focused Success in a Distracted World"// this is the full name
db.books.findOne({ name: /.*deep work.*/i }) // deep work is part of the full name but the regular expression allowes it to work as well


// How to Check if a Field Exists in a MongoDB Document
db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )
  
  db.books.find({ reviews: { $exists: true } })
  db.books.find({ reviews: { $exists: false } })












































































