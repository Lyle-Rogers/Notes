# Setting up a django rest_framework server with digitalocean!

# I set up nation mech with this django plus digitalocean tutorial.
# https://www.youtube.com/watch?v=NUGrTCRoIFk&t=1s
# Make sure to add the staticfiles setup after this video using digitalocean's docs in the link under.

# digital ocean docs about setting up django on its app platform and static files setup at the end of the guide.
# https://docs.digitalocean.com/tutorials/app-deploy-django-app/

# settings.py digitalocean staticfiles and database setup.
import os # An already installed library that can retrieve environment variables. And digitalocean already automatically passes it its environment variables
from urllib.parse import urlparse # parses urls or I don't know. It is already installed
from django.core.management.utils import get_random_secret_key # this creates a random secret key and is already installed.

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', get_random_secret_key()) # getenv and environ use the second arg if the first one is not retrieved

DEBUG = os.getenv('DEBUG', 'False') == "True" # Environment variable are in a string format and here we are checking to see if the string passed is set as True and anything else is set as False.

ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS', '127.0.0.1,localhost,192.168.10.44').split(',') # If digital ocean doesn't pass the first arg, the next arg is used that we can pass development hosts to that are then separated by the commas.

if os.getenv('DATABASE_URL', '') != '':
    r = urlparse(os.environ.get('DATABASE_URL')) # Digital oceans database url has all of its database credentials in it. This is secure because the credentials aren't being stored in the code. And the server will never drop when the databases password changes automatically whenever
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.path.relpath(r.path, '/'),
            'USER': r.username,
            'PASSWORD': r.password,
            'HOST': r.hostname,
            'PORT': r.port,
            'OPTIONS': {'sslmode': 'require'}, # this is supposedly required
        }
    }
else: # else if that database doesn't exist because we are in development mode or something, it'll use this database instead.
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

STATIC_URL = '/static/' # name this whatever but make sure you name it the same thing in digitalocean

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles") # A directory that stores the staticfiles. You can name it whatever you want but make sure it is the same in digitalocean

# DigitalOcean small guide.
# create an account and add a credit card that will automatically be charged for any recourses your projects use there on after.
# Then start a new project named whatever your apps name is if you want.
# In that project click manage and then apps. Make a new app. Apps store components and are nothing alone so you automatically create a component with that app.
# For that component created with the app select web service. After connecting it with a github repo it will automatically tell that your project is a python django 
# project and select all the material it may need.
# select whatever plan you want

# set these as the environment variables in that component created that hosts our django server
# DEBUG = False
# DJANGO_ALLOWED_HOSTS = ${APP_DOMAIN}
# DATABASE_URL = ${db.DATABASE_URL} # If your database isn't db then name this something else
# DJANGO_SECRET_KEY = Generate a random secret key with a terminal command you'l find in the digitalocean tutorial bellow and select encrypt for that environment variable.

# HTTP Request Routes:
# /

# Run Command:
# gunicorn --worker-tmp-dir /dev/shm whatever_the_folder_that_contains_settings.py_is_called.wsgi

# Then click create and select database.
# name the database db, make sure that it is postgresql, and then create it.
# After that it's credentials are already setup with your app.

# in your projects app select create again and select create resources from source code.
# Select the same github rep as the app.
# Name this recourse staticfiles or a similar thing.
# Make sure to select Static Site as the source type

# Source Directory:
# /

# HTTP Request Routes:
# /static # or whatever STATIC_URL is in settings.

# Output Directory:
# staticfiles # or whatever you set STATIC_ROOT as.

# Now run that fucking django server bullshit setup fuckerynes




















# A DIFFERENT, WORSE STRATEGY THAT IS NOT SUFFICIENT TO MAKE A DJANGO SERVER WITH DIGITALOCEAN!

# Environment Variables & dotenv - Python & Django 3.2 Tutorial Series
# https://www.youtube.com/watch?v=rKiLd40HIjc&list=PLEsfXFp6DpzRMby_cSoWTFw8zaMdTEXgL&index=31

