from django.urls import path
from . import views

urlpatterns = [
    path('', views.methodCount),
    path('add2', views.add)

]
