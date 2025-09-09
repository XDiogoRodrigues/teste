from django.shortcuts import render


def login(request):
    return render(request, 'ap_services/partials/login.html', context={
        'name_page': 'Login'
    })


def register(request):
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