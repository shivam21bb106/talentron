import React from 'react';
import '../styles/talenthiringprocess.css';
function Talenthiringprocess() {
  const data = {
    processSteps: [
      {
        id: 1,
        imgSrc: '/images/image239.png',
        text: 'Get Hiring Plan from clients',
      },
      {
        id: 2,
        imgSrc: '/images/image241.png',
        text: 'Frequent Collaboration',
      },
      {
        id: 3,
        imgSrc: '/images/image240.png',
        text: 'Initial Screening & Facilitating ',
      },
      {
        id: 4,
        imgSrc: '/images/image238.png',
        text: 'Get Commitment from Candidate',
      },
      {
        id: 5,
        imgSrc: '/images/image242.png',
        text: 'Hire Candidate',
      },
      {
        id: 6,
        imgSrc: '/images/image237.png',
        text: 'Onboarding Process',
      },
    ],
    arrowImgSrc: '/images/arrow33.png', 
  };
  return (
    <div className="talent11">
      <div className="text233">
        <span>Talent Hiring Process</span>
        <p>Placement in Premium Companies</p>
      </div>
      <div className="bbox">
        {data.processSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Box */}
            <div className="sm-bbox">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  width: '125px',
                  height: '125px',
                }}
              >
                <img
                  src={step.imgSrc}
                  style={{ width: '50px', height: '50px' }}
                  alt={`Image ${step.id}`}
                />
              </div>
              <div>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '25px',
                  }}
                >
                  {`0${step.id}`}
                </span>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0',
                    padding: '0',
                    fontSize: '16px',
                    textAlign: 'center',
                  }}
                >
                  {step.text}
                </p>
              </div>
            </div>
            {index < data.processSteps.length - 1 && (
              <img
                src={data.arrowImgSrc}
                alt={`Arrow ${index + 1}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default Talenthiringprocess;
