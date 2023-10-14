from django.shortcuts import get_object_or_404, redirect
from .models import Crypto_Type, UserVote
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

#RestFramework
from rest_framework.decorators import api_view
from rest_framework.response import Response
#Model
from api.models import Crypto_Type
#Serializer
from serializers import CryptoSerializer


@api_view(['GET'])
def index(request):
    cryptos = Crypto_Type.Model.objects.all()
    serializer_cryptos = CryptoSerializer(many=True)
    return Response(serializer_cryptos.data, status=status.HTTP_200_OK_)


@api_view
def vote(request, crypto_type_id):
    crypto_type = get_object_or_404(Crypto_Type, pk=crypto_type_id)
    user = request.user

    # Verificar se o usuário já votou
    existing_vote = UserVote.objects.filter(user=user, crypto_type=crypto_type).exists()

    if not existing_vote:
        # Se o usuário não votou ainda, criar um novo voto
        UserVote.objects.create(user=user, crypto_type=crypto_type)
        
        # Atualize o número de votos no Crypto_Type
        crypto_type.votes += 1
        crypto_type.save()

    return redirect('')
