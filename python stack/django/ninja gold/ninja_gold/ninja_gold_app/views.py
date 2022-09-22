from django.shortcuts import render,redirect
import random
from datetime import datetime
def method(request):
    if 'count' not in request.session:
        request.session['count']= 0
    if 'activities' not in request.session:
        request.session['activities'] = []
       

    return render(request,"ninjagame.html")

def process_money(request):
    now = datetime.now().strftime('%H:%M %p, %b %d, %Y')
    if request.POST['button'] == "farm":
        gold = random.randint(10,20)
        request.session['count'] += gold
        activity = "You entered a farm and earn " + str(gold) +"gold" + str(now) 
        request.session['activities'].append(activity)
    elif request.POST['button'] == "cave":
        gold = random.randint(10,20)
        request.session['count'] += gold
        activity = "You entered a cave and earn " + str(gold) +"gold" + " "+ str(now) 
        request.session['activities'].append(activity)
    elif request.POST['button'] == "house":
        gold = random.randint(10,20)
        request.session['count'] += gold
        activity = "You entered a house and earn " + str(gold) +"gold" + str(now)
        request.session['activities'].append(activity)
    elif request.POST['button'] == "quest":
        gold = random.randint(0,50)
        request.session['count'] += gold
        activity = "You entered a quest and earn " + str(gold) +"gold" + str(now)
        request.session['activities'].append(activity)
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')

