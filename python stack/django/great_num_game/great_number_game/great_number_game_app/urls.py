# from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.method),
    path('guess', views.guess),
    path('destroy', views.playagain)
]
