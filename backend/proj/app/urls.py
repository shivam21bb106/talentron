from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import RecieveContact,StateListView,CityListByState,JobSeekers,Trainers,Employers
urlpatterns = [
    path('home',views.home),
    path('contact',RecieveContact.as_view()),
    # path('convert',views.ExceltoModels),
    path('statelist',StateListView.as_view()),
    path('jobseekers',JobSeekers.as_view()),
    path('trainers',Trainers.as_view()),
    path('employers',Employers.as_view()),
 path('citylist/<int:state_id>/', CityListByState.as_view(), name='city_list'),] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)