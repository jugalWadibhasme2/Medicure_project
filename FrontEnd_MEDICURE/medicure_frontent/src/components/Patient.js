import React from 'react';

function Patient() {
  return (
    <div className="container">
      <h1>Patient</h1>
      <p>
        This section is dedicated to Patient. Sign in or sign up to connect with others in the Patient community.
      </p>
      <a href="/signin" className="btn btn-primary">Sign In</a>
      <a href="/signup" className="btn btn-secondary ms-2">Sign Up</a>
    </div>
  );
}

export default Patient;
