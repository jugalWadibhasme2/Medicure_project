import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RoleSelection from './pages/Auth/RoleSelection';
import PatientDashboard from './pages/Patient/PatientDashboard';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientAppointments from './pages/Patient/PatientAppointments';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import { AuthProvider } from './Auth/AuthContext'; // Authentication Context Provider
import ProtectedRoute from './components/ProtectedRoute'; // ProtectedRoute Component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/role-selection" element={<RoleSelection />} />

          {/* Protected Routes */}
          <Route
            path="/patient-dashboard"
            element={<ProtectedRoute role="patient"><PatientDashboard /></ProtectedRoute>}
          />
          <Route
            path="/patient-appointments"
            element={<ProtectedRoute role="patient"><PatientAppointments /></ProtectedRoute>}
          />
          <Route
            path="/doctor-dashboard"
            element={<ProtectedRoute role="doctor"><DoctorDashboard /></ProtectedRoute>}
          />
          <Route
            path="/doctor-appointments"
            element={<ProtectedRoute role="doctor"><DoctorAppointments /></ProtectedRoute>}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
