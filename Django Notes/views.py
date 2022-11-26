# The view file is were every function in the backend is. It's where you fetch, edit, and delete everything in the backend

# We use view sets to create the functions that deletes edits and anything else ever done in the backend. There's six types
# of view sets in django and we'll start with the first basic one of them all.

# All view sets do the same thing, creates, edits, gets, gets all, and deletes data, but this first type of view set api_view is the bigest
# type and requirs more code and is basiker then the rest of the view sets.
from django.views.decorators.csrf import (
    csrf_exempt,
)  # Django is used for both frontend and backend but we are only using the backend. Django automatically doesn't let outside programs, like our react front end, connect to its backend with cross site restriction forgery, or csrf. With csrf_exempt placed at the beginning of the view django doesn't block outside sites, like the front end, from accessing that specific view set. Django only automatically ads csrf to this type of view set bellow. The rest of the view sets have csrf_exempt added automatically.
from rest_framework.decorators import api_view  # This is a type of view set.
from rest_framework.response import (
    Response,
)  # Response is the thing that sends data to the frontend from a view set.
from rest_framework import (
    status,
)  # status is the status of the response sent back with the response to the frontend that says if the frontends request was successful or if it was unsuccessful.

from .models import Article  # This imports the article model from the models.

from .serializers import (
    ArticleSerializer,
)  # Imports the article serializer from the serializers file.


@csrf_exempt  # Saying that this api_view bellow is no longer protected with djangos cross site restriction forgery like it says above there.
@api_view(
    ["GET", "POST"]
)  # This api_view part is defining that the python function under this is an api_view type of view set. The get and post part of this is allowing the python function under this to receive post and get requests from the frontend.
def article_list(
    request,
):  # Now that this is an api_view view set, request is automatically defined as the request from the front end whenever the view set is called.

    if request.method == "GET":  # If it's a get request.
        articles = (
            Article.objects.all()
        )  # This is retrieving every article in the articles model.
        serializer = ArticleSerializer(
            articles, many=True
        )  # This is serializing the articles with the articles serializer. Serializers are what django uses to convert database language like json to djangos platform that can use the same backend tools, that does anything with data, for all database languages like for example sql or SQLite. Many true means there can be many.
        return Response(
            serializer.data
        )  # Returning the serialized articles to the frontend.

    elif (
        request.method == "POST"
    ):  # Else if the frontends request is a post request do this.
        serializer = ArticleSerializer(
            data=request.data
        )  # Requests data is serialized.
        if (
            serializer.is_valid()
        ):  # Only do this if the data is the request is valid and isn't something django doesn't understand which is very rare.
            serializer.save()  # Creates the article with the data given and sends it to the database.
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )  # Returns the articles data with the responses status back to the frontend. This is what's returned in an axios calls response in react.
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )  # Returns the errors for why the serializer wasn't valid and the responses status of failed.


@csrf_exempt
@api_view(["GET", "PUT", "DELETE"])
def article_details(
    request, pk
):  # The request is where the data that is sent from the frontend is stored. The pk (id or primary_key) is sent to this view set from the url that calls the view set. The front end passes the pk to the url when it's called from with an axios call.
    try:
        article = Article.objects.get(
            pk=pk
        )  # Gets the article with the same primary key from the article model.
    except Article.DoesNotExist:  # If the article doesn't exist it basically means.
        return Response(
            status=status.HTTP_404_NOT_FOUND
        )  # If the article doesn't exist it returns the responses status of failed.

    if (
        request.method == "GET"
    ):  # If reacts axios request is a get request do that bellow.
        serializer = ArticleSerializer(
            article
        )  # Makes the article serializer with the article that was defined in the try function above.
        return Response(
            serializer.data
        )  # Returns the article with the primary key the frontend requested in the response.

    elif (
        request.method == "PUT"
    ):  # Put basically means edit. This happens if the frontend is requesting to edit a article.
        serializer = ArticleSerializer(
            article, data=request.data
        )  # This retrieves a serialized article or articleSerializer with the first argument and edits the serialized article in the second argument with the data sent with request.
        if (
            serializer.is_valid()
        ):  # If the newly edited articles data is valid then do that there.
            serializer.save()  # Saves the newly edited article.
            return Response(
                serializer.data
            )  # Response with the serializers data sent to the frontend.
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )  # Returns a response with the errors to why it failed and a status of failed.

    elif request.method == "DELETE":  # If this is a delete request.
        article.delete()  # Deletes the article defined in the try section there above.
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )  # There's no need to send an error with the response because if the article failed to get deleted then it was already deleted before.


# This first view set is finished. You can now edit, delete, get, create and get all articles with this view set here.


# This APIView view set is the same thing as the first view set but requirs less code and is simpler. And also csrf_exempt is predefined in this view set and all the other view sets that we haven't seen here yet.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView

from .models import Article

from .serializers import ArticleSerializer


