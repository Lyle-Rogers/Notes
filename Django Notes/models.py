# Here is where we define our data. Right now we are going to create a article models class and give it a title and description. We can then
# create any articles we want, delete them, edit them etc... We'll inevitably need to add an article serializer so that django can convert the
# data in the database to a django format. Serializers let us extremely easily connect all the data together. Basically a user may have many
# apples and an apple may have only one user. That's weird but we use serializers to define data logic that connects data just like that.

# This is a basic model class defining what an article is and what data it has.
from django.db import models


class Article(
    models.Model
):  # The argument in this class defines that this class is a model class making us able to add model class data properties to this class.
    title = models.CharField(
        max_length=100
    )  # This gives the article a title that has a max length of 100 letters. The CharField is basically a string wit a 100 character limit. It's meant for names titles and other things that are in 1 line.
    description = (
        models.TextField()
    )  # TextField property gives the description the basic format of a textarea in reacts front end. So if you want a form or sheet like looking data.


# If we migrate this to the database using py manage.py makemigrations and py manage.py migrate we can create edit and delete any articles with
# a title and description we want. py manage.py makemigrations creates a new migration with any updates to the model file and then py manage.py
# migrate sends the new migration with its updates to the database. If you'd wish to add a new field to the articles after, like an expiration
# date so your articles will be automatically deleted after the expiration date runs out, add the expiration date field, like expiration_date
# = models.DateTimeField(), and create a new migration and then migrate it to the database and you'll have an expiration date field on all the
# articles. All the model classes are preconfigured with a unique id that's automatically added to each article when they're created. The id to
# the article is an identifier for that article. Whenever an article is called by the frontend to be edited or deleted it's identified by its id.

# Here is a list of every field I know of to use with a model class.
from django.contrib.auth.models import (
    User,
)  # Users are already preconfigured with django so we're importing the user to connect them with other objects like bellow.

Vehicle = "This is supposed to be the Vehicle model class but I'm just adding it so that pythons error handling will stop saying that the Vehicle model class isn't here."
ProfileImageStorage = (
    "This is so python will not say that ProfileImageStorage doesn't exist bellow."
)


class Article(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE
    )  # The ForeignKey field is for connecting this article model class with another model class like the user model class in this case here. It's letting you know which user owns or created the article. And the on_delete=models.CASCADE here will delete the article whenever the user is destroyed. If you do not specify an on_delete property then the default value is cascade as in it'll be automatically deleted if on_delete isn't defined. This is about the on_delete function I found online: Django provides 6 on_delete options: CASCADE, PROTECT, SET_NULL, SET_DEFAULT, SET(), and DO_NOTHING. At delete, the Django collector crawls the relationships and buckets each object found into different lists depending on the on_delete configuration for that specific relationship. CASCADE puts the object in a bucket to be deleted, PROTECT will cause an exception to be thrown, SET_NULL, SET_DEFAULT, and SET() each cause and update to that instance, and DO_NOTHING is a no-op.
    created = models.DateTimeField(
        auto_now_add=True
    )  # This DateTimeField field is for a date and time like when it was created with this case here. This auto_now_add=True field does exactly what it says which is automatically adds the current date and time to this article whenever it is created.
    everyOneCaresEvent = (
        models.DateField()
    )  # Same as DateTimeField except only for the date and not the time.
    token = models.TextField(
        unique=True
    )  # A TextField is for adding text in a format similar to reacts textarea property. And in this case the TextField here has to be unique to all other article token TextFields. I know django is extremely powerful and awesome you don't have to tell me to much.
    middle_name = models.CharField(
        max_length=100, null=True, blank=True
    )  # The CharField field is the same as the TextField field but instead is meant small things like titles. You'd use TextField for big things like articles or descriptions or anything else big.
    leader = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True, related_name="leader"
    )  # I'm using ForeignKey again here to for another example about it. on_delete=models.SET_NULL this sets the article to null if this leader is deleted. null=True allows this leader field to be null and blank=True lets this field be blank or at least an empty string in this case. The related_name="leader" is important. How you access the articles leader from this article is like this in a view leader = Article.leader. leader is now that articles leader. If I wanted to call leader.id or even leader.email that would all work. If I wanted to change related_name="leader" to related_name="theBestLeader" I would use leader = Article.theBestLeader and that works the same.
    members = models.ManyToManyField(
        User, related_name="members", null=True, blank=True
    )  # This ManyToManyField is like the ForeignKey field except it allows this article model class here to connect with many user model classes. It's practically saying a sandwich can have a lot of sauces and a sauce like mustered can belong to many sandwiches. To access all the members that belong to this article here in the view file you would inevitably use articlesMembers = Article.members.all(). articleMembers is now a list of all the members that are connected to this article. If you had a group model class you'd do the same thing to connect the members to that group.
    file = models.FileField(
        storage=ProfileImageStorage()
    )  # The FileField field is for images which is pretty complicated. The storage property is where the image will be stored. Because unlike everything else images can't be stored in the database directly but somewhere else instead meant for only images.
    vehicle = models.OneToOneField(
        Vehicle, on_delete=models.CASCADE, primary_key=True
    )  # This allows this article model class to have only one vehicle model class and that vehicle to have only one article. Kinda like a car can only have 1 engine. This primary_key = True property sets this vehicle property of this article as the primary key. So now it won't generate its own id and uses this field instead.
    another_birthday = (
        models.PositiveIntegerField()
    )  # A positive integer field that is only allowed to go up to 2147483647 and starts at only 0 not bellow.
    birth_day = (
        models.PositiveSmallIntegerField()
    )  # A positive integer field that is only allowed to go up to 32767.
    is_not_expired_yet = models.BooleanField(
        default=False
    )  # BooleanField is for False or True and is set false by default here.
    profile_image = models.URLField(
        blank=True, null=True
    )  # This is the same as CharField but is meant for urls and is validated by URLValidator to see if it's a url. And this is used for a profile image because images have urls to show the location in the image storage.
    their_email = models.EmailField()  # A CharField with an email validator.
    the_article_price = models.DecimalField(
        max_digits=9, decimal_places=2, default=0
    )  # This is an integer field with a decimal validator to make sure the number is a decimal, with a max length of 9 numbers a decimal place of 2 and defaulted to 0 apparently.
    expiration_date = (
        models.IntegerField()
    )  # This is an integer field with an integer validator. An integer is a number if your still new here.
    earths_location_in_space = models.FloatField(
        max_digits=19, decimal_places=7, blank=True, null=True
    )  # Integer field capable of using decimals like 7.99 

# I'm pretty sure that's every model class field in django and everything else you can do with it as well. If you understand this you just might be an upcoming django master.


# The __str__ function at the bottom is telling django's admin page to show the articles title instead of its id in the articles list at the admin
# page. The admin page gives a list of all the article objects and each article is represented by its id but do this bellow to display their titles
# instead of id.
class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):  # This is the __str__ function that was mentioned.
        return self.title


# You can make tons of functions in the models but I honestly don't understand any of them at all except this one here.
