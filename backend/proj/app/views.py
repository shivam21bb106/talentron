from django.shortcuts import render 
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
import json
import boto3
from botocore.exceptions import NoCredentialsError
from django.core.mail import send_mail, BadHeaderError
from proj.settings import EMAIL_HOST_USER
from rest_framework.generics import ListAPIView 
import requests
import pandas as pd 
from django.conf import settings
import os 
from .models import State,City,JobSeekers,Trainers,Employers
from .serializers import ContactSerializer,StateSerializer,CitySerializer,JobDataSerializer,TrainersSerializer,EmployersSerializer
def home(request):
    return HttpResponse("Hello")

# Saving Data from excel file to django models 
# def ExceltoModels( request):
#         file = os.path.join(settings.FILES_DIR, 'District_Masters.xlsx')

        
#         df = pd.read_excel(file)
        
#         city_data=df.iloc[:,[1,3]]
#         city_data.columns = ['state_name', 'city_name']
        
#         print('state_name')
#         for i, row in city_data.iterrows():
            
#             state_data = {'new_state_name': row['state_name']}
#             city_data = {'new_city_name': row['city_name'], 'statee_name': row['state_name']}
            
#             print(state_data)
            
#             state_serializer = StateSerializer(data=state_data)
#             if state_serializer.is_valid():
#                 state_serializer.save()
            
#             city_serializer = CitySerializer(data=city_data)
#             if city_serializer.is_valid():
#                 city_serializer.save()
#             else:
#                 return Response(city_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#         return Response({"message": "Data imported successfully"}, status=status.HTTP_201_CREATED)
        
#Save Contact Data
class RecieveContact(APIView):
    def post(self,request,*args,**kwargs):
        serializer=ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            subject='Contact Details Recieved'
            message='Thanks for your application, We will contact you shortly'
            email = request.data.get('email')
            recipient_list=[email]
            send_mail(subject,message,EMAIL_HOST_USER,recipient_list,fail_silently=True)
            serializer.save()
            return Response({"message": "Job data successfully"}, status=status.HTTP_201_CREATED)
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#Save State Data
class StateListView(APIView):
    def get(self, request, format=None):
        states = State.objects.all()
        serializer = StateSerializer(states, many=True)
        return Response(serializer.data)
 # Save cities Data   
class CityListByState(APIView):   
    def get(self, request, state_id):
        cities = City.objects.filter(statee_name_id=state_id)
        if cities.exists():
            serializer = CitySerializer(cities, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"message": "No cities found "}, status=status.HTTP_404_NOT_FOUND)
    
# Job Seekers Data
class JobSeekers(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = JobDataSerializer(data=request.data)
        if 'upload_file' not in request.FILES:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST) 
        file = request.FILES['upload_file']
        print(file) 
        if serializer.is_valid():
            s3 = boto3.client(
                's3',
                aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,            
            )
            try:  
                file_path = f'uploads/{file.name}'
                s3.upload_fileobj(file, settings.AWS_STORAGE_BUCKET_NAME, file_path)  
                file_url = f'https://{settings.AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/{file_path}' 
                serializer.save(upload_file=file_url)  
                #Sending Email
                subject = 'Job Application Received'
                message = 'Thanks for your application. We will contact you shortly.'
                email = request.data.get('email')
                recipient_list = [email]
                send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list, fail_silently=True)
                return Response({"message": "Job data successfully saved", "file_url": file_url}, status=status.HTTP_201_CREATED)
            except NoCredentialsError:
                return Response(
                    {"error": "AWS credentials not found or invalid"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            except boto3.exceptions.S3UploadFailedError as e:
                return Response(
                    {"error": f"File upload failed: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
            except Exception as e:
                return Response(
                    {"error": f"An unexpected error occurred: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Save Trainers From Data
class Trainers(APIView):
    def post(self, request,*args,**kwargs):
        serializer = TrainersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            subject='Trainers Application Recieved'
            message='Thanks for your application, We will contact you shortly'
            email = request.data.get('email')
            recipient_list=[email]
            send_mail(subject,message,EMAIL_HOST_USER,recipient_list,fail_silently=True)
            
            return Response({"message": "Job data successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 #Employers Form Data   
class Employers(APIView):
    def post(self, request,*args,**kwargs): 
        serializer = EmployersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            subject='Employers Application Recieved'
            message='Thanks for your application, We will contact you shortly'
            email = request.data.get('email')
            recipient_list=[email]
            send_mail(subject,message,EMAIL_HOST_USER,recipient_list,fail_silently=True)
            return Response({"message": "Job data successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

   