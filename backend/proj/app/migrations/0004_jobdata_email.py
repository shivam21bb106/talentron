# Generated by Django 5.1.2 on 2024-11-11 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_jobdata_city2'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobdata',
            name='email',
            field=models.EmailField(default=2, max_length=30),
            preserve_default=False,
        ),
    ]
