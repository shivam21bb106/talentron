import React from 'react';
import Accordion from '../components/accordion';
import '../styles/TrainingPartner.css';
const TrainingPartner = () => {
  const sponsors = [
    { id: 1, src: '/images/editas.png', alt: 'Editas' },
    { id: 2, src: '/images/arbo.png', alt: 'Arbo' },
    { id: 3, src: '/images/airbus.png', alt: 'Airbus' },
    { id: 4, src: '/images/ionic.png', alt: 'Ionic' },
    { id: 5, src: '/images/comfy.png', alt: 'Comfy' },
    { id: 6, src: '/images/zerox.png', alt: 'Zerox' }
  ];
  const skills = {
    left: ['Full-stack Development', 'Front-end Development', 'Data Engineering', 'Software Testing'],
    right: ['Dev Ops', 'API Development', 'Database Design', 'Cloud Computing']
  };
  const benefits = [
    { id: 1, icon: '/images/brief.png', text: 'Professional Training' },
    { id: 2, icon: '/images/handshake.png', text: 'Collaborate Peers' },
    { id: 3, icon: '/images/hand.png', text: 'Continuous Learning' },
    { id: 4, icon: '/images/monitor.png', text: 'Adaptation' },
    { id: 5, icon: '/images/water.png', text: 'Experienced Mentors' }
  ];
  const compensations = [
    {
      id: 1,
      icon: '/images/circle.png',
      title: 'Recognization',
      description: 'Recognizing the importance of fair and flexible compensation aligning with your training business requirement.'
    },
    {
      id: 2,
      icon: '/images/m7.png',
      title: 'Utilization',
      description: 'At Talentron, we truly appreciate the significance of your time and dedication. We wholeheartedly embrace transparency as a guiding force that defines and shapes our commitment to stakeholders.'
    },
    {
      id: 3,
      icon: '/images/money.png',
      title: 'Compensation',
      description: 'Through our revenue-sharing model, you have the opportunity to earn a substantial income every month.'
    }
  ];
  return (
    <>
      <div className="pro-main">
        <div className="pro-img">
          <img src="/images/monk.png" className="img-fluid" alt="Monk" />
        </div>
        <div className="pro-img1">
          <img src="/images/hhealth.png" alt="Health" />
        </div>
        <div className="upper-text11">
          <div className="call-text11">
            <div className="frame4">
              <img src="/images/frame4.png" alt="Frame" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF' }}> Who are we </span>
          </div>
          <div className="call-text-11">
            <span style={{ fontSize: '2.125rem', fontWeight: '700', color: '#FFFFFF' }}>Hi training Partner</span>
            <br />
            <span style={{ fontSize: '2.125rem', fontWeight: '700', color: '#006CBB' }}>
              You have enthusiastic in Training?
            </span>
          </div>
          <div className="call-text-21">
            <span style={{ margin: '0', padding: '0', color: '#FFFFFF', fontSize: '14px', fontWeight: '400' }}>
              Lorem ipsum, or lipsum as it is sometimes known, is{' '}
              <p style={{ margin: '0px', padding: '0' }}>dummy text used in laying out print, graphic or web designs.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="pro-sponsors">
        <div className="pro-sponsors-main">
          {sponsors.map((sponsor) => (
            <div className="in-sponsors" key={sponsor.id}>
              <img src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="talentron-container">
        <div className="talentron-header">
          <h1 className="talentron-title" style={{ fontSize: '24px', fontWeight: '700' }}>
            Explore Talentron Training Community
          </h1>
          <p className="talentron-subtitle" style={{ fontSize: '14px', fontWeight: '400', margin: '0', padding: '0' }}>
            Connect With Professionals
          </p>
        </div>
        <div className="talentron-content">
          <div className="talentron-image-wrapper">
            <img src="/images/ooo.png" alt="Laptop" className="talentron-main-image img-fluid" />
            <div className="talentron-badge joining-badge">
              <img src="/images/g7.png" className="talentron-badge-icon img-fluid" alt="Badge" />
              <span>Joining</span>
            </div>
          </div>
          <div className="talentron-description">
            <h2 className="talentron-description-title" style={{ fontSize: '20px', fontWeight: '700' }}>
              Build Global Training Community
            </h2>
            <p className="talentron-description-text" style={{ fontSize: '16px', fontWeight: '400' }}>
              At Talentron, our constant endeavor is to create a network of world-class trainers and industry experts
              who, in turn, create high-quality courseware that resonates with professionals globally, across domains
              such as,
            </p>
            <div className="talentron-skills">
              <div className="talentron-left-skills">
                <ul>
                  {skills.left.map((skill, index) => (
                    <li key={index}>
                      <img src="/images/ttt.png" alt="tick" className="talentron-tick-icon" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="talentron-right-skills">
                <ul>
                  {skills.right.map((skill, index) => (
                    <li key={index}>
                      <img src="/images/ttt.png" alt="tick" className="talentron-tick-icon" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box666">
        {benefits.map((benefit) => (
          <div className="small-box666" key={benefit.id}>
            <img src={benefit.icon} alt={benefit.text} />
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>
      <div className="dddx">
        <div className="dddx-text">
          <span style={{ fontSize: '24px', fontWeight: '700' }}>Our Compensation</span>
          <p style={{ fontSize: '14px', fontWeight: '400', margin: '0', padding: '0' }}>Substantial Income</p>
        </div>
        <div className="threebox">
          {compensations.map((comp) => (
            <div className="threebox-min" key={comp.id}>
              <img src={comp.icon} alt={comp.title} />
              <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '13px', marginLeft: '24px' }}>
                {comp.title}
              </span>
              <p style={{ fontSize: '16px', fontWeight: '400', marginTop: '0', padding: '0', marginLeft: '24px' }}>
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Accordion />
    </>
  );
};
export default TrainingPartner;
