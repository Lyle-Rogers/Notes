// Validators validate data in a form. For example, making sure that a users username in unique when they create a new username.


// First install the validator: adonis install @adonisjs/validator.


// This is a form for a signup page.
// {/* <form action="{{ route('UserController.create') }}" method="POST"> {/* Action is the action taking place when the form is submitted. Method is the route method being used with the UserController.create method. */}
//   {{ csrfField() }}

//   <label for="username">Username</label>
//   <input type="text" name="username" value="{{ old('username', '') }}"> {/* Name is locking onto the username data. */}
//   @if(hasErrorFor('username'))
//     <span>
//         {{ getErrorFor('username') }} {/* This is the error that gets throne. At the bottom we determin what is throne in the error. Now we can create and style all out errors really simply. */}
//     </span>
//   @endif

//   <label for="email">Email</label>
//   <input type="email" name="email" value="{{ old('email', '') }}">
//   @if(hasErrorFor('email'))
//       <span>
//           {{ getErrorFor('email') }}
//       </span>
//   @endif

//   <label for="password">Password</label>
//   <input type="password" name="password">
//   @if(hasErrorFor('password'))
//       <span>
//           {{ getErrorFor('password') }}
//       </span>
//   @endif

//   <button type="submit">Join now</button>
// </form> */}

// Then add the validator method to that route that is being used to post the validated data in start/routes.js.
Route.post('/signup', 'UserController.create').validator('CreateUser'); // We create this route so that we can bind the signup view, the UserController, and the validator together. 'CreateUsers' in .validator() is the specific validator method we are using.


// Now ad the validator provider: '@adonisjs/validator/providers/ValidatorProvider' to providers in start/app.


// Then create the validator method CreateUsers in the terminal: adonis make:validator CreateUser.


// The CreateUser validator was created in app/validators 
'use strict'

class CreateUser { // Now we add all out validation rules and any errors that are thrown from the validations.
  get rules () { // These are the rules we'll be using in this validator.
    return {
      'username': 'required|unique:users', // This is for the username data in the signup view. Required means the field must be complete before being submitted. Unique:users means it must be unique to all other usernames in the users table in the database.
      'email': 'required|unique:users',
      'password': 'required'
    }
  }

  get messages () { // These are the error messages throne if an error is throne for any of the validators.
    return {
      'required': "I'm sorry, this is a forced complience. You must give us a {{ field }}.", // This is the error message for all the fields that didn't check out with the required validators. The {{ field }} places the field name.
      'unique': "Ha... looser. Someone thought of your idea of a {{ field }} before you."
    } 
  }

  async fails (error) { // Async is making the function dorment, only to be awoken and exacuted when an error is throne.
    this.ctx.session.withErrors(error) 
      .flashAll(); // This is flashing all the error messages if errors are givin.
    
    return this.ctx.response.redirect('back'); // This is redirecting the user back to the route they came from if the form submission fails.
  }
}

module.exports = CreateUser


// This is anothier way to use the validator. The bellow code is a refrence to how this methods
// error handling is used in an the view.
{/* <div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input 
      type="email" 
      class="input {{ hasErrorFor('email') ? 'is-danger' : '' }}" 
      name="email"
      value="{{ old('email', '') }}"
    >
  </div>
  {{ elIf('<span class="help is-danger">$self</span>', getErrorFor('email'), hasErrorFor('email')) }}
</div> */}

// Now instead of having a seprit file for the validator and calling that file from a route, we
// can define the validations from a controller.
async register ({ request, session, response }) {
  const validation = await validateAll(request.all(), {
    username: 'required|unique:users,username',
    email: 'required|email|unique:users,email',
    password: 'required'
  })

  if (validation.fails()) {
    session.withErrors(validation.messages()).flashExcept(['password']); // The flashExcept here is flashing all the errors for the validation, even the password errors, but if you redirect the page back. Your old email and username will be there but not the password. I think for security reasons this is useful.
    return response.redirect('back')
  }
}























