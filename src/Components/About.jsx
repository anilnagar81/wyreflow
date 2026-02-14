import React, { useState, useEffect } from 'react';
import './about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutTabs from '../components/AboutTabs';
import VisionPurposeValue from '../components/VisionPurposeValue';
import FAQ from '../components/FAQ';
import Loader from '../components/Loader';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      
      {/* Section 1 */}
      <section id="About">
        <div className="about-us-container">
          <div className="about-us-container-content">
            <div className="left-heading">
              <p>About</p>
              <h1>Building Digital Pathways for Success</h1>
            </div>
            <div className="right-subheading">
              <h3>
                At Wyreflow, we create innovative digital solutions that drive 
                growth and transform your business for long-term success.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Tabs */}
      <AboutTabs />

      {/* Section 3 - Vision, Purpose, Value */}
      <VisionPurposeValue />

      {/* Section 4 - Banner */}
      <section>
        <div className="banner-section">
          <div className="banner-content">
            <h1>Where Technology Meets Vision</h1>
            <p>Combining technology and vision to drive innovation and growth.</p>
            <a href="/career">
              <button className="btn">Join us</button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 - FAQ */}
      <FAQ />

      <Footer />
    </>
  );
};

export default About;