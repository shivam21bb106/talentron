import React from 'react';
import '../styles/whychooseourtraining.css';
const Whychooseourtraining = () => {
  const trainingData = {
    benefits: [
      { text: "Personalized Training Experience.", icon: '/images/smalltick.png' },
      { text: "Real Time Projects.", icon: '/images/smalltick.png' },
      { text: "100% Guaranteed Job", icon: '/images/smalltick.png' }
    ],
    images: {
      mainImage: '/images/m17.png',
      overlayImage: '/images/g165.png'
    }
  };
  return (
    <div className="cont">
      <div className="text13">
        <span>Why Choose Our Training</span>
        <p>Working on Real time projects</p>
      </div>
      <div className="xyz1">
        <div className="texttt">
          <span>Talentron - Our Training</span><br />
          <p>
            At Talentron, we believe in providing a personalized training experience to each individual. 
            We offer special attention and mentorship to help you sharpen your technical skills, provide career guidance, 
            and offer live project exposure to emerging technologies.
          </p>
          <div className="in-test">
            {trainingData.benefits.map((benefit, index) => (
              <p key={index}>
                <img src={benefit.icon} alt="Tick" /> {benefit.text}
              </p>
            ))}
          </div>
        </div>
        <div className="image112">
          <img src={trainingData.images.mainImage} alt="Training" />
          <img src={trainingData.images.overlayImage} className="g1656" alt="Overlay" />
        </div>
      </div>
    </div>
  );
};
export default Whychooseourtraining;
