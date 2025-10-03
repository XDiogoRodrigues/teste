from django.urls import path

from .views import login_user_aplication, register, cart, payment, to_teacher

urlpatterns = [
    path('login/', login_user_aplication, name='login_user_aplication'),
    path('register/', register, name='register'),
    path('cart/', cart, name='cart'),
    path('payment/', payment, name='payment'),
    path('to-teacher/', to_teacher, name='to-teacher')
]
