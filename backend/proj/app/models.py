from django.db import models

# Create your models here.
class Contact(models.Model):
    full_name=models.CharField(max_length=30)
    email=models.EmailField(max_length=30)


class State(models.Model):
    new_state_name=models.CharField(max_length=40,unique=True)
    def __str__(self):
        return self.new_state_name


class City(models.Model):
    new_city_name=models.CharField(max_length=40)
    statee_name=models.ForeignKey(State,on_delete=models.CASCADE)

    def __str__(self):
      return self.new_city_name






class JobSeekers(models.Model):
    state = models.ForeignKey(State, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    city2=models.CharField(max_length=40)
    email=models.EmailField(max_length=30)
    notice_period=models.CharField(max_length=30)
    expected_salary=models.CharField(max_length=30)
    upload_file=models.FileField(upload_to='uploads/')  




class Trainers(models.Model):
    name=models.CharField(max_length=30)
    contact=models.IntegerField()
    email=models.CharField(max_length=100)
    website=models.CharField(max_length=20,null=True,blank=True)
    linkedin=models.CharField(max_length=30)
    expert=models.CharField(max_length=33)


class Employers(models.Model):
    name=models.CharField(max_length=30)
    
    email=models.CharField(max_length=100)
    contact=models.IntegerField()
    website=models.CharField(max_length=20,null=True,blank=True)
    requirements=models.CharField(max_length=50)