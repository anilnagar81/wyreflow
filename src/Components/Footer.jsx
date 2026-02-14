import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footer-container">
        <div className="footer-social-container">
          <div className="footer-social-heading">
            <h1>Social</h1>
            <h2>Follow us for the latest update</h2>
          </div>

          <div className="footer-social-media-container">
            <SocialLink 
              href="https://www.facebook.com/wyreflowtechnologies/"
              imgSrc="/assets/images/fb-image.png"
              platform="Facebook"
            />
            <SocialLink 
              href="https://www.instagram.com/wyreflow_technologies/"
              imgSrc="/assets/images/insta-image.png"
              platform="Instagram"
            />
            <SocialLink 
              href="https://www.youtube.com/@WyreflowTechnologies"
              imgSrc="/assets/images/yt-image.png"
              platform="Youtube"
            />
            <SocialLink 
              href="https://www.linkedin.com/company/wyreflow-technologies"
              imgSrc="/assets/images/linkedin-image.png"
              platform="LinkedIn"
            />
          </div>
        </div>

        <div id="footer-middle-line"></div>

        <div className="footer-more-info-container">
          <InfoSection 
            title="Industries"
            links={[
              { to: "/banking", text: "Banking" },
              { to: "/industry-consulting", text: "Consulting" },
              { to: "/communicaton", text: "Communications and Media" },
              { to: "/e-commerce", text: "E-commerce" },
              { to: "/ed-tech", text: "Ed-Tech / Education" },
              { to: "/govt", text: "Government & Public Services" },
              { to: "/healthcare", text: "HealthCare" },
              { to: "/high-tech", text: "High-Tech" },
              { to: "/recrutiment", text: "Recruitment" },
              { to: "/software-platforms", text: "Software and Platforms" },
              { to: "/transport", text: "Transportation & Logistics" }
            ]}
          />

          <InfoSection 
            title="Services"
            links={[
              { to: "/artifical", text: "Artificial Intelligence" },
              { to: "/cloud", text: "Cloud" },
              { to: "/services-consulting", text: "Consulting" },
              { to: "/cybersec", text: "Cybersecurity" },
              { to: "/businessoper", text: "Cognitive Business Operations" },
              { to: "/data", text: "Data & Analytics" },
              { to: "/enterprises", text: "Enterprises solution" },
              { to: "/network", text: "Network Solution and Services" }
            ]}
          />

          <InfoSection 
            title="More Information"
            links={[
              { to: "/about", text: "About us" },
              { to: "/career", text: "Career" },
              { to: "/contact", text: "Contact us" },
              { to: "/privacy", text: "Privacy Notice" },
              { to: "/disclaimer", text: "Terms & Condition" }
            ]}
          />
        </div>

        <div className="footer-last-container">
          <div className="footer-last-content">
            <img src="/assets/images/wyreflow.image.png" alt="company-logo" />
            <p>©️ 2024 Wyreflow. All Rights Reserved</p>
          </div>

          <div className="social-icon-container">
            <SocialIcon href="https://www.facebook.com/wyreflowtechnologies/" imgSrc="/assets/images/fb-image.png" />
            <SocialIcon href="https://www.instagram.com/wyreflow_technologies/" imgSrc="/assets/images/insta-image.png" />
            <SocialIcon href="https://www.youtube.com/@WyreflowTechnologies" imgSrc="/assets/images/yt-image.png" />
            <SocialIcon href="https://www.linkedin.com/company/wyreflow-technologies" imgSrc="/assets/images/linkedin-image.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, imgSrc, platform }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="social-media-content">
      <img src={imgSrc} alt="" className="social-media-img" />
      <div className="social-media-text">
        <img src="/assets/images/wyreflow.image.png" alt="company-logo" />
        <p>{platform}</p>
      </div>
    </div>
  </a>
);

const InfoSection = ({ title, links }) => (
  <div className="more-info-list-item">
    <h2>{title}</h2>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ href, imgSrc }) => (
  <span>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt="" />
    </a>
  </span>
);

export default Footer;