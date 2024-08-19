import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctorImage from '../Images/Doctor.jpg';
import patientImage from '../Images/Patient.jpg';
import appointmentImage from '../Images/Appointment.jpg';
import consultationImage from '../Images/Consultation.jpg';
import healthServiceImage from '../Images/HealthService.jpg';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.section-image');
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          image.classList.add('fade-in');
          image.classList.remove('fade-out');
        } else {
          image.classList.add('fade-out');
          image.classList.remove('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on initial render to check if images are in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="home-container">
      {/* Carousel Section */}
      <section className="hero">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={doctorImage} alt="Doctor Image" />
            <Carousel.Caption>
              <div className="carousel-content">
                <h3>Welcome to HealthCare Connect</h3>
                <p>Connecting patients with the best doctors for quality healthcare.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={patientImage} alt="Patient Image" />
            <Carousel.Caption>
              <div className="carousel-content">
                <h3>Your Health, Our Priority</h3>
                <p>Providing seamless appointment booking and consultation services.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={appointmentImage} alt="Appointment Image" />
            <Carousel.Caption>
              <div className="carousel-content">
                <h3>Easy Appointment Booking</h3>
                <p>Book appointments with your preferred doctors in just a few clicks.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Images Section */}
      <section className="images-section">
        <img className="scroll-image" src={doctorImage} alt="Doctors" />
        <img className="scroll-image" src={patientImage} alt="Patients" />
        <img className="scroll-image" src={appointmentImage} alt="Appointments" />
        <img className="scroll-image" src={consultationImage} alt="Consultations" />
        <img className="scroll-image" src={healthServiceImage} alt="Health Services" />
      </section>

      {/* Quick Navigation Buttons Section */}
      <section className="quick-navigation">
        <h2>Quick Access</h2>
        <div className="button-group">
          <Link to="/schedule-appointment" className="quick-nav-button animated-button">
            Schedule Appointment
          </Link>
          <Link to="/patient-dashboard" className="quick-nav-button animated-button">
            Patient Dashboard
          </Link>
          <Link to="/doctor-dashboard" className="quick-nav-button animated-button">
            Doctor Dashboard
          </Link>
          <Link to="/view-appointments" className="quick-nav-button animated-button">
            View Appointments
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
