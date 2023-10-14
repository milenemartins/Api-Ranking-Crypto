from rest_framework import serializers
from models import Crypto_Type


class CryptoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crypto_Type
        field = '__all__'
