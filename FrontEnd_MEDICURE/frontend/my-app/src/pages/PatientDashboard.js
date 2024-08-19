import React, { useContext } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleAction = (action) => {
    switch (action) {
      case 'viewAppointments':
        navigate('/view-appointments');
        break;
      case 'scheduleAppointment':
        navigate('/schedule-appointment');
        break;
      case 'manageProfile':
        navigate('/manage-profile');
        break;
      case 'logout':
        logout();
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <Container className="patient-dashboard">
      <h2 className="text-center mb-4">Patient Dashboard</h2>
      
      <Form className="patient-info-form">
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={user.firstName}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={user.lastName}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            value={user.contact}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={user.address}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="text"
            value={user.dob}
            readOnly
          />
        </Form.Group>

        <div className="action-buttons mt-4">
          <Button variant="primary" size="sm" onClick={() => handleAction('viewAppointments')}>
            View Appointments
          </Button>
          <Button variant="success" size="sm" onClick={() => handleAction('scheduleAppointment')}>
            Schedule Appointment
          </Button>
          <Button variant="info" size="sm" onClick={() => handleAction('manageProfile')}>
            Manage Profile
          </Button>
          <Button variant="danger" size="sm" onClick={() => handleAction('logout')}>
            Logout
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PatientDashboard;
