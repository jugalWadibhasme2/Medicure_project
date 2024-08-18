import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Auth/ForgotPassword.css'; // Custom CSS

const ForgotPasswordPage = ({ role }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      // Adjust the API endpoint according to the role (doctor or patient)
      const response = await fetch(`/api/${role}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          `Password reset instructions have been sent to your ${role} email.`
        );
        // Redirect based on role
        setTimeout(() => navigate(`/${role}/login`), 3000); 
      } else {
        setError(data.message || `Failed to send reset instructions. Please check your ${role} email.`);
      }
    } catch (err) {
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="forgot-password-container">
      <h2 className="text-center mb-4">
        {role === 'patient' ? 'Patient' : 'Doctor'} Forgot Password
      </h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleForgotPassword}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder={`Enter your ${role} email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Instructions'}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPasswordPage;
