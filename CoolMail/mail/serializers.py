from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('username', 'email')
    
    
class EmailSerializer(serializers.ModelSerializer):
    
    #Variables names here are Must Be the same name in Email to get all recipients<Users> 
    sender = serializers.SlugRelatedField(slug_field="email", queryset=User.objects.all())
    user = serializers.SlugRelatedField(slug_field="email", queryset=User.objects.all())
    class Meta:
        model = Email
        fields = ['user','recipients','sender','subject','body','timestamp','read','archived']
