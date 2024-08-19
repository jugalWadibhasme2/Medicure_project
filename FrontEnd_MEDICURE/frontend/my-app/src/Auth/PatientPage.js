import React, { useState } from 'react';
import { Container, Form, Button, Alert, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import './PatientPage.css'; // Ensure you have a CSS file for styling

const PatientPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState('');
  const [registerAddress, setRegisterAddress] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('/api/patient/login', {
        email: loginEmail,
        password: loginPassword,
      });

      if (response.status === 200) {
        setMessage('Login successful.');
        // Handle successful login (e.g., redirect or update context)
      } else {
        setError('Failed to login.');
      }
    } catch (err) {
      setError('An error occurred.');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('/api/patient/register', {
        firstName: registerFirstName,
        lastName: registerLastName,
        email: registerEmail,
        password: registerPassword,
        phoneNumber: registerPhoneNumber,
        address: registerAddress,
      });

      if (response.status === 201) {
        setMessage('Registration successful.');
        // Handle successful registration (e.g., redirect or update context)
      } else {
        setError('Failed to register.');
      }
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <Container className="patient-page">
      <h2 className="text-center mb-4">Patient Login / Registration</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Tabs
        id="patient-page-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleLoginSubmit} className="mt-3">
            <Form.Group controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-custom">
              Login
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="register" title="Register">
          <Form onSubmit={handleRegisterSubmit} className="mt-3">
            <Form.Group controlId="registerFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={registerFirstName}
                onChange={(e) => setRegisterFirstName(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="registerLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={registerLastName}
                onChange={(e) => setRegisterLastName(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="registerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="registerPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={registerPhoneNumber}
                onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Form.Group controlId="registerAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={registerAddress}
                onChange={(e) => setRegisterAddress(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-custom">
              Register
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PatientPage;
