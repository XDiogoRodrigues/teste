from django.urls import path

from .views import login, register, cart, payment, to_teacher

urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('cart/', cart, name='cart'),
    path('payment/', payment, name='payment'),
    path('to-teacher/', to_teacher, name='to-teacher')
]
