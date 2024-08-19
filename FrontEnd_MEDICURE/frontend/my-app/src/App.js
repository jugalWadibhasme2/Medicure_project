import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
import PatientPage from './Auth/PatientPage'; // Assuming you have a PatientPage component
import Register from './Auth/RegistrationPage'; // Assuming you have a Register component
import SignIn from './Auth/SignIn'; // Assuming you have a SignIn component
import SignUp from './Auth/SignUp'; // Assuming you have a SignUp component

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/patient-page" element={<PatientPage />} /> {/* Added PatientPage route */}
        <Route path="/register" element={<Register />} /> {/* Added Register route */}
        <Route path="/sign-in" element={<SignIn />} /> {/* Added SignIn route */}
        <Route path="/sign-up" element={<SignUp />} /> {/* Added SignUp route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
