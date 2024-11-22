import React from 'react';
import '../styles/choose.css';

function Wclientchooseus() {
  // Use an object to store points and images
  const data = {
    points: [
      { text: 'Hiring - Better Decision Making.' },
      { text: 'Measure Skill Development.' },
      { text: 'Increase Revenue Growth.' },
      { text: 'High Return on Investment.' },
      { text: 'Saves Companies Productive Time.' },
    ],
    images: {
      healthIcon: '/images/health.png',
      maskImage: '/images/mask34.png',
      graphic: '/images/g63.png',
      component: '/images/component1.png',
      den3: '/images/den3.png',
      standard: '/images/standard.png',
      tick: '/images/smalltick.png',
    },
  };

  return (
    <div className="main-container1">
      <div className="main-container12">
        <div className="square-icon">
          <img src={data.images.healthIcon} alt="Health Icon" />
        </div>
        <div className="text1">
          <span className="aa">Why Clients Choose Us</span>
          <p>Skill Development</p>
        </div>

        <div className="xyz">
          <div className="image111">
            <img src={data.images.maskImage} alt="Image" />

            <div className="im63">
              <img
                src={data.images.graphic}
                alt="Graphic"
                width={'161px'}
                height={'105.89px'}
              />
            </div>

            <div className="im64">
              <img src={data.images.component} alt="Component" />
            </div>
          </div>

          <div className="den3">
            <img src={data.images.den3} alt="Den 3" />
          </div>
          <div className="imagee111">
            <img src={data.images.standard} alt="Standard" />
          </div>

          <div className="textt">
            <span>Talentron - Job Portal</span>
            <p>
              Welcome to Talentron, where we're committed to empowering the
              next generation of technology leaders. Founded by Solomon, whose
              extensive 20-year career spanned various domains, Talentron was
              born out of a passion for building high-performing teams and
              unlocking their full potential.
            </p>

            {data.points.map((point, index) => (
              <p key={index}>
                <img
                  src={data.images.tick}
                  style={{ marginRight: '3px' }}
                  alt="Tick"
                />
                {point.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wclientchooseus;
