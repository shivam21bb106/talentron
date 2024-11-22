from rest_framework import serializers 
from .models import Contact,State,City,JobSeekers,Trainers,Employers
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['full_name', 'email']

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model=State
        fields=['id','new_state_name'] 

class CitySerializer(serializers.ModelSerializer):
    statee_name = serializers.CharField()
    class Meta:
        model=City
        fields = ['id','new_city_name', 'statee_name']

    def create(self, validated_data):
        state_name = validated_data.pop('statee_name')
        states = State.objects.filter(new_state_name=state_name)
        if not states.exists():
            raise serializers.ValidationError(f"State '{state_name}' does not exist.")
        state = states.first()  

        city = City.objects.create(new_city_name=validated_data['new_city_name'], statee_name=state)
        return city
    
class JobDataSerializer(serializers.ModelSerializer):
    state_id = serializers.IntegerField()
    city_id = serializers.IntegerField()

    class Meta:
        model = JobSeekers
        fields = ['state_id', 'city_id', 'city2', 'email', 'notice_period', 'expected_salary', 'upload_file']

class TrainersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainers
        fields = ['name','contact','email','website','linkedin','expert']

class EmployersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employers
        fields = ['name','email','contact','website','requirements']