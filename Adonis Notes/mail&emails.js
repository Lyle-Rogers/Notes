// Adonis comes pre configured with a mailing system to send emails to people. To use it
// you first have to install the mailing system by exacuting adonis install @adonisjs/mail 
// in the terminal. This will also create a new file called mail.js in your config directory.
// Then copy this '@adonisjs/mail/providers/MailProvider' to you providers in app.js 
// inside the start directory.


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














