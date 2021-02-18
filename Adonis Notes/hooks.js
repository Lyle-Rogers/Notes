// This is a hook: {{ appUrl('register/confirm' + confirmation_token) }}. I was able to call it from anywhere in the 
// view files. It's value is the APP_URL in the env file. If you fallow the data bellow you'll see how we can call 
// this hook from any view and create it. This file is called hooks.js. I created it in the start folder. You can 
// create how ever many hooks you want in it. I think it's called a hook because it hooks data between files. 
'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
    const View = use('View')
    const Env = use('Env')

    View.global('appUrl', path => {
        const APP_URL = Env.get('APP_URL')

        return path ? `${APP_URL}/${path}` : APP_URL
    })
})


// This is another hook that's fucking amazing and an insane life saver and example of the power of adonis. The 
// exception model, so far as I understand, is a component that allows you to through exceptions for errors, And even
// allows you to trigure some code whenever the exception is thrown. In this case, we used middleware to not allow 
// people that are not logged in to access the home page. So instead, when a user access the home page without being
// logged in, adonis will through an error. And with the exception bellow, we made it so that whenever that error is 
// throughn, adonis will redirect them to the loggin page instead. Fucking amazing. 'InvalidSessionException' is the 
// exact name of the error. When the error was throughn, you could see the location and class of the error througher.
// We got the name of that class, InvalidSessionException, and used the exception method bellow to ignore the error
// and instead do what I say to do when the error is thrown. { response } is the component we called in. We can call
// whatever and as many components as we want. We then used response in the function to redirect them to the login 
// page when the error is throughn.
const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('InvalidSessionException', (error, { response }) => {
    return response.redirect('/login')
  })
})


// With hooks you can define global variables that you can access in all of you view files. 
'use strict'

const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')

hooks.after.providersBooted(() => { // You can find a list of difrent options like providersBooted in the adonis doc's hook section.
  const View = use('View')

  View.global('thisMonth', () => { // This is were we difine the global variable. thisMonth is the name of the variable and the second agument is the value of the variable.
    return moment().format('MMMM')  // Moment is a time librairy that is returning the month we are in. So the value of the variable would be February.
  })
})
// To call this variable from any View use: {{ thisMonth() }}
// Don't forget to use the () function idocator or it wont work.