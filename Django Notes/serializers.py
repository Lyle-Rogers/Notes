# A serializer serializes data given from the database to a django format that can then be read by the react frontend. If you don't serialize your
# data it will stay in the backends database language you are using like postgreSQL, SQLite, or SQL and way more. The front end won't be able to 
# read it if it's in a database language. But the common database language readable by all frontends is JSON which is the language django converts
# your data. This allows django to use all database languages that you can set up your database with and still use the same code across them all.

# Any new django project will not come with a serializer file preconfigured. You need to create the serializer file yourself in your app directory
# and name it serializers.py. We can create a serializer for each model now and serialize your data here in it.

# This serializer is the original more tedious way to write a serializer because it involves a lot of code that we don't need to write using 
# a better serializer. 
from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.Serializer): # Every model has a serializer and a serializer is normally named after it's associate model with serializer added to the end of it like this serializer. A serializers.Serializer serializer is the original serializer so you'll need to write everything in it manually. So the model serializer bellow is by far recommended instead.
  title = serializers.CharField(max_length=100) # Sense a serializer validates a model the serializer needs to know what data it's receiving from the model to validate. Here it is a CharField named title with the max length of 100 characters. If the data being received fails to meet the requirements here it is declined and an error is sent back to the views instead of its serialized data.
  description = serializers.CharField(max_length=900) # Same as the title and whatever.

  def create(self, validated_data): # When you create an article with its serializer this function is run.
    return Article.objects.create(validated_data) # Creates an article with the validated data validated by the serializer.

  def update(self, instance, validated_data): # This is what happens when you update an article.
    instance.title = validated_data.get('title', instance.title) # Self is like this in react and it's need even though it's not being used here. Instance is the article and its older data. Like instance.title is the articles title that is being replaced by the newer title data. The validated_data here is the new validated data that's being used to update the older model classes instance. I don't know why that instance.title is passed as an argument to the get call here. I think it might be there to say use the older instance.title if validated_data.title isn't passed because it failed its validation. 
    instance.description = validated_data.get('description', instance.description) # It's the same thing as title.


# This is a model serializer and sense its a model serializer it's preconfigured to be set up for a model class. It's the same as on top but it doesn't require even half the amount of code as the original serializers because it's preconfigured. 
from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
  class Meta: # Meta basically means static data. Metadata is static data that describes an object kinda like an object description.
    model = Article # This is the serializers model.
    fields = ('id', 'title', 'description') # These are the fields the serializer is serializing from this model.
# fields = ('__all__') is the normal way to do this. It will set the fields to the serializer to all the fields in the model class.


# The variables right here shouldn't actually be here I did it so that it will stop giving me an import error because it's saying these don't exist.
VehicleListingSerializer = ''
ListingSerializer = ''
ListingImageSerializer = ''
ClassifiedFavorite = ''

class ClassifiedFavoriteSerializer(serializers.ModelSerializer):
  vehicle_listing = VehicleListingSerializer() # This VehicleListingSerializer is another serializer thats being connected to this one so we can access the VehicleListingSerializer serializer without hafting to import the VehicleListingSerializer. In this serializers model the VehicleListing model is connected by a foreign key field. Basically all the classified favorites have a vehicle listing model class that belongs to it that's connected by a foreign key. This adds the each vehicle listing owened by a classified favorite to the classified favortie so that we can access it through the classified favorite. This is so that instead of accessing the vehicle listing the classified favorite owns by importing the classified favorite as another object we can access the vehicle listing through the classified favorite like if they were the same object an not separate.  
  listing = ListingSerializer() # Another separate serializer that's connected to this serializer by a foreign key.
  photos = ListingImageSerializer(read_only=True, many=True) # This connects a lot of serializers to this serializer. If this serializer had many photo serializers owned by it you would rather get the photos to this serializer through this serializer instead of geting the photos to this serializer as if they are separate objects. In the frontend it lets us access every photo to this serializer by using classifiedFavorite.photos and now we will have access to all this serializers photos instead of calling them all seperately as separate objects we can call them as one object instead in the front end. 
  
  class Meta:
      model = ClassifiedFavorite
      fields = "__all__"







