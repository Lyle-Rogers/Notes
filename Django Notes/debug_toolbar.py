# django-debug-toolbar:
# A django debugger tool for monitoring local query statuses
# https://www.youtube.com/watch?v=qWLk9S6mvAY

# pip install django-debug-toolbar

INSTALLED_APPS = [
  'debug_toolbar',
]

MIDDLEWARE = [
  'debug_toolbar.middleware.DebugToolbarMiddleware',
]

TEMPLATES = [
    {
      ...
      'APP_DIRS': True,
      ...
    },
]

INTERNAL_IPS = [
  "192.168.10.44",
]

# In urls.py
from django.conf import settings
from django.urls import include

urlpatterns = []

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += path('__debug__/', include('debug_toolbar.urls')),

# If your looking for a debugger guid to db optimization read this: 
# https://docs.djangoproject.com/en/4.1/topics/db/optimization/#do-database-work-in-the-database-rather-than-in-python