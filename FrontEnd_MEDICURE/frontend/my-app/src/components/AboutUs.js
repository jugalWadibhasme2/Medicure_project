import React from 'react';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At HealthCare Connect, our mission is to bridge the gap between patients and doctors through seamless online connectivity. We aim to provide a user-friendly platform that facilitates easy access to healthcare services, appointment bookings, and patient management, ensuring that everyone receives timely and effective medical care.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our vision is to revolutionize healthcare by leveraging technology to create a connected and efficient ecosystem. We envision a future where patients and doctors can interact effortlessly, manage their healthcare needs, and access vital information with just a few clicks. We strive to make healthcare accessible and convenient for everyone, everywhere.
        </p>
        <h2>Our Team</h2>
        <p>
          Our dedicated team of professionals is committed to enhancing the healthcare experience. Comprised of experienced developers, healthcare experts, and customer support specialists, we work tirelessly to improve our platform and ensure that it meets the highest standards of quality and reliability.
        </p>
      </section>
    </div>
  );
};



export default AboutUsPage;
