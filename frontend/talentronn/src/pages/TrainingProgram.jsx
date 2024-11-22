import React from 'react';
import '../styles/TrainingProgram.css';
import Accordion from '../components/accordion';
import Jni from '../components/jni';
const TrainingProgram = () => {
  const thrivingBenefits = [
    { id: 1, icon: '/images/brieff.png', text: 'Hands on Projects' },
    { id: 2, icon: '/images/handshakee.png', text: 'Collab with Peers' },
    { id: 3, icon: '/images/koy.png', text: 'Experienced Mentors' },
  ];
  const portfolioBenefits = [
    { id: 1, icon: '/images/whitetick.png', text: "You'll be ready to enter the job market." },
    { id: 2, icon: '/images/whitetick.png', text: 'Opportunities for networking.' },
    { id: 3, icon: '/images/whitetick.png', text: 'Internships with dynamic tech startups.' },
    { id: 4, icon: '/images/whitetick.png', text: 'Gain practical experience.' },
    { id: 5, icon: '/images/whitetick.png', text: 'Tackle complex coding issues.' },
    { id: 6, icon: '/images/whitetick.png', text: 'Collaborate with seasoned developers.' },
  ];
  return (
    <>
      <div className="kkimage">
        <img src="/images/monk.png" alt="Monk" />

        <div className="upper-text1x">
          <div className="call-text">
            <div className="frame4">
              <img src="/images/frame4.png" alt="Frame" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF' }}>Who are we</span>
          </div>

          <div className="call-text-1-x">
            <span style={{ fontSize: '34px', fontWeight: '700', color: '#FFFFFF' }}>Hi Candidate!</span>
            <br />
            <span style={{ fontSize: '34px', fontWeight: '700', color: '#006CBB' }}>Are you looking for a Job?</span>
          </div>
          <div className="call-text-2-x">
            <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '400' }}>
              At Talentron, we make it possible to become a software
              <p style={{ margin: '0px', padding: '0' }}>engineer, data engineer, or software tester.</p>
            </span>
          </div>
        </div>
      </div>
      <Jni />
      <div className="thriving">
        <div className="thriving-text">
          <span>Thriving career at Talentron</span>
          <p>Working on Real-time projects</p>
        </div>
        <div className="thriving-main">
          <div className="thriving-main-text">
            <span>Real-Time Projects</span>
            <p>
              Our comprehensive courses in Full Stack Development, Frontend Development, Data Engineering, Software
              Testing, and more open up endless possibilities. Our curriculum covers everything from the basics of
              programming languages to the latest in Web development, API development, Database design and development,
              data engineering, and software testing.
            </p>
            <div className="pro-maiinbox">
              {thrivingBenefits.map((benefit) => (
                <div className="maiinbox" key={benefit.id}>
                  <img src={benefit.icon} alt={benefit.text} />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="thriving-main-photo">
            <img src="/images/full.png" alt="Full-stack development" />
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="main-portfolio">
          <div className="portfolio-image1">
            <img src="/images/portfolion.png" alt="Portfolio" />
          </div>
          <div className="portfolio-text">
            <span style={{ fontSize: '20px', marginTop: '8px', fontWeight: '700', color: '#FFFFFF' }}>
              Showcasing Portfolio
            </span>
            <p>
              At Talentron, we make it possible to become a software engineer, data engineer, or software tester.
            </p>
            {portfolioBenefits.map((benefit) => (
              <div key={benefit.id} style={{ marginTop: '10px' }}>
                <img src={benefit.icon} alt="tick" />
                <span>{benefit.text}</span>
              </div>
            ))}
            <br />
            <span style={{ fontSize: '16px', fontWeight: '400' }}>
              Join Talentron to transform your tech passion into a successful career. Start your journey from dreamer to
              skilled professional today!
            </span>
          </div>
        </div>
      </div>
      <div className="internship-box">
        <div className="internship-content">
          <img
            src="/images/imj.png"
            alt="left-icon"
            className="internship-icon left-icon"
          />
          <p className="internship-text">
            Our internships can lead to full-time positions at <strong>reputable firms</strong>, 
            <span className="highlighted-text"> offering continuous learning opportunities</span>. 
            Over time, specialize in areas like <strong>cloud computing</strong> and <strong>artificial intelligence</strong>, 
            becoming a key player in <strong>cutting-edge projects</strong>.
          </p>
          <img
            src="/images/kll.png"
            alt="right-icon"
            className="internship-icon right-icon"
          />
        </div>
      </div>
      <Accordion />
    </>
  );
};

export default TrainingProgram;
