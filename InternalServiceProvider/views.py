from django.shortcuts import render_to_response, get_object_or_404
from InternalServiceProvider.models import Notification
from firebase import firebase

class Notification():
    template_name = 'dashboard.html'

def index(request):
    return render_to_response('dashboard.html', {

    })

def setup_firebase():
    f = firebase('https://sizzling-fire-4810.firebaseio.com/')
    r = f.push({'name':'divesh','value':'rocks'})

