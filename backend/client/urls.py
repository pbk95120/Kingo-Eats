from django.urls import path
from client import views

app_name = 'client'
urlpatterns = [
    path('v1/check-position/', views.CheckPosition.as_view()),
    path('v1/noti-log/', views.NotiLogListView.as_view()),
    path('v1/user/save/', views.UserSave.as_view()),
]
