// npx create-react-app react-app-title: Creates a new react app with the title of react-app-title and your app is ready.

// npm install express: installs express and adds it to the dependencies list in package.json. Express is the dependency that that 
// works as the frontends backend and hosts the node.js frontend to the web with efficiency and handles error handling and what not!

// make an app.js file at the root of the project and add the following to it to configure express and have it build the project in 
// a static manner with the web. It configures it to run the command npm run build with production when the project is hosted in the web!
const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log('Server listening on port: ', port);
})

// At the package.json file in the root of the react project change the scripts start script from 'react-scripts start' to 'node app' when 
// pushing to heroku. If it is set to node app with development then development will crash so always switch before switching rules.

// make sure the project is setup with github and pushed to github and then you can continue with this and everything.

// Then sign in to the terminals heroku cli with heroku login and if that's not working like it always is try heroku login -i then. after
// make a new heroku app in your logged in heroku account using the heroku create new-heroku-apps-tittle-and-what-not command. This will create
// the project in heroku that's preconfigured with github if github is set up I think that's what it is and then run the command git push heroku 
// branch name and whatever and your project will be pushed live to heroku with no problem and I think everything is up to date and working.!.!.!.
