from django import forms 

from .models import UserCustomApp


class CreateCustomUserModel(forms.ModelForm):
    class Meta:
        model = UserCustomApp
        fields = ['email', 'password', 'first_name', 'last_name']


class LoginCustomUserModel(forms.Form):
    class Meta:
        model = UserCustomApp
        fields = ['email', 'password']
