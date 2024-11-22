# Generated by Django 5.1.2 on 2024-11-13 11:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_employerdata_trainersdata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employerdata',
            name='city2',
        ),
        migrations.RemoveField(
            model_name='trainersdata',
            name='city2',
        ),
        migrations.AddField(
            model_name='employerdata',
            name='district',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='app.city'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trainersdata',
            name='district',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='app.city'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='employerdata',
            name='city',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='trainersdata',
            name='city',
            field=models.CharField(max_length=40),
        ),
        migrations.CreateModel(
            name='JobSeekers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=40)),
                ('email', models.EmailField(max_length=30)),
                ('notice_period', models.CharField(max_length=30)),
                ('expected_salarly', models.CharField(max_length=30)),
                ('upload_file', models.FileField(upload_to='')),
                ('district', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.city')),
                ('state', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.state')),
            ],
        ),
        migrations.DeleteModel(
            name='JobData',
        ),
    ]