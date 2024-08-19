import React, { useState } from 'react';
import '../styles/FAQPage.css';



const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is HealthCare Connect?', answer: 'HealthCare Connect is a platform that connects patients with healthcare professionals for appointments, consultations, and more.' },
    { question: 'How do I schedule an appointment?', answer: 'You can schedule an appointment by visiting the "Schedule Appointment" section on our website or app.' },
    { question: 'Can I cancel or reschedule my appointment?', answer: 'Yes, you can cancel or reschedule your appointment through your dashboard or by contacting our support.' },
    { question: 'How do I manage my profile?', answer: 'You can manage your profile details through the "Manage Profile" section on your dashboard.' },
    { question: 'Is my data secure?', answer: 'Yes, we prioritize your privacy and data security. All your information is encrypted and stored securely.' }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>If you have any other questions, feel free to contact us.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : 'hide'}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default FAQPage;
