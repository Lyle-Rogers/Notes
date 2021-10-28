# The view file is were every function in the backend is. It's where you fetch, edit, and delete everything in the backend
 
# We use view sets to create the functions that deletes edits and anything else ever done in the backend. There's six types
# of view sets in django and we'll start with the first basic one of them all.

# All view sets do the same thing, creates, edits, and deletes data, but this first type of view set api_view is the bigest 
# type and requirs more code and is basiker then the rest of the view sets.
from django.views.decorators.csrf import csrf_exempt # Django is used for both frontend and backend but we are only using the backend. Django automatically doesn't let outside programs, like our react front end, connect to its backend with cross site restriction forgery, or csrf. With csrf_exempt placed at the beginning of the view django doesn't block outside sites, like the front end, from accessing that specific view set. Django only automatically ads csrf to this type of view set bellow. The rest of the view sets have csrf_exempt added automatically.
from rest_framework.decorators import api_view # This is a type of view set.
from rest_framework.response import Response # Response is the thing that sends data to the frontend from a view set.
from rest_framework import status # status is the status of the response sent back with the response to the frontend that says if the frontends request was successful or if it was unsuccessful.
from .models import Article # This imports the article model from the models.
from .serializers import ArticleSerializer # Imports the article serializer from the serializers file.

@csrf_exempt # Saying that this api_view bellow is no longer protected with djangos cross site restriction forgery like it says above there.
@api_view(['GET', 'POST']) # This api_view part is defining that the python function under this is an api_view type of view set. The get and post part of this is allowing the python function under this to receive post and get requests from the frontend.
def article_list(request): # Now that this is an api_view view set, request is automatically defined as the request from the font end whenever the view set is called.

  if request.method == 'GET': # If it's a get request.
    articles = Article.objects.all() # This is retrieving every article in the articles model.
    serializer = ArticleSerializer(articles, many=True) # This is serializing the articles with the articles serializer.
    return Response(serializer.data) # Returning the serialized articles to the frontend.

  elif request.method == 'POST': # Else if the frontends request is a post request do this.
    serializer = ArticleSerializer(data=request.data) # Requests data is serialized.
    if serializer.is_valid(): # Only do this if the data is the request is valid and isn't something django doesn't understand which is very rare.
      serializer.save() # Creates the article with the data given and sends it to the database.
      return Response(serializer.data, status=status.HTTP_201_CREATED) # Returns the articles data with the responses status back to the frontend. This is what's returned in an axios calls response in react.
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Returns the errors for why the serializer wasn't valid and the responses status of failed.
    

@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, pk): # Primary key sent with the request from the frontend.
  try:
    article = Article.objects.get(pk=pk) # Gets the article with the same primary key from the article model.
  except Article.DoesNotExist: # If the article doesn't exist it basically means.
    return Response(status=status.HTTP_404_NOT_FOUND) # If the article doesn't exist it returns the responses status of failed.

  if request.method == 'GET':
    serializer = ArticleSerializer(article)
    return Response(serializer.data)

  elif request.method == 'PUT':
    serializer = ArticleSerializer(article, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
  elif request.method == 'DELETE':
    article.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)











