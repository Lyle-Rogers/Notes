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


// This checks if the user is logged in or not. Abviously have to import auth first.
await auth.check()


// This is how you can query with multiple where conditions
const messages = await Friend
    .query()
    .where({ 'user_messaged_id': params.id, 'user_id': userId })
    .fetch()
    

// orderBy orders your data when shown in the view. You need this because your db automatically orders data by what the newest. So if 
// you edit a db column the position of that column is switched to last even if it was second. If your order the data by the first id
// your data will be in order from first created to last.
const messages = await Friend
    .query()
    .where({ 'user_messaged_id': params.id, 'user_id': userId })
    .orderBy('id', '1')
    .fetch()
    

// This is like the coolist thing I've ever seen! If you add desc to the second peramiter of orderBy, it'll make the order of the data 
// come out from last to first, instead of first to last. Desc stands for descend.
const blogs = await Blog
      .query()
      .orderBy('id', 'desc')
      .fetch()



















