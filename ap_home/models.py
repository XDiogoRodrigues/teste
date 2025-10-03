from django.db import models

from django.contrib.auth import get_user_model


from django.db.models import signals
from django.template.defaultfilters import slugify

from stdimage import StdImageField

import uuid

User = get_user_model()


def get_full_path(instance, file_name):
    ext = file_name.split('.')[-1]
    file_name = f'{instance.name}/{uuid.uuid4()}.{ext}'
    return file_name


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField('Nome', max_length=300)
    slug = models.SlugField('Slug', editable=False, unique=True)
    description_short = models.TextField('Descrição')
    teacher = models.CharField('Professor', max_length=255)
    assessment = models.DecimalField('Avaliação', max_digits=5, decimal_places=1)
    quantity_assessment = models.IntegerField('Quantidade de avaliação')
    quantity_hours = models.IntegerField('Quantidade total de horas')
    quantity_classes = models.IntegerField('Quantidade de aulas')
    level = models.CharField('Nível', max_length=100)
    image = StdImageField(upload_to=get_full_path, variations={'thumbnail': {"width": 250, "height": 250, "crop": True}})

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'Cursos'
        verbose_name = 'Curso'
        verbose_name_plural = 'Cursos'


def course_pre_save(signal, instance, sender, **kwargs):
    instance.slug = slugify(instance.name)


signals.pre_save.connect(course_pre_save, sender=Course)


