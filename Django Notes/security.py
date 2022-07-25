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


