from django.db import models
from map.models import PingNoti


class Position(models.Model):
    id = models.AutoField(primary_key=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    client = models.CharField(max_length=50, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)
    open_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    num_noti = models.IntegerField(default=0)


class NotiLog(models.Model):
    id = models.AutoField(primary_key=True)
    noti = models.ForeignKey(PingNoti, models.CASCADE)
    client = models.CharField(max_length=50)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    fcm_token = models.CharField(max_length=200, null=True)
