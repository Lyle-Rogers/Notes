// Adonis comes pre configured with a mailing system to send emails to people. To use it
// you first have to install the mailing system by exacuting adonis install @adonisjs/mail 
// in the terminal. This will also create a new file called mail.js in your config directory.
// Then copy this '@adonisjs/mail/providers/MailProvider' to you providers in app.js 
// inside the start directory.

// In the course I'm taking, we are using mailtrap.io to send fake emails for testing our aplications ability to send
// emails. So go to mail trap and create a new inbox. Then get the credentials to that inbox and add them in .env.

// This is how you set up mail configuration in the .env file. Add the new variable bellow at the bottom of your .env file. Then get the credentials from your mail box arrea or somewhere. I don't know if doing this is actually necesary, but I'm taking a course thats using a fake mail box or something like that. Basically it's creating fake mail by not actually sending it to a real person or something.
MAIL_CONNECTION=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_USERNAME=d1f1e735f09bc6
MAIL_PASSWORD=cc99ef7a954162

// Then you need to go to the mail.js file and change the host from smtp to mail. Like this.
smtp: {
  driver: 'smtp',
  pool: true,
  port: Env.get('SMTP_PORT', 2525),
  host: Env.get('MAIL_HOST'), // MAIL_HOST instead of SMTP_HOST
  secure: false,
  auth: {
    user: Env.get('MAIL_USERNAME'),
    pass: Env.get('MAIL_PASSWORD')
  },
  maxConnections: 5,
  maxMessages: 100,
  rateLimit: 10
},


// After all the credentials are set up, you can send emails like this. First import the mailing
// system: const Mail = use('Mail'). The method bellow is simple enough to understand. But the
// 'auth.emails.confirm-email' is the location of the edge file we'll be sending as an email.
// This method is insida a controller.
await Mail.send('auth.emails.confirm-email', user.toJSON(), message => {
  message.to(user.email)
  .from('lick@frog.com')
  .subject('Please confirm your email address') 
})

// This is my edge file that is the email we'll be sending.
<p>Hi {{ username }}, </p>

<p>
    Welcome to Adonisjs, please confirm your email address by clicking the link below:
</p>

<p>
    <a href="{{ appUrl('register/confirm' + confirmation_token) }}">Confirm email address</a>
</p>









