import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';
const Footer = () => {
  const footerData = {
    footerLinks: [
      { text: "Home", path: "/" },
      { text: "Training Program's", path: "/TrainingProgram" },
      { text: "Training Partner's", path: "/TrainingPartner" },
      { text: "About Us", path: "/about" },
      { text: "Contact Us", path: "/contact" },
    ],
    jobRoles: [
      "Software Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Automation Tester",
      "Manual Tester",
    ],
    footerFeatures: [
      "Features",
      "Client",
      "Training & Support",
      "Help Center",
      "Contact us for Help",
    ],
    socialLinks: [
      { icon: '/images/instagram.png', alt: 'Instagram' },
      { icon: '/images/facebook.png', alt: 'Facebook' },
      { icon: '/images/tooter.png', alt: 'Twitter', style: { width: '23.33px', height: '25px' } },
      { icon: '/images/youtube.png', alt: 'YouTube', style: { width: '18.33px', height: '16px' } },
      { icon: '/images/linkedin.png', alt: 'LinkedIn', style: { width: '18.33px', height: '16px' } },
    ],
  };
  return (
    <>
      <footer className="footer">
        <div className="footer1">
          <div className="foot-text1">
            <span className="log">
              <div className="bluec"></div> Talentron
            </span>
            <p>
              Founded by Solomon, whose extensive 20-<br />
              years career spanned various domains.<br />
              Talentron was born out of a passion for <br />
              building high-performing teams and <br />
              unlocking their full potential
            </p>
            <p style={{ marginTop: '31px' }}>
              <img src="/images/phone.png" alt="Phone" /> +91-1234567890 /9087654321
            </p>
            <p>
              <img src="/images/fluent-mail.png" alt="Email" /> talentron2024@gmail.com
            </p>
          </div>
          <div className="foot-text">
            {footerData.footerLinks.map((link, index) => (
              <p key={index}>
                <NavLink to={link.path} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                  {link.text}
                </NavLink>
              </p>
            ))}
          </div>
          <div className="foot-text">
            {footerData.jobRoles.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
          <div className="foot-text">
            {footerData.footerFeatures.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
          </div>
          <div className="foot-text">
            <p>Company</p>
            <p>Pricing</p>
            <p>Meet the team</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="straightlinecontainer">
          <hr className="straightline" />
          <img src="/images/upperarrow.png" className="upperarrow" alt="Arrow" />
        </div>
        <div className="follow">
          <div className="follow1">
            <div className="follow-start">
              Follow Us
              {footerData.socialLinks.map((link, index) => (
                <div className="dd" key={index}>
                  <img src={link.icon} alt={link.alt} style={link.style} />
                </div>
              ))}
            </div>
            <div className="follow-center">
              @ 2024 Talentron, All rights reserved
            </div>
            <div className="follow-right">
              Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
