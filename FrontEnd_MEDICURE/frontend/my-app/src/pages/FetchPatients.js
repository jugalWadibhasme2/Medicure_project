import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FetchPatients.css';

const FetchPatients = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/patients/all'); // Replace with your API endpoint
        console.log('Fetched Patients:', response.data); // Debugging line
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleViewDetailsClick = (patientId) => {
    // Navigate to patient details page with patient ID
    navigate(`/patient-details/${patientId}`);
  };

  return (
    <div className="patient-list">
      <h2>Available Patients</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.email}</td>
              <td>{patient.contactNumber}</td>
              <td>
                <button className="view-button" onClick={() => handleViewDetailsClick(patient.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchPatients;
