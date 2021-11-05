# Urls are what you access each view function with from the front end. It's the url you pass to the axios call in react to access the backends data. If you'r accessing the backend with a delete request to request to delete an article from the backend then reacts code would look something like this. axios.delete('thebackend.com/articles/1) with this axios call you would delete the article with the id of 1. 

# To start make a urls.py file in your projects app. In every app you make it's better to give them all there own urls.py files and then connect the to the main urls.py file in the projects main folder.
from django.urls import path, include # Importing these url tools.
from .views import ArticleList, ArticleDetails # This imports the views we're connecting with the urls.

urlpatterns = [ # The url container where all the urls to this particular app are stored. We'll then import the urls here to the projects urls.py file in the main directory that was already created when we made this project.
    path('articles/', ArticleList.as_view()), # This is a url that connects to the ArticleList view. This view is set up to receive two request from the front end. A get and post request. The get request in this view will requests for all the articles in this backend. The post request sends an object list that's named request with all the data to an article that's being created by an axios call in the front end.
    path('articles/<int:id>/', ArticleDetails.as_view()) # The int:id is an integer variable that's named id and it is passed from the front ends axios call to get, edit, or delete an article with the same id depending on which request is sent from the frontend to the backends ArticleDetails view. The front ends delete request would look like this in its axios call. axios.delete("http://the-backend/api/articles/69") this'll delete an article with the id of 69 in the ArticleDetails view set.
]


# This type of url is automated and is only meant for viewsets.ViewSet views and mixin views. It doesn't require an id because it mixes both the detail and list views together for 1 url. These urls have the edit, delete, get, post, and get all requests automated just like their view types.
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet

router = DefaultRouter() # This default router is what's automating the urls. It keeps everything default and keeps all the urls in a pack.
router.register('articles', ArticleViewSet) # This is registering this url to the default routers list of urls. And sense this url is a default url it knows that it belongs to either a mixin or viewsets.ViewSet view and it doesn't require an id.

urlpatterns = [
    path('', include(router.urls)), # It's including the list of default router urls to the list of urls.
]


# Here django is explaining the difference of function based views and class based views urls.
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')

# Name='home' in the explanation class and function based views urls above is what you would contact the url with from the views. I typically had never had to do it and I doubt you will need to enless your using the front end side of django because this is how you would contact the url from djangos html. You could trigger a url without using its name but you'l use the backends full url and not just its name and it is highly not recommended by the django docs.  


# This is the main urls.py file in the main directory of the django project. This is how you connect the urls.py files from the projects apps and set up the admin urls for the projects admin site.
from django.contrib import admin # This is to import the admin urls that are automatically set up for you and we don't have to do a thing to it.
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # Visit the admin site by going to http://thebackendsurl/admin/ but first create a super user in order to access it.
    path('api/', include('the_app.urls')), # This is include all the urls from the app that's called the_app and putting /api/ before each url so that calling a url looks like http://the_back-end/api/aritcles/19/.
]