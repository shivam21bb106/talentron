import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/form2.css';
import TrainersForm from './trainer';
import EmployersForm from './employer';
const Form2 = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state_id: '',
    city_id: '',
    city2: '',
    email: '',
    notice_period: '',
    expected_salary: '', 
    upload_file: null,
  });
  const [fileError, setFileError] = useState('');
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [isStatesLoaded, setIsStatesLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('jobdata');
  const [formSubmissionMessage, setFormSubmissionMessage] = useState('');
  const fileInputRef = useRef(null);
  const formEndpoint = 'http://127.0.0.1:8000/jobseekers';
  const fetchStates = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/statelist');
      if (response.status === 200 && Array.isArray(response.data)) {
        setStateList(response.data);
        setIsStatesLoaded(true);
      } else {
        console.error('Invalid state data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching state list:', error);
    }
  };
  const handleStateChange = async (e) => {
    const selectedStateId = e.target.value;
    setFormData({ ...formData, state_id: selectedStateId, city_id: '' });
    if (selectedStateId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/citylist/${selectedStateId}`);
        if (response.status === 200 && Array.isArray(response.data)) {
          setCityList(response.data);
        } else {
          console.error('Invalid city data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching city list:', error);
      }
    } else {
      setCityList([]);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setFileError('File size must not exceed 3 MB.');
        setFormData({ ...formData, upload_file: null });
        fileInputRef.current.value = '';
      } else {
        setFileError('');
        setFormData({ ...formData, upload_file: file });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmissionMessage('');
    if (!formData.city_id || !formData.state_id) {
      alert('Please enter both state and city.');
      return;
    }
    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: submissionData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          phone: '',
          state_id: '',
          city_id: '',
          city2: '',
          email: '',
          notice_period: '',
          expected_salary: '', 
          upload_file: null,
        });
        fileInputRef.current.value = '';
        setFormSubmissionMessage('Your form is submitted successfully!');
      } else {
        console.log('Form submission failed');
        setFormSubmissionMessage('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmissionMessage('An error occurred while submitting the form.');
    }
  };
  const handleTabClick = (tab) => {
    console.log(`Setting active tab to: ${tab}`);
    setActiveTab(tab);
  };
  useEffect(() => {
    if (props.showForm && !isStatesLoaded) {
      fetchStates();
    }
  }, [props.showForm, isStatesLoaded]);
  return (
    <div className="formcontainer1711">
      {props.showForm && (
        <>
          <div className="job-box">
            <div
              className="seek"
              style={{ backgroundColor: activeTab === 'jobdata' ? 'white' : '' }}
              onClick={() => handleTabClick('jobdata')}
            >
              Job Seekers
            </div>
            <div
              className="seek"
              style={{ backgroundColor: activeTab === 'trainers' ? 'white' : '' }}
              onClick={() => handleTabClick('trainers')}
            > 
            <img src='/images/t243.png'/>
              Trainers
            </div>
            <div
              className="seek"
              style={{ backgroundColor: activeTab === 'employers' ? 'white' : '' }}
              onClick={() => handleTabClick('employers')}
            >
              <img src='/images/e224.png'/>
              Employers
            </div>
          </div>
          {activeTab === 'jobdata' && (
            <form className="job-form" onSubmit={handleSubmit}>
              <div>
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Contact Number*</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Preferred Job Location*</label>
                <select
                  name="state_id"
                  style={{  height: '40px' }}
                  value={formData.state_id}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {stateList.map((stateItem) => (
                    <option key={stateItem.id} value={stateItem.id}>
                      {stateItem.new_state_name}
                    </option>
                  ))}
                </select>
                <select
                  name="city_id"
                  style={{  height: '40px' }}
                  value={formData.city_id}
                  onChange={(e) => setFormData({ ...formData, city_id: e.target.value })}
                  disabled={!formData.state_id}
                >
                  <option value="">Select District</option>
                  {cityList.map((cityItem) => (
                    <option key={cityItem.id} value={cityItem.id}>
                      {cityItem.new_city_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>City*</label>
                <input
                  type="text"
                  name="city2"
                  placeholder="Enter City/Town/Village"
                  value={formData.city2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Email*</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Notice Period*</label>
                <input
                  type="text"
                  name="notice_period"
                  placeholder="Enter notice period"
                  value={formData.notice_period}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Expected Salary*</label>
                <input
                  type="text"
                  name="expected_salary"
                  placeholder="Enter expected salary"
                  value={formData.expected_salary} 
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Upload Resume*</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".png,.jpg,.pdf"
                  onChange={handleFileUpload}
                />
                {fileError && <p style={{ color: 'red', fontSize: '14px' }}>{fileError}</p>}
              </div>
              <button type="submit">Submit</button>
              {formSubmissionMessage && (
                <p style={{ textAlign:'center', color: 'green' }}>{formSubmissionMessage}</p>
              )}
            </form>
          )}
          {activeTab === 'trainers' && <TrainersForm />}
          {activeTab === 'employers' && <EmployersForm />}
        </>
      )}
    </div>
  );
};

export default Form2;
