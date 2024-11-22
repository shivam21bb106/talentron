import React from 'react';
import '../styles/Ourtraining.css';
const Ourtraining = () => {
  const trainingSteps = [
    {
      id: 1,
      duration: '1-2 Weeks',
      title: 'Assess',
      miniSteps: ['Assess Training needs', 'Prepare Resources'],
      icon: '/images/bluetriangle.png',
    },
    {
      id: 2,
      duration: '2-3 Weeks',
      title: 'Training Readiness',
      miniSteps: [
        'Candidate Screening',
        'Get Commitment',
        'Design Training Program',
      ],
      icon: '/images/bluetriangle.png',
    },
    {
      id: 3,
      duration: '2-3 Months',
      title: 'Delivery Training',
      miniSteps: [
        'Intense Training',
        'Facilitate Cloud Eco-System',
        'Periodic Assessment',
      ],
      icon: '/images/bluetriangle.png',
    },
    {
      id: 4,
      duration: '3-4 Months',
      title: 'Real Time Projects',
      miniSteps: [
        'Provide Technical Guidance',
        'Monitor Progress',
        'Periodic Assessment',
      ],
      icon: '/images/bluetriangle.png',
    },
    {
      id: 5,
      duration: '1-2 Weeks',
      title: 'VAT & Get Certified',
      miniSteps: [
        'Soft Skill Training',
        'Corporate Culture Training',
        'Arrange Mock Interview',
        'Mentor through Industry Experts',
      ],
      icon: '/images/bluetriangle.png',
    },
    {
      id: 6,
      duration: '1-2 Weeks',
      title: 'Engage Partners',
      miniSteps: ['Conduct Assessments', 'Arrange Interviews', 'Onboard Candidate'],
      icon: '/images/bluetriangle.png',
    },
  ];
  const trainingImages = [
    '/images/image201.png',
    '/images/image202.png',
    '/images/image203.png',
    '/images/image204.png',
    '/images/image205.png',
    '/images/image206.png',
  ];
  return (
    <div className="train21">
      <div className="shiv">
        <div className="train-text21">
          <span>Our Training Process</span>
          <p>Professional Growth</p>
        </div>
        <div className="bigger-box">
          <div className="xct">
            <div className="inner-big-box">
              {trainingImages.map((image, index) => (
                <div className="smaller-box" key={index}>
                  <img src={image} alt={`Training Step ${index + 1}`} />
                  <img
                    src="/images/blueo.png"
                    style={{
                      position: 'relative',
                      bottom: '-93px',
                      left: '-20px',
                    }}
                    alt="Blue Overlay"
                  />
                </div>
              ))}
            </div>
            <hr className="dottline" />
          </div>
        </div>
        <div className="dottextt">
          {trainingSteps.map((step) => (
            <div className="sm-dottext" key={step.id}>
              <h2>{step.id < 10 ? `0${step.id}` : step.id}</h2>
              <div className="bh">
                <img src={step.icon} alt={`Step ${step.id} Icon`} />
                <p className="box-text box-testy">{step.duration}</p>
              </div>
              <p className="box-text main">{step.title}</p>
              {step.miniSteps.map((miniStep, index) => (
                <p key={index} className="box-text box-text-mini">
                  {miniStep}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Ourtraining;
