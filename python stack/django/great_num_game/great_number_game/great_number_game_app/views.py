from contextlib import redirect_stderr
from django.shortcuts import render,HttpResponse,redirect

import random

# Create your views here.
def method(request):
    if 'random' not in request.session:
        request.session['random']=random.randint(1, 100)
        request.session['status']=""
        request.session['guesses']= 0
    return render(request,'game.html')

def guess(request):
     
    if request.POST['guess_num']:
        if request.session['guesses'] >= 9:
            request.session['status'] = 'Lose!'
            request.session['guesses'] = 0

        elif int(request.POST['guess_num']) > (request.session['random']+20):
            request.session['status'] = 'Too high!'
            request.session['guesses'] += 1

        elif int(request.POST['guess_num']) > request.session['random']:
            request.session['status'] = 'High!'
            request.session['guesses'] += 1

        elif int(request.POST['guess_num']) < (request.session['random']-20):
            request.session['status'] = 'Too Low!'
            request.session['guesses'] += 1
       
        elif int(request.POST['guess_num']) < request.session['random']:
            request.session['status'] = 'Low!'
            request.session['guesses'] += 1
        else:
            request.session['status'] = 'Win!'
            request.session['guesses'] +=0
        
        return redirect("/")

def playagain(request):
    request.session['random']=random.randint(1, 100)
    request.session['guesses']=0
    request.session['status'] = ''
    return redirect("/")