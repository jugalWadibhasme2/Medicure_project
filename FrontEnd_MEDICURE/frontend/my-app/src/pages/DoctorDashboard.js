import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleAction = (action) => {
    switch (action) {
      case 'viewAppointments':
        navigate('/doctor/view-appointments');
        break;
      case 'scheduleAppointment':
        navigate('/doctor/schedule-appointment');
        break;
      case 'manageAvailability':
        navigate('/doctor/manage-availability');
        break;
      case 'deleteProfile':
        navigate('/doctor/delete-profile');
        break;
      default:
        break;
    }
  };

  return (
    <Container className="doctor-dashboard">
      <h2 className="text-center mb-4">Doctor Dashboard</h2>
      <Row className="mt-3">
        <Col md={6} className="mb-3">
          <Button variant="primary" onClick={() => handleAction('viewAppointments')}>
            View Appointments
          </Button>
        </Col>
        <Col md={6} className="mb-3">
          <Button variant="success" onClick={() => handleAction('scheduleAppointment')}>
            Schedule New Appointment
          </Button>
        </Col>
        <Col md={6} className="mb-3">
          <Button variant="warning" onClick={() => handleAction('manageAvailability')}>
            Manage Availability
          </Button>
        </Col>
        <Col md={6} className="mb-3">
          <Button variant="danger" onClick={() => handleAction('deleteProfile')}>
            Delete Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDashboard;
