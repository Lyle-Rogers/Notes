// Controlers allow you to create, delete, and change data from the database within your code.


// To create a controller use: adonis make:controller ControllerName
// Write the name of the controller capitulized and don't add Controller after the name because adonis does that for you.
// You can then find your controllers in app controllers and adonis would of added controller the end of your controller name.


// This is a controller.
'use strict'

const Job = use('App/Models/Job') // This is taging the job model so we can connect them.

class JobController {
  async home({view}) { // home({view}) is just grabing all the views so we can use them, and home is only one method. We can make many methods and call the individualy in the same controller.

    // Create a job
    const job = new Job; // This is how we create new data.
    job.title = 'My job title'; // Job is the table while what comes after the . is the collums in the table. This is adding the info we gave it to the collumns in the database.
    job.link = 'http://google.com';
    job.description = 'My job description';

    await job.save(); // This is crutial. It's saving our data to the database. 

    // Fetch a job
    const jobs = await Job.all(); // This is a query function. This is quering the db and retrieving data from the Job table with the all() query. Then it stores that data in the job variable. There are many types of diffrent queries you can use. Like if you want to only retrieve specific things out of a table. To see  all the queries you can use, go to the adonisJS documentation.

    return view.render('index', { jobs: jobs.toJSON() }); // This is using the views we taged at the top and rendering the index view. Since we are rendering the view here we can go to routes.js in start and change its http call for index to get instead of on and erase the render method since this view is now being rendered through the controller. Then add the job controller to the get call so the view and controller are linked through http. Finally the {object} after index in the render method is converting all the data in the jobs variable to json so that the render method can render it with the view and the view can acces the data in jobs.
  }
}

module.exports = JobController // And this lil bitch is aviously just exporting our beautiful JobController.


// The controller above is called in routes.js like this.
Route.get('/', 'JobController.home');
// This route method is exacuted every time someone visits the home page. JobController.home is exacuted with the route method. So everytime someone visits the home page it exacutes. Creating a new job in the database everytime its exacuted and adding the given data above to the job.


// This is a user controller for a signup page. After the user fills out the signup form, clicks submit, and all the data is passed through the validator successfully, the data is then passed on to the controller. The controller then uses the user model for adding the signup data to the database.
'use strict'

const User = use('App/Models/User') // Retrieving the user model for use.

class UserController { // Actual controller method.
  async create({ request, response, auth }) { // This is the argument the create method is using.
    const user = await User.create(request.only(['username', 'email', 'password'])); // Here is like looking into a magnifinglass to look at the data in argument so we can change or alture it. The request argument is all the data from the form. This is only retrieving the password, email, and username from the request argument. We need to do this so that unwanted cookies aren't retrieved with the data. The create method then creates a user with the data given.

    await auth.login(user); // This logs in the user after the user's profile is created. 

    return response.redirect('/'); // Then after all that this redirects the user back to the home page. Simple and awesome.
  }
}

module.exports = UserController


// This controller allows us to create, delete, and modify jobs.
'use strict'

const Job = use('App/Models/Job')

class JobController {
  async home({view}) { //All the arguments in the home method are predefined adonis methods. View, the only argument in this method, is conecting this method to all the views to be easilly accessed from all of them.

    const jobs = await Job.all(); // Fetch all jobs.

    return view.render('index', { jobs: jobs.toJSON() }); // Through the view argument, all the job data is now being rendered to the index view. As you can see in the code here, the controller is sorta sticking the view and all the necesary data together. Now they are one, lol.
  }

  async userIndex({view, auth}) { // Auth is the argument were you can access all the users and they're personal data.

    const jobs = await auth.user.jobs().fetch(); // Right here, jobs equals the auth argument. Which is then accessing all the data from the specific individual that is signed in and lastely, fetching it for use.

    return view.render('jobs', { jobs: jobs.toJSON() }); // Now this guy can see all of his own jobs.
  }

  async create({ request, response, session, auth }) { // This method is creating new jobs. It's linked to a form in a view. The form is where the user fills out all the data in the form.
    const job = request.all(); // The request argument is where all the data is stored when the user hit submit on the job form. This is now grabing all the data in the form with the all() function.

    const posted = await auth.user.jobs().create({ // This is selecting the user's job table and creating the new data bellow in it. Posted is'nt being called from anywhere ells. In this case it's only use is to be a name for this function. 
      title: job.title, // This is grabing the title collum in the job table and making it equal to the title data in the job variable.
      link: job.link,
      description: job.description,
    })

    session.flash({ message: 'Your job has been posted!'}); // This is flashing a message to where it is being called from the view saying that the job has been created when the job is created.
    return response.redirect('back'); // This is now redirecting the route back, since it was changed when the data from this controller was sent to a route.
  }

  async delete({ response, session, params }) { // Response is what happens when everything else is finished. Session is for when little sessions need to be throne on the sight for like flashing messages and stuff. If this happens flash a session with this message, type dill. Params is where the id data was thrown when sent to this controller method.
    const job = await Job.find(params.id); // This is making the job equal to the ids of the data in params.

    await job.delete(); // Now those fuckers where wiped out of existence.
    session.flash({ message: 'Your job has been deleted'}); // Now a session was triggured for this glorious event that flashed a fuck you message.
    return response.redirect('back');
  }

  async edit({ params, view }) {
    const job = Job.find(params.id); // This is the same dill as the delete method. Except now the data in the params was smashed together with the edit view. All the  data that was sent to this controller is now the edit views bitch, for the edit view to do with as it pleases. If you know what I mean.
    return view.render('edit', { job: job })
  }  

  async update({ response, request, session, params }) { // The edit view is now using this method to store its new data in the db.
    const job = await Job.find(params.id); // This is connecting job to the data with the same ids in the params from job table in the data base

    job.title = request.all().title; // Since job is now connected to the data in the db, if we update job, it also updates the data in the db. In this case we are making the data in the db equal to the data in the request argument which is the updated virsion of the old job data.
    job.link = request.all().link;
    job.description = request.all().description;

    await job.save(); // And now that everything has taken place, the job is saved.

    session.flash({ message: 'Your job has been updated.'});
    return response.redirect('/post-a-job');
  }
}

module.exports = JobController
























