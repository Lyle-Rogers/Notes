# Install python with: https://www.python.org/downloads/.

# python -m pip install django: Installs django that comes with the django-admin cmd in the terminal. Install this globally without using a 
# virtual environment.

# django-admin startproject <project-name>: Makes a python django project named whatever!

# cd <project-name>: That is fucking obvious.

# python -m venv env: Creates a python environment where dependencies are installed.

# ./env/scripts/activate: This activates the virtual environment and because it's activated all pip dependencies will 
# be installed in the virtual environment. You can see if it's active if it's name is at the beginning of the terminal.
# and it's name is (env)!

# All python dependencies are global so make sure that the environment is activated first or the dependencies will stay on your computer.

# deactivate: This cmd will deactivate the virtual environment.

# python -m pip freeze > requirements.txt: Will place the name and version of all the dependencies in your environment, if it's active, 
# in a requirements.txt file it will create. If your environment is not active, it'll place all your global dependencies in it instead.
# The requirements.txt file will be created in your local directory.

# python -m pip install -r requirements.txt: Installs your dependencies in the requirements.txt in an activated environment or globally.

# py manage.py startapp api: Starts an app in your project name api. Api is my preferred name.




# 
# 
# 
#                               This is an older tutorial but very useful:
# 
# 
# 

# First get the latest release of python from its own website at https://www.python.org/downloads/. After pip and django-admin should just work with
# everything. If not figure out how to get them working with you computer. It should be very simple and  whatever

# Django can be installed easily using pip . In the command prompt, execute the following command: pip install django . This 
# will download and install Django. After the installation has completed, you can verify your Django installation by executing 
# django-admin --version in the command prompt.
# I think this installs Django in a global environment for pip

# cd into the new django project

# code . to opens visual studio code from the terminal in the directory you are currently in

# py manage.py startapp app-name makes a new app in your project. Apps are were your projects models, view sets, and migrations are stored.
# A single project can have many apps

# When you add new apps to the django project you then need to add them to the installed apps list inside the settings file. In the installed
# apps section just add the new app 'app-name' to the installed apps section

# py manage.py migrate migrates the migrations that were pre configured when making the app. Like the user migrations are made automatically.
# Migrating your migrations will migrate your new data structure from your models to the database. For example, if you make an article object 
# with a model class that has the structure of an id description and title you can migrate it. After that you can delete and create articles. 
# Migrations are kinda like diagrams to the data structures you make with the models. Read the models section to see how to use models, but 
# models are were you define what your data is. In the project settings file there is a local sqlite3 database preconfigured with your django
# project. This is where your migrations are migrating to at the moment. If you see the db.sqlite3 file there in your projects root folder
# that is your preconfigured database already set up for you

# After py manage.py showmigrations shows the migrations. The ones with the x were migrated and the ones without the x weren't

# Whenever you update the model classes or create new class. You can run py manage.py makemigrations and It'll make a new migration
# that has the updates from the model file. Then if you migrate the new migrations It'll send the new migrations to the database and write the
# updates to the database there

# Lets start the django projects server with py manage.py runserver. If you are making the django app for a react native project you need to add  
# your computers IP address to the end of the command. React native won't run with a local server and need your computers IP address instead.  
# The computer IP address of yours is in wifi settings. Mine is 192.168.10.44, but it needs :8000 at the end of the IP address. Which might look
# like py manage.py runserver 192.168.10.44:8000. After this the server will be running on http://192.168.10.44:8000/ if your using the IP address
# or else if your using plain local host to host the server it'll be at http://127.0.0.1:8000/

# The server won't work yet. If you go to the server with the browser you can see it'll through an error that says you need to add your server to 
# to the allowed hosts section in the projects settings. In the allowed hosts section of settings add the IP address if your running the server with
# the IP address '192.168.10.44' or '127.0.0.1' if your using the plain local host method still. Make sure to not add :8000 at the end of it. The 
# server should work perfect now

# We would be able to edit django's admin page but first we need to create a super user and to do that we need to install django first. Before we
# can install any dependencies we first need to set up virtual envirement. Because all your dependencies are stored in the virtual envirement. I'll
# show you how to set up dependencies before we do anything else then. But the admin page is were you delete and create any data in your backend 
# like a gui except it's not a gui. A gui is an app that's a database manager. Like were you create and delete data or even tables

# Make your virtual envirenment with virtualenv env. That makes a new folder in your root directory that is called env but you can call it anything  
# else as well. This is either where all the dependencies are stored or else it has the PATHs to were the dependencies are located in your computer
# idk yet

# We'll need to first activate the virtual environment in order to install a dependency with .\env\scripts\activate. If you didn't name the virtual 
# environment env then replace env in that command with the name of your envirenment

# If you ran the command you'll see the name of the environment, env, at the bigining of your terminals command line. To deactivate the environment
# run deactivate and the env name at the beginning of the command line will disapear and it'll deactivated your envirenment. You don't need the  
# environment to be always activated but only if your downloading any dependencies so they'll know where to be stored

# Now with the virtual environment activated lets install django so we can create a super user with pip install django

# The rest_framework side of django, literally eveything we need for the backend, isn't going to work endless we install it.
# Install it with this pip install djangorestframework. With djangorestframework installed you'll need to now add 'rest_framework' to installed
# apps in order for it to work inside settings 

# To see any of your dependencies you'll need to run pip freeze. This will list all the dependencies in the environment. But if you run pip freeze
# but your environment isn't activated it will list all the python dependencies ever installed on the computer instead and not the ones in the your
# virtual environment

# It's common for django projects to have a requirements.txt file at the root of there project. This is a file that has a list of all the
# dependencies in your project and there versions. To create this file run pip freeze > requirements.txt. This will get all the dependencies in 
# your virtual env and put them in a list in this file with there versions so that aws or other parties can get a list of the dependencies needed.
# Or you can run one command that will download everything in this file so to say if you barely pulled the project from github and you obviously
# don't want to download each dependency individually you can run the command bellow

# This, pip install -r requirements.txt, will install every requirement in the file requirements.txt and if you ever install a new dependency 
# you'll need to rerun the pip freeze > requirements.txt command for the new dependencies to be placed in the requirements list

# We can create a super user now. This will create a normal user that can access your project and a super user that can access the admin side of 
# things. Users were preconfigured when you ran the preconfigured migrations. So you can create one super user and it has access to everything 
# even the actual project. Create a super user with py manage.py createsuperuser. This will ask you for a unique user name, an email, and a password.
# Just click enter when prompted for your email because the email is not needed endless your going to use emails in your project which is doubtfull.
# Once finished you should now be able to have full access to the admin page that is created by django automatically

# If you go to your local host /admin/ example http://127.0.0.1:8000/admin/, use your IP address if your using react native, you'll see the admin
# page there where you'll need to login with your super user you created. Here you can delete, edit, or create the data in the project. First thing
# you'll see there in the admin site is the groups and users that were created when we ran their preconfigured migrations

# Your project we made should now be fully preconfigured to create and do anything you might of ever even considered doing with a backend. If you 
# read everything else there that I wrote for the django notes It'll show you everything you need to create or do anything in the backend. You 
# should now be able to create anything in this backend that you've ever considered you could even do with a backend before.