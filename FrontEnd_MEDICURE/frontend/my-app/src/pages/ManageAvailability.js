import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './ManageAvailability.css';

const ManageAvailability = () => {
  const [availability, setAvailability] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/doctor/manage-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ availability }),
      });

      if (response.ok) {
        setMessage('Availability updated successfully.');
      } else {
        setError('Failed to update availability.');
      }
    } catch (err) {
      setError('An error occurred.');
    }
  };

  return (
    <Container className="manage-availability">
      <h2 className="text-center mb-4">Manage Availability</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="formAvailability">
          <Form.Label>Available Slots</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter available time slots"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Update Availability</Button>
      </Form>
    </Container>
  );
};

export default ManageAvailability;
