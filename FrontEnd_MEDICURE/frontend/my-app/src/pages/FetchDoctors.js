import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FetchDoctors.css';

const FetchDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctors/all');
        console.log('Fetched Doctors:', response.data); // Debugging line
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookClick = (doctorId) => {
    // Simulate booking and show success message
    alert('Appointment booked successfully');
    // Redirect to PatientDashboard after a short delay
    setTimeout(() => {
      navigate('/patientdashboard'); // Redirect to PatientDashboard
    }, 1000); // 1000 milliseconds delay before redirect
  };

  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Contact Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contactNumber}</td>
              <td>
                <button className="book-button" onClick={() => handleBookClick(doctor.id)}>Book Appointment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDoctors;
