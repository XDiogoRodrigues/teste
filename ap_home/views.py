from django.shortcuts import render

def home(request):
    return render(request, 'ap_home/home.html')
