from django.shortcuts import render,redirect
import random
from datetime import datetime
def method(request):
    if 'count' not in request.session:
        request.session['count']= 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    if 'x' not in request.session:
        request.session['x'] = 0
    
       

    return render(request,"ninjagame.html")

def process_money(request):
    now = datetime.now().strftime('%H:%M %p, %b %d, %Y')
    if request.POST['button'] == "farm":
        gold = random.randint(10,20)
        request.session['count'] += gold
        request.session['x'] = 0
        activity = "You entered a farm and earn " + str(gold) +"gold" + str(now) 
        request.session['activities'].append(activity)

    elif request.POST['button'] == "cave":
        gold = random.randint(10,20)
        request.session['count'] += gold
        request.session['x'] = 0
        activity = "You entered a cave and earn " + str(gold) +"gold" + " "+ str(now) 
        request.session['activities'].append(activity)

    elif request.POST['button'] == "house":
        gold = random.randint(10,20)
        request.session['count'] += gold
        request.session['x'] = 0
        activity = "You entered a house and earn " + str(gold) +"gold" + str(now)
        request.session['activities'].append(activity)

    elif request.POST['button'] == "quest":
        
        gold = random.randint(-50,50)
        if gold < 0: 
            request.session['count'] -= 50
            x = -1*gold 
            request.session['x'] += 1

            activity = "You faild a quest and lost " + str(x) +"gold" + str(now)
            request.session['activities'].append(activity)
            
        elif gold >0:
            request.session['count'] += 50
            request.session['x'] = 0
            activity = "Nice You entered a quest and earn " + str(gold) +"gold" + str(now)
            
            request.session['activities'].append(activity)

    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')

