import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      question: 'What does Wyreflow do?',
      answer: 'Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI.'
    },
    {
      question: 'What is the future for Wyreflow?',
      answer: 'Wyreflow is constantly innovating and expanding its services to meet the needs of both US clients and government projects.'
    },
    {
      question: 'How can Wyreflow help my business grow?',
      answer: 'By leveraging cutting-edge technology, Wyreflow can provide tailored solutions that help businesses scale and succeed in their respective industries.'
    },
    {
      question: 'What industries does Wyreflow serve?',
      answer: 'Wyreflow serves various industries including healthcare, finance, manufacturing, and more.'
    }
  ];

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question"
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className="icon">
                <i className='bx bx-down-arrow-alt'></i>
              </span>
            </div>
            {openItems.includes(index) && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;