// Controlers allow you to create, delete, and change data from the database within your code.


// To create a controller use: adonis make:controller ControllerName
// Write the name of the controller capitulized and don't add Controller after the name because adonis does that for you.
// You can then find your controllers in app controllers and adonis would of added controller the end of your controller name.


// This is a controller.
'use strict'

const Job = use('App/Models/Job') // This is taging the job model so we can connect them.

class JobController {
  async home({view}) { // home({view}) is just graving all the views so we can use them, and home is only one method. We can make many methods and call the individualy in the same controller.

    // Create a job
    const job = new Job; // This is how we create new data.
    job.title = 'My job title'; // Job is the table while what comes after the . is the collums in the tables. This is adding the info we gave it to the collumns in the database.
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




















