
from django.urls import path
from . import views

urlpatterns = [
    path('submit', views.method),
    path('show', views.show),
    path('', views.showform),
    path('reset', views.destroy)
    

]
