import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/wyreflow-logohigh.png" alt="Wyreflow Logo" />
        </Link>
      </div>

      <nav className="navbar">
        <div 
          className="hamburger" 
          id="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className='bx bx-menu'></i>
        </div>

        <ul 
          id="navbar-list-item"
          className={mobileMenuOpen ? 'active' : ''}
        >
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              Services <i className='bx bxs-chevron-down'></i>
            </a>
            <div className="dropdown-content services-dropdown">
              <div className="dropdown-grid">
                <Link to="/artifical">Artificial Intelligence</Link>
                <Link to="/cloud">Cloud</Link>
                <Link to="/consulting">Consulting</Link>
                <Link to="/cybersec">Cybersecurity</Link>
                <Link to="/businessoper">Cognitive Business Operations</Link>
                <Link to="/data">Data & Analytics</Link>
                <Link to="/enterprises">Enterprise Solutions</Link>
                <Link to="/network">Network Solutions & Services</Link>
              </div>
            </div>
          </li>
          <li><Link to="/about" style={{ color: 'white' }}>About Us</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              Industries <i className='bx bxs-chevron-down'></i>
            </a>
            <div className="dropdown-content industries-dropdown">
              <div className="dropdown-grid">
                <Link to="/e-commerce">E-commerce</Link>
                <Link to="/transport">Transportation & Logistics</Link>
                <Link to="/research">Research and Development</Link>
                <Link to="/healthcare">HealthCare</Link>
                <Link to="/consulting">Consulting</Link>
                <Link to="/software-platforms">Software and Platforms</Link>
                <Link to="/ed-tech">Ed-tech/Education</Link>
                <Link to="/govt">Government & Public Services</Link>
                <Link to="/recruitment">Recruitment</Link>
                <Link to="/communications">Communications and Media</Link>
                <Link to="/high-tech">High Tech</Link>
                <Link to="/banking">Banking</Link>
              </div>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;