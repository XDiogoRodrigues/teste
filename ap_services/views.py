from django.shortcuts import render, redirect

from django.contrib import messages

from django.contrib.auth.backends import ModelBackend

from django.contrib.auth import authenticate, login

from .models import UserCustomApp
from .forms import CreateCustomUserModel


def login_user_aplication(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(email, len(email))
        print(password, len(password))
        user = authenticate(request, username=email, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request,'Dados de login inválidos!')
    return render(request, 'ap_services/partials/login.html', context={
        'name_page': 'Login'
    })


def register(request):
    if request.method == 'POST':
        print('Entrou aqui?')
        form = CreateCustomUserModel(request.POST)
        if form.is_valid():
            print('Formulário Válido!!')
            email = form.cleaned_data['email']
            print(email, len(email))
            password = form.cleaned_data['password']
            print(password, len(password))
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']  
            user = UserCustomApp.objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name)
            print(user)
            return redirect('login_user_aplication')
        else:
            messages.info(request, 'E-mail já cadastrado!')          
    return render(request, 'ap_services/partials/register.html', context={
        'name_page': 'Registre-se'
    })


def cart(request):
    courses = ['Python', 'a', 'b']
    return render(request, 'ap_services/partials/cart.html', context={
        'name_page': 'Carrinho de Compra',
        'quantity_courses': len(courses),
        'courses': courses,
    })


def payment(request):
    courses = ['Python', 'a', 'b']
    return render(request, 'ap_services/partials/payment.html', context={
        'name_page': 'Pagamento',
        'quantity_courses': len(courses),
        'courses': courses
    })


def to_teacher(request):
    return render(request, 'ap_services/partials/to-teach.html', context={
        'name_page': 'Ensine na Udemy'
    })