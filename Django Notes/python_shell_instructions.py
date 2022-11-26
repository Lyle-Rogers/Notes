# Django's python shell allows you to delete edit and teqnically anything else you can think of with the backend.
# py manage.py shell: Is the terminal command that with open the python shell. At the bottom is a pretty big list of
# things you can do with it that I did in a django shell tutorial. Within the django project we were working with to
# create the things there bellow, we created an Article serializer with the an Article model. Every Article object has
# description, title, and id there as peramiters.

# >>> from api.models import Article
# >>> from api.serializers import ArticleSerializer
# >>> from rest_framework.renderers import JSONRenderer
# >>> from rest_framework.parsers import JSONParser
# >>> a = Article(title = "a title for this thing here", description = "the fucking description")
# >>> a.save()
# >>> serializer = ArticleSerializer(a)
# >>> serializer.data
# {'title': 'a title for this thing here', 'description': 'the fucking description'}
# >>> json = JSONRenderer().render(serializer.data)
# >>> json
# b'{"title":"a title for this thing here","description":"the fucking description"}'
# >>> import io
# >>> stream = io.BytesIO(json)
# >>> data = JSONParser().parse(stream)
# >>> serializer = ArticleSerializer(data=data)
# >>> serializer.is_valid()
# True
# >>> serializer.validated_data
# OrderedDict([('title', 'a title for this thing here'), ('description', 'the fucking description')])

# New terminal here
# >>> from api.serializers import ArticleSerializer
# >>> serializer = ArticleSerializer()
# >>> print(repr(serializer))
# ArticleSerializer():
#     id = IntegerField(label='ID', read_only=True)
#     title = CharField(max_length=100)
#     description = CharField(style={'base_template': 'textarea.html'})
