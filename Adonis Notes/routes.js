// As Adonis says, this is what routes are. Http routes are entry points to your web application. You can create routes for different URL's and bind Controller actions to them. They basically connect the views and controllers together.
// Basically in order for one of your files to have a url that goes to it, like a signup block of code, localhost/signup, you have to create a route for it. There are many difrent routing methods of which  you would have to visit the documentation to see. But essentually with routes you can create a route then bind it to a controller. So now your view's route can have simple acces to you database through the binded controller. And a lot more. 


// This is a more commonly used routing method. Route is just using the routing system. On means every time they visite the home signup route, the signup view is rendered. A view is like a html mixed with javascript file, so when someone visits this route it gives them all the content in the sign up view.
Route.on('/signup').render('auth.signup');


// Get is little difrent then on. On basically means do this every time someone is on this route. Where get means every time someone gets this route, do this. The route location, this thingy /, is the landing page. The JobController.home after the /, is a binded controller. Every time someone gets this route, the controllers home method is exacuted. All it is doing though is retrieving all the data for that view from the database.
Route.get('/', 'JobController.home');


// The post method is posting the data from signup to the UserController.create method. Which is then posting the data to the database. The validator method is validating the data type. But it don't work without installing it first. adonis install @adonisjs/validator. Then add this '@adonisjs/validator/providers/ValidatorProvider' to your providers in start app.js
Route.post('/signup', 'UserController.create').validator('CreateUser');


// This route is getting data from the JobController and putting it in the routes so it can be  accessed and altured.
Route.get('/post-a-job', 'JobController.userIndex');


// These two routes are trigured by the click of a button. Data from the form the button was clicked on, is passed to the route, then the data is passes it to the controller, and the controller tells the coding fary god mother to fuck the data out of existence viea deletion or send it to the edit view where the proccess is restarted so that it can be edited.
Route.get('/post-a-job/delete/:id', 'JobController.delete'); // Honestly I have no fucking clue what the delete afeter post-a-job is for. And I'm pretty sure :id is the id data sent from the params to the controller. Ok, never mind I found its meaning in existence. It's just the name of the route. And the :id thing is the same id type of method I went through in react that I had to go through to create users with my awesome little json file.
Route.get('/post-a-job/edit/:id', 'JobController.edit');


// Everything here has already been clairified, but Im putting it here just to show what you can do.
Route.post('/post-a-job/update/:id', 'JobController.update').validator('CreateJob');
Route.post('/post-a-job/update', 'JobController.create').validator('CreateJob');


// This is a route group. It makes it easier to organize your routes when you have a bunch of routing methods going to the same route.
Route.group(() => {
  Route.get('/delete/:id', 'JobController.delete'); // Notice how the begining of this route /post-a-job is missing? Thats because it is provided in the prefix at the bottom.
  Route.get('/edit/:id', 'JobController.edit');
  Route.post('/update/:id', 'JobController.update').validator('CreateJob');
}).prefix('/post-a-job'); // This makes it so that the begining of every route starts with /post-a-job aoutomatically so that you don't have replicate it so much.



