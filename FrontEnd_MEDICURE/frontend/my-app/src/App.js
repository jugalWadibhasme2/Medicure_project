import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQPage';
import PatientDetails from './pages/FetchPatients';
import DoctorDashboard from './pages/DoctorDashboard';
import ViewAppointments from './pages/ViewAppointments';
import ScheduleAppointment from './pages/ScheduleAppointment';
import ManageAvailability from './pages/ManageAvailability';
import DeleteProfile from './pages/DeleteProfile';
import Header from './components/Header';
import Footer from './components/Footer'; // If you have a Footer component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
        <Route path="/manage-availability" element={<ManageAvailability />} />
        <Route path="/delete-profile" element={<DeleteProfile />} />
      </Routes>
     <Footer />
    </Router>
  );
}

export default App;
