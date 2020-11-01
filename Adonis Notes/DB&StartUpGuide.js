// Adonis has a variety of DBs (tatabases) to choose from. PostgreSQL is my fave with a GUI of DBeaver.
// GUIs manage your database. Allowing you to look at your tables and the content in them and edit, delete, and create them. 


// To set up a db working with adonis and a gui to manage it, fallow these steps + ! | fuck off. And your done! Thats life, get used to it.
// 1. After creating a new adonis app, we need to create a new heroku app through the terminal. But first, we need need
// to install the heroku tool kit. So just type heroku tool kit and your operating system, like windows, into the 
// search bar, click the heroku tool kit link, then download it. After, create a new heroku app by exacuting heroku 
// create name-of-app in the visual studio code terminal, or just going to the heroku website and creating it there, 
// that will create a new app on heroku. 

// Name that app whatever you like, prefurably something that maches the name of the adonis app. After creating the app, go to 
// resorces. Click add ons. Then connect the heroku postgres add on to create a postgreSQL data base. Click on the add 
// on after creating it and it'll take you to your db on heroku. There you can find the amount of storage you have left 
// and rows you can use. Don't worry though they give you quite a bit of storage for free, and if your site gets massive enough and 
// worth it, it won't be hard to upgrade to paid plan. From there if you go to settings, you can find all your db 
// credentials that you'll need to access the db from your adonis app and gui.

// 2. A gui is a program that allows you to manage your db. Like deleting data and creating data. Download the
// DBeaver gui from DBeaver.com. It's my favorit gui. It's just simply awesome and simplistic and has everything you 
// need. Just like adonis, lol. From there enter in to the world of DBeaver. You'll emedietly get intruduced to a big
// block of bullshit that you have no idea what the fuck dose. But it's ok because it's beautiful bullshit. Ok then, 
// now go to the database option at the very top and click new database conection. It should be the first option. From
// there a form will pop up where you'll need to put in all the information you got from your heroku dbs settings. 
// After you've done that, click test connection at the bottom left corner to see if your database is connected 
// properly with the credentials givin, then click finish. You now have full access to your db from here. 

// .3 Your adonis app has a file called .env. I think this it stands for envirement. In there is where you'll need to 
// put the credentials to your db as bellow.
HOST=127.0.0.1 // There is a credential called host in your heroku setting, but it does not go here. Make sure you only chantge the data that starts with DB_.
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=UQv4T3OiXIQpmYzhQuqqvwNc4BM1laYc
DB_CONNECTION=pg // Here is where you say what type of db it is. This is automatically set to adonis, but I changed it to pg so that it'll work with our postgres db. 
DB_HOST=ec2-107-22-241-205.compute-1.amazonaws.com // This is where the host actually goes.
DB_PORT=5432 // Do change the port. It was 3306 at first
DB_USER=heaunjcihokjaz // This is you database user
DB_PASSWORD=68a5a6c63ecc98c43263f79edfb7b7354dccb487b42eb0ec9990b31449b6c818 // Thow shall not pass you litlle shit!
DB_DATABASE=delqlqatn50hhh // The name of thouts db.
SESSION_DRIVER=cookie // Don't fucking touch this shit.
HASH_DRIVER=bcrypt
// And finally, download postgres buy simply exacuting npm i pg in the terminal. Even if you've done it before in an 
// old adonis aplication, you'll need to again in a new one.

// Now that the db is created, we need to push our app to the app we created on heroku. First push your app to git hub.
// Now connect your github repository to the heroku app by going to deploy on the heroku app and clicking connect to
// git hub and adding you repository to it. Now before we can push the app to heroku, first we need to add all the config
// vars or we'll get a nasty error. Heroku normally uses the .env file were all your credentials and stuff are to get 
// the data it needs to push the app. But adonis hides it's .env file with git ignore so that no one can still your apps
// credentials. Which means that heroku can't access the .env file and so it won't work. But, lucky for us we can just add
// all our necesary credentials to heroku's config vars on our heroku app. Go to settings on your heroku app and click
// reviele config vars. Then fallow this guide: http://titaniumbunker.com/?p=5019 The guide is going to tell you to add
// almost everything you have in the env file to your config vars but also three other crucial things. After that we 
// should be set to push the app now. So after you've pushed your app to git, exacute git push heroku main in the 
// terminal and your app will be pushed to heroku. Now go to the provided url in your app settings and walla, your live!

// Heroku makes you pay to use ssl. Chrome definition of ssl: Secure Sockets Layer, a computing protocol that ensures
// the security of data sent via the internet by using encryption. Basically a hole lowd of encripting your data bullshit
// so that only your aplication and the db can read your data when it is passed back and forth. This is aviously a 
// problem that heroku makes you pay for it, since now anyone can still our data. So once the site is online, it doesnt 
// have the lock symble at the top left. But for some reason if you add https to the begining of the websites url instead
// of just http, it gives you the lock symbol and works fine. But there is many ways to configure ssl for free without
// heroku. Like cloudflare.con, but I tried to use cloudflare and it was being a bitch.






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
    }
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


// Or you can connect a view to a controller and have it, which will give that view access to all the data the controller has access to from what ever models it's connected to and the controller method you use for that view, the ability to call all the data you need directly from the data base, and do with it as you please.
{{ job.title }} // Like this.





























































