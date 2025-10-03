from django.db import models

from django.contrib.auth.models import AbstractUser, BaseUserManager


class UserCustomManager(BaseUserManager):

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('O e-mail é obrigatório!')
        email = self.normalize_email(email)
        user = self.model(email=email, username=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser precisa ter is_superusr=True')
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser precisa ter is_staff=True')
        
        return self._create_user(email, password, **extra_fields)


class UserCustomApp(AbstractUser):
    email = models.CharField('E-mail', max_length=100, unique=True)
    password = models.CharField('Senha', max_length=255)
    first_name = models.CharField('Nome', max_length=255)
    last_name = models.CharField('Sobrenome', max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email
    
    objects = UserCustomManager()
