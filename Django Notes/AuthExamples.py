# in settings
REST_FRAMEWORK = {
  'DEFAULT_AUTHENTICATION_CLASSES': [
    'rest_framework.authentication.TokenAuthentication',
  ],
  'DEFAULT_PERMISSION_CLASSES': [
    'rest_framework.permissions.IsAuthenticated',
  ]
}

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend"
)

AUTH_USER_MODEL = 'api.User'


# in urls
from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
  path('login/', obtain_auth_token, name='api_token_auth'),
]


# models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  user_name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)
  password = models.CharField(max_length=255)
  username = None

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []


# in views
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

@permission_classes([AllowAny])
class RegisterView(APIView):
  def post(self, request):
    email = request.data['email']

    try:
      email = User.objects.get(email = email)
      return Response('Email is already registered')
    except:
      try:
        validate_email(email)
      except:
        return Response('Invalid email')
        
    try:
      registerSerializer = RegisterSerializer(data = request.data)
      registerSerializer.is_valid(raise_exception = True)
      registerSerializer.save()
    except Exception as e:
      print(e)

    userStatsSerializer = UserStatsSerializer(data = {
      'user': registerSerializer.id, 
      'acceptedTerms': True
    })

    print('it is printed', userStatsSerializer.id)

    userStatsSerializer.is_valid(raise_exception = True)
    userStatsSerializer.save()

    return Response('Registered')

@api_view(["POST",])
@permission_classes([AllowAny])
def SignUpView(request):
    if request.method == "POST":
        serializer = SignUpSerializer(data=request.data['user'])
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            profile = request.data['profile']
            user.profile.middle_name = profile['middle_name']
            user.profile.phone_number = profile['phone_number']
            user.save()
            token = Token.objects.get(user=user)
            user = UserSerializer(user)
            data['response'] = "successfully registered a new user."
            data['signedIn'] = True
            data['token'] = token.key
            data['user'] = user.data
        else:
            data['errors'] = serializer.errors
            data['signedIn'] = False
        return Response(data)

# Serializers
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'user_name', 'password', 'email']
    write_only_fields = ('password')
    # extra_kwargs = {
    #   'password': {'write_only': True}
    # }

  def create(self, validated_data):
    password = validated_data.pop('password', None)
    instance = self.Meta.model(**validated_data)
    if password is not None:
      instance.set_password(password)
    instance.save()
    return instance

class CreateUserSerializer(serializers.ModelSerializer):
  username = serializers.CharField(max_length=255)
  # password = serializers.CharField(write_only=True, style={'input_type': 'password'})
  email = serializers.CharField(max_length=255, unique=True)
  password = serializers.CharField(max_length=255, write_only=True)

  class Meta:
    model = get_user_model()
    fields = ('username', 'password', 'email')
    write_only_fields = ('password')

  def create(self, validated_data):
    user = super(CreateUserSerializer, self).create(validated_data)
    user.set_password(validated_data['password'])
    user.save()
    return user 

# all of this ass shit code is garbage almost and very mixed. do not attempt.