// Adonis has a variety of DBs (tatabases) to choose from. PostgreSQL is my fave with a GUI of DBeaver.
// GUIs manage your database. Allowing you to look at your tables and the content in them and edit, delete, and create them. 


// To set up your db. Create a db with heroku so that your content is already online. Add the postgreSQL addon to make the db a postgreSQL db.
// Then go to your db settings in heroku and add all your db data into the .env file. There thats all! Now adonis is working API.
// Using postgreSQL my migrations tend to shove shit in my mouth. If you catch your migrations trying shove shit in your mouth its probably an ssl not certified problem. Simply tell ssl to chove it's own shit down it's own throat and swallow it by going to your database.js file in config and adding this to the pg client: ssl: { rejectUnauthorized: false }
pg: {
  client: 'pg',
  connection: {
    host: Env.get('DB_HOST', 'localhost'),
    port: Env.get('DB_PORT', ''),
    user: Env.get('DB_USER', 'root'),
    password: Env.get('DB_PASSWORD', ''),
    database: Env.get('DB_DATABASE', 'adonis'),
    ssl: { // This isn't normally here. I added it to tell ssl to shut the fuck up. I deserve!! to fucking cus about this lil shit here. It waisted more than a whole fucking DAY! of my time for two stupid lines.
      rejectUnauthorized: false,
    },
  }
}


// This is how you access content from the database inside of a view. This is inside the index view, which we gave acces to all the data in JobController.home through http routing. And the controller has acces to the database through the model.
@each(job in jobs) //This's saying to do this for each job inside JobController. So essentually each job in the Job table in the database. So every job and new job items in the database is going to be rapped inside this html. Making it very simplistically dynamic.
  <div class="job-container">
  <div class="blank"></div>
  <div class="job-info">
    <h3><a href="{{ job.link }}"></a>{{ job.title }}</h3> {/* The abjects inside of the double curly brackets are taging the data inside the job table in the database. It's that simple since the view already has acces to the controller. Damn!  */}
    <p>{{ job.description }}</p>
  </div>
</div>
@endeach

// Mexican word of the day: Erra, Definition: Was. And also... Wait for it! Pequeno. Definition: fuck u. Nah I'm just a sad bored looser. It means small or little or just not big.
// Yo erra moy poqueno. Exact translation: I was very fucking small dumb fuck!

































































