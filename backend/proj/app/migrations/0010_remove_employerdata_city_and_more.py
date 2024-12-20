# Generated by Django 5.1.2 on 2024-11-18 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_alter_trainersdata_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employerdata',
            name='city',
        ),
        migrations.RemoveField(
            model_name='employerdata',
            name='district',
        ),
        migrations.RemoveField(
            model_name='employerdata',
            name='expected_salarly',
        ),
        migrations.RemoveField(
            model_name='employerdata',
            name='notice_period',
        ),
        migrations.RemoveField(
            model_name='employerdata',
            name='state',
        ),
        migrations.RemoveField(
            model_name='employerdata',
            name='upload_file',
        ),
        migrations.AddField(
            model_name='employerdata',
            name='contact',
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employerdata',
            name='name',
            field=models.CharField(default=2, max_length=80),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employerdata',
            name='requirements',
            field=models.CharField(default=2, max_length=70),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employerdata',
            name='website',
            field=models.CharField(default=2, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='employerdata',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
