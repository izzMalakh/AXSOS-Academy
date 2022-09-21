from django.shortcuts import render,HttpResponse,redirect

# Create your views here.
def methodCount(request):
    if 'count' not in request.session:
        request.session['count'] =0
    else:
        request.session['count'] += 1
        
    return render(request,"count.html")


def add(request):
    if request.POST['visit']=='inc2':
        request.session['count'] += 1
    elif request.POST['visit']=='reset':
        request.session['count'] = -1
    return redirect("/")
