import React, { useContext } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
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
      
      <Table bordered hover className="patient-info-table">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Contact</th>
            <td>{user.contact}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{user.address}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{user.dob}</td>
          </tr>
        </tbody>
      </Table>

      <div className="action-buttons mt-4">
        <Button variant="primary" onClick={() => handleAction('viewAppointments')}>
          View Appointments
        </Button>
        <Button variant="success" onClick={() => handleAction('scheduleAppointment')}>
          Schedule Appointment
        </Button>
        <Button variant="info" onClick={() => handleAction('manageProfile')}>
          Manage Profile
        </Button>
        <Button variant="danger" onClick={() => handleAction('logout')}>
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default PatientDashboard;
