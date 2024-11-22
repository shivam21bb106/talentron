import '../styles/form.css';
import React, { useState } from 'react';
import axios from 'axios';

const Form4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isCreated, setIsCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(''); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage('Both fields are required.');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/contact', {
        full_name: formData.name,
        email: formData.email,
      });
      if (response.status === 201) {
        setIsCreated(true);
        setFormData({
          name: '',
          email: '',
        });
        setErrorMessage(''); 
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };
  return (
    <div className="boxy">
      <div className="text3">
        <span>Don't Miss Out, Develop Your Coding Skills with Talentron</span>
        <p>Advance Training Session</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="form"
          type="text"
          name="name"
          placeholder="Full Name"
          className="text"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          id="form2"
          type="email"
          name="email"
          placeholder="Enter your Mail Id"
          className="text"
          value={formData.email}
          onChange={handleChange}
        />
        <button id="button12" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {isCreated && <p className="success">Your form has been submitted successfully!</p>}
    </div>
  );
};
export default Form4;
