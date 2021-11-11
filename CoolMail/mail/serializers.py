from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('username', 'email')
    
    
class EmailSerializer(serializers.ModelSerializer):
    
    sendermail = serializers.CharField(source="sender.username")
    recipients = UserSerializer(read_only=True,many=True) #Variable name here is Must Be the same name in Email to get all recipients<Users> 
    
    class Meta:
        model = Email
        fields = ['user','recipients','sendermail','subject','body','timestamp','read','archived']