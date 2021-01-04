// To create a model use this in the command line: adonis make:model NameOfModel
// Always make your model name singular not plural and uppercased for convieniance.


// Inside the user model, we use this method here to connect the user model to the job model with a has many method. 
// The has many method allows a user to have many jobs. The documentation has list of all the methods you can use. 
jobs() {
  return this.hasMany('App/Models/Job');
}

// Because of the hasMany method. This user_id field is automatically filled in with the user id when a job is 
// created, but we have to manually add the field into the job migration ourself and give it that exact name for 
// hasMany method can give each job the id of the user who created it.
table.integer('user_id')

// By connecting the two models together, now we have the ability create new jobs that have the id of the user that 
// created it. And now we also have simple access to do that with the code bellow.
const posted = await auth.user.jobs().create({ // This variable is inside a larger function that is inside a controller. Auth is one of the arguments in this function. So we can now pull all the data out of this big container of data, just by calling it as an argument. We can then grab the user information for the user logged in, get all his job data, and create new jobs very easily and simplistically right here with the code in front of you by using the jobs() method we created. 
  title: job.title,
  link: job.link,
  description: job.description,
})

















