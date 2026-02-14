import React, { useState } from 'react';

const VisionPurposeValue = () => {
  const [activeItem, setActiveItem] = useState('Vision');
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 'Vision', title: 'Vision' },
    { id: 'Purpose', title: 'Purpose' },
    { id: 'Value', title: 'Value' }
  ];

  const contentMap = {
    'Vision': {
      image: '/assets/images/about-image-03.png',
      description: 'We will continue to Rise to be an agile, customer-centric, and purpose-led company, delivering best-in-class technology solutions to our stakeholders.'
    },
    'Purpose': {
      image: '/assets/images/about-perpose.png',
      description: 'At Wyreflow, our vision is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world. We aim to drive growth, efficiency, and sustainability through cutting-edge technology and strategic insights.'
    },
    'Value': {
      image: '/assets/images/about-vision.png',
      description: 'Wyreflow is built on innovation, integrity, and long-term partnerships. We\'re committed to delivering sustainable, impactful solutions while fostering continuous learning and collaboration, ensuring our clients stay ahead in the ever-evolving digital world.'
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    setCurrentIndex(newIndex);
    setActiveItem(items[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setActiveItem(items[newIndex].id);
  };

  return (
    <section>
      <div className="container">
        <div className="arrow-btn">
          <img 
            src="/assets/images/about-leftarrow.png" 
            id="left-arrow" 
            alt="Previous"
            onClick={handlePrevious}
          />
          <img 
            src="/assets/images/about-rightarrow.png" 
            id="right-arrow" 
            alt="Next"
            onClick={handleNext}
          />
        </div>

        <div className="text-section-content">
          <div className="text-section-container">
            {items.map((item) => (
              <div
                key={item.id}
                id={item.id.toLowerCase()}
                className={`text-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveItem(item.id);
                  setCurrentIndex(items.findIndex(i => i.id === item.id));
                }}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="img-content-container">
            <div className="content">
              <div className="content-box">
                <div className="image-container">
                  <img 
                    id="image" 
                    src={contentMap[activeItem].image} 
                    alt={`${activeItem} Image`} 
                  />
                </div>
                <div className="content-para">
                  <p>{contentMap[activeItem].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPurposeValue;