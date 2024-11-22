import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
function Navbar() {
  const menuRef = useRef(false); 
  const navItems = [
    { name: 'Home', path: '/' },
    { name: "Training Program's", path: '/TrainingProgram' },
    { name: "Training Partner's", path: '/TrainingPartner' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];
  const toggleMenu = () => {
    menuRef.current = !menuRef.current;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active', menuRef.current);
    }
  };
  return (
    <div className="navbar">
      <div className="nnavbar">
        <div className="logo">
          <img src="/images/talentron.png" alt="Logo" />
        </div>
        <div className="logo1">
          <img src="/images/minit.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                style={{ textDecoration: 'none' }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <img src="/images/hamburger.png" width="16px" height="10px" alt="Menu" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
