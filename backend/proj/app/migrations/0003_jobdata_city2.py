# Generated by Django 5.1.2 on 2024-11-11 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_rename_location_jobdata_city_jobdata_state'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobdata',
            name='city2',
            field=models.CharField(default=2, max_length=40),
            preserve_default=False,
        ),
    ]
