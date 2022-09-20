
from django.shortcuts import render, HttpResponse


# Create your views here.
def method1(request):
    return render(request, 'form.html')

def showform(request):
    context = {
        'name':request.POST['name'],
        'location':request.POST['dojo_location'],
        'favlanguage':request.POST['favlanguage'],
        'comment':request.POST['comments']
    }
    return render(request,'data.html',context)

