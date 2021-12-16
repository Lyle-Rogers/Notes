# django-admin startproject djangoProjectTitle: creates a new django rest-framework backend.

# pip install djangorestframework: installs djangos restframework in your new django project.
# then add 'rest_framework' to the installed apps.
 
# py manage.py startapp newApiAppTittle: creates a new api in your backend I'd like to name it api or even backend-api or similar.
# add the new api title to the installed apps of the settings.py file.

# py manage.py migrate: will migrate the already set up migrations for the users and whatever.

# pip install whitnoise: white noise handelse the backends static files for heroku development and is needed because django is not already
# set up to handle static files in production but is preconfigured for the development part.

# add whitnoise 'whitenoise.middleware.WhiteNoiseMiddleware' middleware in the settings.py middleware list above all other middleware
#  except for the security middleware.

# STATIC_ROOT = os.path.join(BASE_DIR, 'static'): add this in settings.py under STATIC_URL. it adds the static root for heroku deployment to see.
# import os: import os at the top of the settings.py file.

# pip install psycopg2: installs psycopg which is what connects the api to the server or I think database.

# DEBUG = False: debug false is necessary in production but works fine for development if you need it which I never have.

# pip install gunicorn: This is what gunicorns documentation said about it. Gunicorn 'Green Unicorn' is a Python 
# WSGI HTTP Server for UNIX. It's a pre-fork worker model. The Gunicorn server is broadly compatible with various web frameworks, 
# simply implemented, light on server resources, and fairly speedy. I know that extremely complicated but what it does is handles what 
# happens between django and the user which basically means it's just the server that's pretty fast even.

# pip install django-cors-headers: using cors header allows u to make a list of the urls able to access the backend or even allow all. without
# it, it basically throws an error like CORS policy: No ‘Access-Control-Allow-Origin’ header is present on the requested resource and that is
# fucking annoying.
# Then add 'corsheaders.middleware.CorsMiddleware' to the middleware list above everything else and idk but probably not above the security 
# middleware but idk.
# And then add 'corsheaders' to the list of installed apps as well and then you can create the new cors headers list of allowed urls. 
# add any and every url that connects to the backend to this cors allowed origins list at the bottom so they will have permission to
# access the backend from the backends frontend part! Make this allowed headers list right above this installed apps list in the settings.py file.
# CORS_ALLOWED_ORIGINS = [
#     "https://example.com",
#     "https://sub.example.com",
#     "http://localhost:8080",
#     "http://127.0.0.1:8080"
# ]
# CORS_ORIGIN_ALLOW_ALL = True: This allows every frontend url in existence to access the backend. be carful you may hacker attacks using this because
# this will give them complete access to your database from this api here.

# And similar to the cors headers list above we need to add the same urls from the cors allowed origins list above in the backends settings.py files 
# ALLOWED_HOSTS list and even the url heroku gives for this backend like 'the-backend-of-yours.herokuapp.com'. This practically does the same 
# thing as cors headers but it's already installed and setup in the settings.py file. But when adding a url to the allowed host list, unlike
# the cors headers list, make sure that there isn't any http:// or trailing / like netflix.com rather than https://netflix.com/ and yes it'll 
# work I think.

# pip freeze > requirements.txt: puts all your installed pip dependencies in a newly created file for heroku to read and install during deployment.
# pip freeze will make a list of all the dependencies ever installed on your computer even from old projects. you might not want to add every 
# dependency that's even from other projects your project so remove all the unnecessary dependencies from the requirements.txt file and 
# here's a list of all the dependencies required for a new has nothing yet project:
# Django==4.0
# django-cors-headers==3.7.0
# djangorestframework==3.12.4
# gunicorn==20.1.0
# psycopg2==2.9.1
# pytz==2021.1
# sqlparse==0.4.1
# whitenoise==5.3.0
# using pip freeze > requirements.txt is still required to get the correct dependency versions from your computer that might need to be updated 
# eventually and the versions here in this list might get outdated in the near future just take away the unnecessary dependencies that aren't needed.

# we need to add a file that's named Procfile in the root of your project which is the containing folder of the project that directs gunicorn to the
# wsgi file of your backend that heroku will need extremely bad and uh whatever.
# add this in the Procfile: web: gunicorn backend-title-the-backends-name-and-ye.wsgi
# this directs heroku and gunicorn to the backends wsgi file.

# Add this project to github and any new changes.

# And make a new app with heroku and connect it with this backends projects github repository and then hit deploy and the backend should be online
# and working with everything even the automatically made db.sqlite3 database that is created when we created the backend. If the backend gives an
# error with something like not found or request not found it is fine it's just there because there's no data to be displayed but it'll be fine after
# we create the serializers with their models and everything for that data.

# After posting the backends project to heroku, heroku automatically creates a postgresql database that it hosts that we will definitely need sense
# the db.sqlite3 database that is created with djangos project is always reset after posting edits or anything from the project to heroku sense that 
# database is part of the backend itself and whatever data is stored in that database locally is set to the db.sqlite3 database with heroku every time
# herokus backend project is edited.
# Get the postgresql databases credentials from heroku by going to settings in heroku selecting reveal config vars and there will be only 1 config var
# which is the databases credentials for the heroku database. an example of postgresql database credentials bellow:
#             USER: ends at the :                     PASSWORD: password ends before the @                        HOST: begins after the @           PORT:    NAME:
# postgres://eytyiydjlrxgybr:6a56404j59gk40f92b388dd588asdfasdj35kj7g4fikf9850412b83e7das0811059gjrk68b572@ec2-31-393-296-32.compute-1.amazonaws.com:5432/d39qyrjjkifgao
# the postgresql database credentials in settings.py are set up like the example bellow there:
# DATABASES = { 
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'd39qyrjjkifgao',
#         'HOST': 'ec2-31-393-296-32.compute-1.amazonaws.com', 
#         'PORT': 5432,
#         'USER': 'eytyiydjlrxgybr',
#         'PASSWORD': '6a56404j59gk40f92b388dd588asdfasdj35kj7g4fikf9850412b83e7das0811059gjrk68b572'
#     }
# }
# Your backend and database are now fully setup with heroku and ready to start being used from the internet like a fucking pro I thin.!.!.!.!...!.