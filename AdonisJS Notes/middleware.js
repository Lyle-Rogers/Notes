// I don't know how the fuck this is working, but by adding .middleware(['auth']) to this route, we made it so that 
// users can not access the route without being signed in. So inless they are signed in, they can not access the 
// homepage. And all we needed was that little bit of code. No calling middleware in or anything. This will also
// cause the user to run into an error when trying to acces a blocked page without being logged in. If you go to 
// the hooks guide, the second example of hooks will show you how to cancel this error out and instead, whenever 
// this error is thrown it will redirect the user to the login page so that they can log in instead of looking 
// at a nasty error. Fucking lit! 
Route.on('/').render('home').as('home').middleware(['auth'])
