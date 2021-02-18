// This type of notification is simple and dynamic. You can pick a place on the site where you want your notifications
// to be places and you can have as many notifications as you want to be placed there. First place this
// @include('includes.notification') in your edge file where you want the notifications to pop up at. The 'include.
// notification' is the location of the notification edge file in the views. This is what's inside that view file:
// @if(flashMessage('notification'))
//   <div class="notification is-{{ flashMessage('notification.type') }}">
//     {{ flashMessage('notification.message') }}
//   </div>
// @endif
// What the above code is doing is creating the div file with the dynamic notification, only if a notification is 
// flashed. The is-{{ flashMessage('notification.type') }} is not adonis syntax, it has to do with bulma. Bulma is a 
// frameword similure to bootstrap. It allows you to easily stile things. The adonis part of it, these culry brackets
// {{ }}, is making what comes after is- dynamic so that bulma knows the correct style to give it. In this case, that 
// dynamic word will be success, as you'll see at the bottom in the controller.  The {{ flashMessage('notification.
// message') }} is the dynamic message that is flashed. In this controller at the bottom, you'll see how it all works.
session.flash({
    notification: {
        type: 'success', // The only reason this type is here, is so that bulma will know what type of style it is.
        message: 'Registration successful! An email has been sent to your email address, please confirm the email.'
    }
})
// The above code is inside a controller. This method here is only a small piece of the whole controller. So of course
// we need to call session at the top of the function first before we can actually use it. As you can tell this is 
// very dynamic and maybe hard to fallow along with, but essentually what is happening is session.flash is sending
// the notification variable with its content to sessions flashMessage location. Now if we call flashMessage we can 
// we can specisify notification, then message, so that we can access the message above. Now if you go back and up and
// look at the code again it might make a lot more sense about what is happening. The beauty of this method is we can 
// use it however we like for what ever reason we want, not just notifications. This shows the power of adonis. And 
// when it comes to that bulma shit you can easilly just make the name of the div dynamic and specify the name of it 
// in the controller like above. Then style the div name with css. In fucking credable.


// This is another way of handling errors. But instead of displaying it as a notification, this will take you to a blank 
// white screen that only has the words of the error bellow. This error is for only when you want mess with your users.
.catch( ( err ) => {
    response.send('ERROR' + ': ' + 'You have not paid for this item yet so fuck off.')
});



















































