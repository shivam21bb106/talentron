# Generated by Django 5.1.1 on 2024-11-18 11:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_dataform_jobdata_delete_contact_delete_employers_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='JobData',
            new_name='JobSeekers',
        ),
    ]