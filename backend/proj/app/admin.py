from django.contrib import admin
from .models import Contact,City,State,JobSeekers,Trainers,Employers



class DataFormModelAdmin(admin.ModelAdmin):
    list_display=['full_name','email']



class StateModel(admin.ModelAdmin):
    list_display=['id','new_state_name']

class TrainersModel(admin.ModelAdmin):
    list_display=['name','contact','email','website','linkedin','expert']

class JobModleAdmin(admin.ModelAdmin):
    list_display=['state','city','city2','email','notice_period','expected_salary','upload_file']

class EmployersModleAdmin(admin.ModelAdmin):
    list_display=['name','email','contact','website','requirements']
admin.site.register(Employers,EmployersModleAdmin)
admin.site.register(Trainers,TrainersModel)

admin.site.register(Contact,DataFormModelAdmin)
admin.site.register(JobSeekers,JobModleAdmin)

admin.site.register(State,StateModel)

admin.site.register(City)