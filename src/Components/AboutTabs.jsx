import React, { useState } from 'react';

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('Our Commitment');
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { id: 'Our Commitment', title: 'Our Commitment' },
    { id: 'Our Context', title: 'Our Context' },
    { id: 'Our Beliefs', title: 'Our Beliefs' },
    { id: 'Our Roadmap', title: 'Our Roadmap' }
  ];

  const contentMap = {
    'Our Commitment': {
      title: 'Fostering Lasting Connections',
      description: 'We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.',
      image: '/assets/images/about-image2.png'
    },
    'Our Context': {
      title: 'Shaping Future-Focused Relationships',
      description: 'We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.',
      image: '/assets/images/about-image3.png'
    },
    'Our Beliefs': {
      title: 'Committed to the Impact We Have on Every Life',
      description: 'Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.',
      image: '/assets/images/about-image4.png'
    },
    'Our Roadmap': {
      title: 'Build and Share Knowledge Pathways',
      description: 'Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization',
      image: '/assets/images/about-image5.png'
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    setCurrentIndex(newIndex);
    setActiveTab(tabs[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setActiveTab(tabs[newIndex].id);
  };

  return (
    <section className="wyreflow-section-container">
      <h1 className="wyreflow-section-title">Wyreflow at a Glance</h1>
      
      <div className="wyreflow-tab-container">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`tab-${tab.id.toLowerCase().replace(' ', '-')}`}
            className={`wyreflow-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              setCurrentIndex(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="wyreflow-content-container">
        <div className="wyreflow-content">
          <div>
            <h2>{contentMap[activeTab].title}</h2>
            <p>{contentMap[activeTab].description}</p>
          </div>
          <img src={contentMap[activeTab].image} alt={activeTab} />
        </div>
      </div>

      <div className="tab-scroller">
        <div className="tab-counter">
          <p id="starting-tab-idx">
            {(currentIndex + 1).toString().padStart(2, '0')}
          </p>
          <div></div>
          <p>{tabs.length.toString().padStart(2, '0')}</p>
        </div>

        <div className="left-right-btn">
          <i className='bx bx-chevron-left' id="left-btn" onClick={handlePrevious}></i>
          <i className='bx bx-chevron-right' id="right-btn" onClick={handleNext}></i>
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;