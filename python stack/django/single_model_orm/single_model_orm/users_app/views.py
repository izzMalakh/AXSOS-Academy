from itertools import count
from multiprocessing import context
from urllib import request
from django.shortcuts import render,redirect
from .models import User

def showform(request):
    return render(request,"userapp.html")

def method(request):
    User.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'],age=request.POST['age'])
    if 'count' not in request.session:
        request.session['count']= 0
    request.session['count']+=1
    return redirect ("/show")

def show(request):
    context={
        "allusers":User.objects.all()
    }
    return render(request,"userapp.html",context)

def destroy(request):
    allusers=User.objects.all()
    allusers.delete()
    request.session['count']= 0

    return redirect ("/show")


