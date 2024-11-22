import React, { useState } from 'react';
import Form2 from '../components/form2';
import '../styles/contact.css';
import '../styles/form2.css';
const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const toggleForm = (type) => {
    if (formType === type) {
      setShowForm(!showForm);
    } else {
      setShowForm(true);
      setFormType(type);
    }
  };
  const contactOptions = [
    {
      id: 1,
      image: '/images/image900.png',
      title: 'Job Seekers',
      email: 'Job@talentron.com',
      formType: 'jobSeeker',
    },
    {
      id: 2,
      image: '/images/image902.png',
      title: 'Training Request',
      email: 'Training@talentron.com',
      formType: 'trainingRequest',
    },
    {
      id: 3,
      image: '/images/image901.png',
      title: 'Training Partner',
      email: 'Partner@talentron.com',
      formType: 'trainingPartner',
    },
    {
      id: 4,
      image: '/images/image904.png',
      title: 'Hiring Request',
      email: 'hiring@talentron.com',
      formType: 'hiringRequest',
    },
  ];
  return (
    <>
      <div className="head">
        <img src="/images/monk.png" alt="About Image" />
        <div className="upper-text">
          <div className="call-text">
            <div className="frame4">
              <img src="/images/frame4.png" alt="Frame" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF' }}>
              Who are we
            </span>
          </div>
          <div className="call-text-1">
            <span style={{ fontSize: '34px', fontWeight: '700', color: '#FFFFFF' }}>
              Contact Us!
            </span>
            <br />
            <span style={{ fontSize: '34px', fontWeight: '700', color: '#006CBB' }}>
              Our Talentron
            </span>
          </div>
          <div className="call-text-2">
            <span
              style={{ margin: '0', padding: '0', color: '#FFFFFF', fontSize: '14px', fontWeight: '400' }}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is{' '}
              <p style={{ margin: '0px', padding: '0' }}>dummy text used in laying out print, graphic or web</p>
              designs.
            </span>
          </div>
        </div>
        <div className="hicon">
          <img src="/images/health.png" alt="Health Icon" />
        </div>
      </div>
      {showForm && <Form2 showForm={showForm} formType={formType} />}
      <div className="contactbox">
        {contactOptions.map((option) => (
          <div
            key={option.id}
            className={`smallcontact a${option.id}`}
            onClick={() => toggleForm(option.formType)}
          >
            <img src={option.image} alt={option.title} />
            <span style={{ fontSize: '18px', fontWeight: '600', marginLeft: '25px' }}>
              {option.title}
            </span>
            <p style={{ fontSize: '14px', fontWeight: '400', marginLeft: '25px' }}>{option.email}</p>
            <div className="im32">
              <img src="/images/arrow32.png" style={{ width: '30px', height: '20px' }} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
      <div className="location">
        <div className="loctext">
          <span style={{ fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '700', marginTop: '36px' }}>
            Our Location
          </span>
          <p style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400' }}>
            Connecting Hub
          </p>
        </div>
        <div className="loc">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.592445280858!2d80.16120157585804!3d13.061594012897272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526330665dc9e5%3A0x1ec90c82a0b8cbf8!2sLapis%20Data%20Analytics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727089928467!5m2!1sen!2sin"
            width="1200"
            height="321"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Contact;
