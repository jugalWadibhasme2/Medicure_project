import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './ScheduleAppointment.css';

const ScheduleAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [address, setAddress] = useState(''); // New state for address
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/doctor/schedule-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, time, patientName, phoneNumber, address }), // Include new fields in request body
      });

      if (response.ok) {
        setMessage('Appointment scheduled successfully.');
        setDate('');
        setTime('');
        setPatientName('');
        setPhoneNumber(''); // Clear phone number
        setAddress(''); // Clear address
      } else {
        setError('Failed to schedule appointment.');
      }
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <Container className="schedule-appointment">
      <h2 className="text-center mb-4">Schedule Appointment</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPatientName">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient's name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Schedule Appointment</Button>
      </Form>
    </Container>
  );
};

export default ScheduleAppointment;
