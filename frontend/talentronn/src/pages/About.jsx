import React from 'react';
import '../styles/about.css';
const About = () => {
    const missionText = [
        "Elevate our workforce by offering comprehensive training in the latest technologies and associated ecosystems.",
        "Empower our team to emerge as dynamic solution providers for global organizations, ensuring they are well-equipped to navigate the challenges of the rapidly evolving business landscape with innovation and expertise.",
        "Foster the development of essential soft skills and decision-making abilities."
    ];
    const visionText = [
        "We pledge to create a positive and diverse learning environment for our students that fosters continuous growth, encouraging and motivating them to reach their full potential.",
        "We are dedicated to delivering unparalleled value to our customers through the highest ethical standards, unwavering transparency, and cutting-edge technology expertise, empowering them to scale their businesses with enduring values."
    ];
    const values = [
        {
            image: '/images/ii.png',
            title: 'Integrity',
            description: 'We strive to cultivate an environment where integrity is a key value and a guiding principle that shapes our interactions with clients, partners, employees, and the communities we serve. Our dedication to integrity is embedded in the fabric of our culture, driving us to consistently deliver excellence and exceed expectations.'
        },
        {
            image: '/images/tt.png',
            title: 'Transparency',
            description: 'We wholeheartedly embrace transparency as a guiding force that defines and shapes our commitment to stakeholders. Our goal is to nurture a culture of openness, trust, and accountability in all our endeavors.'
        },
        {
            image: '/images/customer.png',
            title: 'Customer Satisfaction',
            description: 'We are committed to a customer-centric approach in every aspect of our business. Our team is empowered and encouraged to go above and beyond to ensure customer delight. We perceive challenges as opportunities to showcase our commitment to customer satisfaction, turning each experience into a positive and memorable one.'
        },
        {
            image: '/images/otc.png',
            title: 'Equality',
            description: 'We are dedicated to dismantling barriers and biases, ensuring that our commitment to equality is reflected in our hiring practices, professional development opportunities, and organizational culture. Our aim is to create an environment where diverse voices are not only heard but celebrated, contributing to a rich tapestry of ideas and innovation.'
        },
        {
            image: '/images/ok.png',
            title: 'Community',
            description: 'We are committed to actively engaging with and giving back to the communities that surround us. Through meaningful partnerships, social initiatives, and volunteer efforts, our goal is to make a positive impact on the lives of those we serve. We extend beyond business to social responsibility, aspiring to be a force for good in the places we call home.'
        },
        {
            image: '/images/kj.png',
            title: 'Another Value',
            description: 'We wholeheartedly embrace transparency as a guiding force that defines and shapes our commitment to stakeholders. Our goal is to nurture a culture of openness, trust, and accountability in all our endeavors.'
        }
    ];
    return (
        <>
          <div className="iom">
                <img src='/images/monk.png' className='img-fluid' alt="Background" />
                <div className="upper-text">
                    <div className="call-text">
                        <div className="frame4">
                            <img src='/images/frame4.png' alt="Frame" />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF' }}> Who are we </span>
                    </div>
                    <div className="call-text-1">
                        <span style={{ fontSize: '34px', fontWeight: '700', color: '#FFFFFF' }}>About Us !</span><br />
                        <span style={{ fontSize: '34px', fontWeight: '700', color: '#006CBB' }}>Our Talentron</span>
                    </div>
                    <div className="call-text-2">
                        <span style={{ margin: '0', padding: '0', color: '#FFFFFF', fontSize: '14px', fontWeight: '400' }}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
                            designs.
                        </span>
                    </div>
                </div>
                <div className="hiicon">
                    <img src='/images/health.png' alt="Health Icon" />
                </div>
            </div>
            <div className="mncontainer">
                <div className="hicontext">
                    <span>Welcome to Talentron</span>
                    <p>Connect With Professionals</p>
                </div>
                <div className="main-mncontainer">
                    <div className="imj">
                        <img src='/images/newabout.png' className='img-fluid' alt="About Talentron" />
                    </div>
                    <div className="mnbox">
                        <span style={{ fontSize: '20px', fontWeight: '700' }}>About Talentron</span>
                        <div className="bot" style={{ width: '352px', height: 'auto' }}>
                            <p style={{ fontSize: '16px', fontWeight: '400' }}>
                                Welcome to Talentron, where we're committed to empowering the next generation of technology leaders.
                                <span style={{ fontWeight: '600', fontSize: '14px' }}> “Founded by Solomon, whose extensive 20-year career spanned various domains”</span>,
                                Talentron was born out of a passion for building high-performing teams and unlocking their full potential.
                            </p>
                            <div className='newotc' style={{ width: '585px', height: '108px', display: 'flex', alignItems: 'center', backgroundColor: '#FAFAFA' }}>
                                <img src='/images/linkedinn.png' style={{ width: '45px', height: '45px', margin: '0', padding: '0' }} alt="LinkedIn Icon" />
                                <span style={{ fontSize: '14px', marginLeft: '25px' }}>
                                    Solomon's journey highlighted the time and effort required to find the right talent for specific roles. His experience underscored the importance of minimizing turnover and maximizing workforce efficiency.
                                    At Talentron, we understand the challenges of hiring fresh talent.
                                </span>
                            </div>
                            <div className='newotc1' style={{ fontSize: '14px', marginRight: '0px', marginLeft: '68px', width: '500px' }}>
                                That's why we offer a comprehensive solution, from recruitment and technical screening to interviewing, designed to make the hiring process efficient and effective.
                            </div>
                        </div>
                    </div>
                    <div className="jk" style={{ marginLeft: '36px' }}>
                        <img src='/images/solomon.png' style={{ width: '194px', height: '184px' }} alt="Founder Solomon" />
                    </div>
                </div>
            </div>
            <div className="values-wrapper">
                <div className="header">
                    <h1>Founding Values</h1>
                    <p>Skill Development</p>
                </div>
                <div className="values-container">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <img src={value.image} alt={`${value.title} Icon`} />
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="no-vol">
                <img src='/images/ret.png' style={{ width: '100%' }} className='img-fluid img-fluid1' alt="Background" />
                <div className="no-vol-box">
                    <div className="no-vol-box-mission">
                        <div className="no-vol-box-mission-image">
                            <img src='/images/ourmission.png' alt="Our Mission" />
                        </div>
                        <div className="no-vol-box-mission-text">
                            <span>Our Mission</span>
                            {missionText.map((text, idx) => (
                                <p key={idx}><img src='/images/smalltock.png' alt="Tick" /> {text}</p>
                            ))}
                        </div>
                    </div>
                    <div className="no-vol-box-line"></div>
                    <div className="no-vol-box-vision">
                        <div className="no-vol-box-vision-image">
                            <img src='/images/vision.png' alt="Our Vision" />
                        </div>
                        <div className="no-vol-box-vision-text">
                            <span>Our Vision</span>
                            {visionText.map((text, idx) => (
                                <p key={idx}><img src='/images/smalltock.png' alt="Tick" /> {text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
