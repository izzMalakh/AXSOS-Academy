
from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.method1),
    path('show', view=views.showform)
]