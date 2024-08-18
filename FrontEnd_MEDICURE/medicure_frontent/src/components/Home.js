import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctorImage1 from '../Images/Doctor1.jpg';
import patientImage1 from '../Images/Patient1.jpg';
import appointmentImage from '../Images/Appointment1.jpg';
import consultationImage from '../Images/Consultation1.jpg';
import healthServiceImage from '../Images/HealthService1.jpg';
import '../styles/Home.css'; // Ensure this file exists or adjust as needed

const Home = () => {
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

      {/* Sections for Patients, Doctors, Appointments, Consultations, Health Services */}
      <section className="sections">
        <div className="section">
          <img className="section-image" src={patientImage1} alt="Patients" />
          <div className="section-content">
            <h2>Patients</h2>
            <p>Access quality healthcare and manage your appointments efficiently.</p>
          </div>
        </div>
        <div className="section reverse">
          <img className="section-image" src={doctorImage1} alt="Doctors" />
          <div className="section-content">
            <h2>Doctors</h2>
            <p>Join our network to provide expert care and consultation to patients.</p>
          </div>
        </div>
        <div className="section">
          <img className="section-image" src={appointmentImage} alt="Appointments" />
          <div className="section-content">
            <h2>Appointments</h2>
            <p>Book and manage your medical appointments with ease.</p>
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
