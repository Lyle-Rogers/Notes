# The permissions documentation: 
# https://www.django-rest-framework.org/api-guide/permissions/

from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS, IsAuthenticatedOrReadOnly

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

class IsObjectOwner(IsAuthenticated):
  def has_object_permission(self, request, view, obj):
    return obj.user == request.user

# Giving a view a permission class. Warning, has_object_permission or IsAuthenticated will need
# to be called before a has_object_permission check:
class UserStatsView(APIView):
  permission_classes = [IsObjectOwner]

  def retrieveUserStats(self, user_id):
    try:
      return UserStats.objects.get(user = user_id)
    except UserStats.DoesNotExist:
      return Response(status = status.HTTP_404_NOT_FOUND)

  def get(self, request, user_id):
    userStats = self.retrieveUserStats(user_id)
    serializer = UserStatsSerializer(userStats)
    
    return Response(serializer.data)

  def put(self, request, user_id):
    userStats = self.retrieveUserStats(user_id)
    serializer = UserStatsSerializer(userStats, data = request.data, partial = True)
    serializer.is_valid(raise_exception = True)
    serializer.save()

    return Response() 








# Throttling allows a user to only send a specific amount of requests. This is for registering and 
# similar things. It makes it so that a user can't just write a script that can create users and then 
# create thousands of users a second. Throttling is already installed for django.
# https://www.django-rest-framework.org/api-guide/throttling/

# Set this in settings to allow authenticated users to send 1000 request per day and anonymous users
# to send 100 requests per day:
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/day',
        'user': '1000/day'
    }
}

# Make a new file named throttling.ty. Anon throttles can still be bypassed by adding a users auth token 
# to the requests header. So create a user throttle for any views relying on anon throttling. Anon throttles 
# are detect a specific user by their IP address and another thingy
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle 

class RegisterUserThrottle(UserRateThrottle):
  rate = '11/hour'

class RegisterAnonThrottle(AnonRateThrottle):
  rate = '11/hour'

# That rate field can receive second, minute, hour or day.

# This how to assign a costume throttle to a view in views.py.
from rest_framework.views import APIView
from .throttling import *

class RegisterView(APIView):
  throttle_classes = [RegisterUserThrottle, RegisterAnonThrottle]

  def post(self, request):