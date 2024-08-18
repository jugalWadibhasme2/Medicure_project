import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import doctorImage1 from '../Images/Doctor1.jpg';
import patientImage1 from '../Images/Patient1.jpg';
import appointmentImage from '../Images/Appointment1.jpg';
import consultationImage from '../Images/Consultation1.jpg';
import healthServiceImage from '../Images/HealthService1.jpg';
import '../styles/Home.css';

const Home = () => {
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.section-image');
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          image.classList.add('zoom-in');
          image.classList.remove('zoom-out');
        } else {
          image.classList.add('zoom-out');
          image.classList.remove('zoom-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on initial render to check if images are in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Carousel Section */}
      <section className="hero">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={doctorImage1} alt="Doctor Image 1" />
            <Carousel.Caption>
              <div className="carousel-content">
                <h3>Welcome to HealthCare Connect</h3>
                <p>Connecting patients with the best doctors for quality healthcare.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={patientImage1} alt="Patient Image 1" />
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

      {/* Quick Navigation Buttons Section */}
      <section className="quick-navigation">
        <h2>Quick Access</h2>
        <div className="button-group">
          <Link to="/schedule-appointment" className="quick-nav-button">
            Schedule Appointment
          </Link>
          {user && user.role === 'patient' && (
            <Link to="/patient-dashboard" className="quick-nav-button">
              Patient Dashboard
            </Link>
          )}
          {user && user.role === 'doctor' && (
            <Link to="/doctor-dashboard" className="quick-nav-button">
              Doctor Dashboard
            </Link>
          )}
          {!user && (
            <Link to="/login" className="quick-nav-button">
              Login
            </Link>
          )}
        </div>
      </section>

      {/* Sections for Patients, Doctors, Appointments, Consultations, Health Services */}
      <section className="sections">
        <div className="section">
          <img className="section-image" src={patientImage1} alt="Patients" />
          <div className="section-content">
            <h2>Patients</h2>
            <p>Access quality healthcare and manage your appointments efficiently.</p>
            <Link to="/patient-dashboard" className="section-link">Visit Patient Dashboard</Link>
          </div>
        </div>
        <div className="section reverse">
          <img className="section-image" src={doctorImage1} alt="Doctors" />
          <div className="section-content">
            <h2>Doctors</h2>
            <p>Join our network to provide expert care and consultation to patients.</p>
            <Link to="/doctor-dashboard" className="section-link">Visit Doctor Dashboard</Link>
          </div>
        </div>
        <div className="section">
          <img className="section-image" src={appointmentImage} alt="Appointments" />
          <div className="section-content">
            <h2>Appointments</h2>
            <p>Book and manage your medical appointments with ease.</p>
            <Link to="/appointments" className="section-link">View Appointments</Link>
          </div>
        </div>
        <div className="section reverse">
          <img className="section-image" src={consultationImage} alt="Consultations" />
          <div className="section-content">
            <h2>Consultations</h2>
            <p>Get professional advice from our network of experienced doctors.</p>
          </div>
        </div>
        <div className="section">
          <img className="section-image" src={healthServiceImage} alt="Health Services" />
          <div className="section-content">
            <h2>Health Services</h2>
            <p>Explore a wide range of healthcare services tailored to your needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
