# The admin.py file is where you add your models that you want to be accessed by the admins to the admin site and configure them for the 
# admin site so that you can edit or delete the objects created by the models that are added.
from django.contrib import admin # This is all the admin tools that are needed here.
from .models import Article # Importing the models that we'll configure for the admin site.

admin.site.register(Article) # Everything we need to add a model to the admin site so that we can create, edit, or delete any data that's made with this model class.


# This will add this model to the admin site just the same except it'll give us configuration for this model in the admin site.
from django.contrib import admin
from .models import Article

@admin.register(Article) # Registers the article model and gives us the option to create the admin model class underneath to configure the model for the admin site.
class ArticleModel(admin.ModelAdmin): # I don't know if this admin model class is connected to the article model because it is under where the model was registered or if it's because the names are the same except the admin class has Model at the end of its name.
  list_filter = ('title', 'description') # Articles in the admin site are listed in a list to be edited or deleted. If a field of the article model is added to this list_filter list then you can filter the article list by the fields given. Basically you can look up an article by the title of the article if you add the article models title field to this list_filter list here.   
  list_display = ('title', 'description') # At the admins articles section of the site it gives a list of every article and names them by their id. Adding an articles field to this list display, like title, names each article by the fields that are given and not their id.