class ArticleList(
    APIView
):  # APIView argument is what's making this ArticleList class an api view.
    def get(
        self, request
    ):  # Request isn't being called in this function but it is still needed and with out it it won't work. The self argument is like 'this' in react. It can be set to anything and called everywhere else in this class. Sense the name of this function is get this api view knows what this function is and preconfigured it to work with the get request from the frontend.
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleDetails(APIView):
    def get_object(
        self, id
    ):  # This function is so that we don't have to rewrite the code in all the functions there.
        try:
            return Article.objects.get(id=id)
        except Article.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        article = self.get_object(
            id
        )  # Self can be called to access anything within this class or even given variables like self.theKid = 'the kids name here' self.theKid is a variable that can be called everywhere else in this class.
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = ArticleSerializer(
            article, data=request.data
        )  # The arguments that are passed to the serializer is what the serializer uses to see if it's geting, editing, or creating the data passed to it.
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, id):
        article = self.get_object(id)
        article.delete()  # The delete and save functions used here in the class are predefined by the api view class so that we don't have to write a lot necesary code ourselves.
        return Response(status=status.HTTP_204_NO_CONTENT)


# These mixins api view sets are for having full optimization with as little code as possible. Basically in general all list of objects that write code for in the backend deletes, gets, gets all, edits, or posts. These mixin api view sets do all that for you with almost no code but still gives you the ability to add or delete any type of functionality you need. Like if you needed to do everything else here except delete than it's best to leave out the delete function there.
from rest_framework import generics
from rest_framework import mixins

from .models import Article

from .serializers import ArticleSerializer


class ArticleList(
    generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin
):  # The type of view sets here are generics.GenericAPIView sets here. And the mixins is a list of generic api view sets predefined functions.
    queryset = Article.objects.all()  # What data this queryset is.
    serializer_class = ArticleSerializer  # The serializers used here.

    def get(
        self, request
    ):  # What's nice about mixins is that you can still write any functionality like checking if the request has a specific type of data like string or name in it you don't like, or you can even edit the data first before the mixins to the hard part for you, basically.
        return self.list(
            request
        )  # List is the predefined function from the mixins.ListModelMixin. It returns the requested list of data just like the list get requests in the other view sets above do but already serialized and everything without haveting to write the specific code that does the serializing.

    def post(self, request):
        return self.create(
            request
        )  # The create mixin creates your data with the serializer defined and does everything just like any other create function from the view sets do except with no code.


class ArticleDetails(
    generics.GenericAPIView,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    lookup_field = "id"  # Look up field is the field used to look up a specific object from a queryset. In this case it's geting the id that's passed from the url calling this function. Look up field is needed and not automatic because if you wished to change the id variable to pk or anything then you'll need to set it to that in the lookup_field.

    def get(self, request, id):
        return self.retrieve(
            request, id=id
        )  # I cant understand why request is there or if it's even needed because it seems useless at the moment.

    def put(
        self, request, id
    ):  # Here request is needed because it's the new data were updating the old data with.
        return self.update(request, id=id)

    def delete(
        self, request, id
    ):  # It even seems useless to use it here because there's no extra data that we would pass here to request.
        return self.destroy(request, id=id)


# The view set here is more of for organization instead of trying to use less code. This view set is set up to with only one url and the others have multiple. So all it really does is use less code in the urls. The id past to this view set from the urls isn't even defined in the urls and is automatically past.
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.shortcuts import (
    get_object_or_404,
)  # The function here gets the object requested from the frontend or returns a 404 status with the response.

from .models import Article

from .serializers import ArticleSerializer


class ArticleViewSet(
    viewsets.ViewSet
):  # This type of view set is set up to have only one class and there is only one url with it as well.
    def list(
        self, request
    ):  # Request is needed even though it's not going to be used in this specific function.
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(
        self, request, pk=None
    ):  # Primary key or pk is set to none because it's not being sent here through the url set up with this function but instead it is automatically set up to work with this type of view set along with the type of url required for this view set. I'm not entirely sure about this but pk is set to none to tell the view set that it's using the right type of url there that has the pk set up to automatically work with it. Visit the url notes here to see more about this type of url.
        queryset = Article.objects.all()
        article = get_object_or_404(
            queryset, pk=pk
        )  # This function gets the required article with the pk from the queryset or returns a 404 response.
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def update(self, request, pk=None):
        article = Article.objects.get(pk=pk)

        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        article = Article.objects.get(pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# This view set makes things easier and simpler I think but endless you like using less urls there is really no reason to use this type of view set I'm pretty sure.


# The view set here is awesome because it mixes the mixins with the viewsets view set. This is so that it needs only 1 url just like the other view sets we descussed above that need only 1 url and they can use the exact same url. Then you can pass the queryset this view set is for and that querysets serializer with the exact mixins you'll use to edit the queryset, leave a mixin out of the view set to not use the functionality of that mixin, and everything just works great.
from rest_framework import mixins
from rest_framework import viewsets

from .models import Article

from .serializers import ArticleSerializer


class ArticleViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# Everything in here literally just works now and there's no more code here needed.


# This view set is perfect for use and recommended whenever it's possible because it can't be used if there's extra functionality that's not supported by it. It's the same as the other mixins view set on top and only has 1 url just like that 1 above. The only difference with it is there wasn't any mixins added to it because the mixins are setup with this view set automatically. If there's functionality in this view set you wish wasn't there than use the view set above and don't add the mixin with the functionality that u didn't want.
from rest_framework import viewsets

from .models import Article

from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
