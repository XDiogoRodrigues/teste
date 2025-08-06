from django.shortcuts import render


def login(request):
    return render(request, 'ap_services/partials/login.html', context={
        'name_page': 'Login'
    })


def register(request):
    return render(request, 'ap_services/partials/register.html', context={
        'name_page': 'Registre-se'
    })