# settings.py
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-_)(ka#)py7^d%79x)+*mr$=v%%1w2ii0gb%+1&7!u+%!_1b)dp')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = str(os.environ.get("DEBUG")) == "1"

ALLOWED_HOSTS = [
    '127.0.0.1', 
    '192.168.10.44',
]

if not DEBUG:
    ALLOWED_HOSTS = [os.environ.get('DJANGO_ALLOWED_HOSTS')]

CORS_ALLOWED_ORIGINS = [
    'http://127.0.0.1', 
    'http://192.168.10.44',
]

if not DEBUG:
    CORS_ALLOWED_ORIGINS = [os.environ.get('DJANGO_CORS_ALLOWED_ORIGINS')]

# .env
DJANGO_SECRET_KEY=%f97-%h=$rr2j3=7idlia3l1np*012ma$fgjhb#)e3dk7&3cka
DEBUG=1
DJANGO_ALLOWED_HOSTS='backend.nationmech.com'
DJANGO_CORS_ALLOWED_ORIGINS='https://backend.nationmech.com'

# To make .env work we have to import it in manage.py
...
import dotenv

def main():
    """Run administrative tasks."""
    dotenv.read_dotenv() # add this line to this section here
    ...
# And also don't forget to install the dotenv dependency with: pip install django-dotenv 

# Prepare Django for DigitalOcean App Platform - Python & Django 3.2 Tutorial Series:
# https://www.youtube.com/watch?v=M9aCNYM_4vQ&list=PLEsfXFp6DpzRMby_cSoWTFw8zaMdTEXgL&index=32

# use psycopg2 instead of psycopg2-binary. psycopg2-binary is outdated

# Make a file in the root directory named runtime.txt and place your projects python virgin there
# python-3.10.2

# generate django secret keys
# python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'

# settings.py
SECRET_KEY = os.environ.get('SECRET_KEY', 'django-insecure-_)(ka#)py7^d%79x)+*mr$=v%%1w2ii0gb%+1&7!u+%!_1b)dp')

# .env
SECRET_KEY=%f97-%h=$rr2j3=7idlia3l1np*012ma$fgjhb#)e3dk7&3cka

# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

POSTGRES_DB = os.environ.get("POSTGRES_DB")
POSTGRES_PASSWORD = os.environ.get("POSTGRES_PASSWORD")
POSTGRES_USER = os.environ.get("POSTGRES_USER")
POSTGRES_HOST = os.environ.get("POSTGRES_HOST")
POSTGRES_PORT = os.environ.get("POSTGRES_PORT")

POSTGRES_READY = (
    POSTGRES_DB is not None
    and POSTGRES_PASSWORD is not None
    and POSTGRES_USER is not None
    and POSTGRES_HOST is not None
    and POSTGRES_PORT is not None
)

if POSTGRES_READY:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgressql",
            "NAME": POSTGRES_DB,
            "USER": POSTGRES_USER,
            "PASSWORD": POSTGRES_PASSWORD,
            "HOST": POSTGRES_HOST,
            "PORT": POSTGRES_PORT
        }
    }


# Deploy Django to Digital Ocean App Platform - Python & Django 3.2 Tutorial Series
# https://www.youtube.com/watch?v=FjWbMNw6Wk0&list=PLEsfXFp6DpzRMby_cSoWTFw8zaMdTEXgL&index=38
# Website tutorial that's with the video
# https://www.codingforentrepreneurs.com/blog/deploy-django-to-digitalocean-app-platform

STATIC_URL = 'static/'

STATICFILES_DIRS = [
    BASE_DIR / "static", # os.path.join(BASE_DIR, 'static')
]

STATIC_ROOT = BASE_DIR / "staticfiles-cdn"

# py manage.py collectstatic

# Digital ocean:
# Instal gunicorns dependency for django.

# Inside the app platform settings your-apps-name components tab, edit the run command to show djangos wsgi files directory using this:
# gunicorn --worker-tmp-dir /dev/shm settingsContainerFoldersName.wsgi

# Digital oceans environment variables. edit this:
# DISABLE_COLLECTSTATIC = 1
# DEBUG = 0
# DJANGO_ALLOWED_HOST = the-domain-name-right-up-there.ondigitalocean.app
# DJANGO_SUPERUSER_EMAIL = lylerogers8@gmail.com # I don't this variable is actually needed.
# DJANGO_SUPERUSER_USERNAME = Lyle Rogers
# DJANGO_SECRET_KEY = ******** # enable encrypt with this variable.
# DJANGO_SUPERUSER_PASSWORD = ******** # enable encrypt with this variable.

# generate django secret key in the terminal with this. This is for digital oceans password and secret key environment variables:
# python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'

# app db environment variables:
# POSTGRES_DB = ${db.DATABASE} # db inside this wrapper ${} refers to the database we just made automatically. Database properties were automatically made with the database. 
# POSTGRES_HOST = ${db.HOSTNAME}
# POSTGRES_USER = ${db.USERNAME}
# POSTGRES_PASSWORD = ${db.PASSWORD}
# POSTGRES_PORT = ${db.PORT}

# Change run command to this: 
# A single or list of run commands are known as a job. Every time a new version of the app is deployed this job is triggered and then
# your charged with the according plan.

# python manage.py migrate --noinput
# python manage.py createsuperuser --noinput --email lylerogers8@gmail.com

# Add any extra commands you want eg. python manage.py runstatic --noinput

# click next after
# Name your new job. Maybe like this: django-migrate-job. Name doesn't entirely mater that much.
# and select a basic or pro plan for the job. Use the basic plan if your app is barely getting started in life!

# In the component Settings: django-migrate-job, change "when to run" in job trigger to before every deploy.

# Digital Oceans console allows you to run all of djangos terminal commands!

# delete sqlite.db in django before every production deploys.

# If a deploy fails try python manage.py migrate to test if that's what failed!
