import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Handle login click to redirect to role selection
  const handleLoginClick = () => {
    navigate('/role-selection');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">HealthCare Connect</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </div>
      <div className="header-right">
        {!user ? (
          <>
            <button onClick={handleLoginClick}>Login</button>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className="user-info">
              Welcome, {user.role === 'doctor' ? 'Dr. ' : ''}{user.name}
            </span>
            <nav>
              {user.role === 'patient' && (
                <>
                  <Link to="/patient-dashboard">Dashboard</Link>
                  <Link to="/patient-appointments">My Appointments</Link>
                </>
              )}
              {user.role === 'doctor' && (
                <>
                  <Link to="/doctor-dashboard">Dashboard</Link>
                  <Link to="/doctor-appointments">Appointments</Link>
                </>
              )}
            </nav>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
