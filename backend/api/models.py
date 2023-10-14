from django.db import models
from django.db.models import Count
from django.contrib.auth.models import User

class Crypto_Type(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        # Use F expression to count votes and order by it
        ordering = ['-uservote']

    def votes(self):
        return UserVote.objects.filter(crypto_type=self).count()

class UserVote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crypto_type = models.ForeignKey(Crypto_Type, on_delete=models.CASCADE, related_name='uservote')
