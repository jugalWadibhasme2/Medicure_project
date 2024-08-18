import React from 'react';

function Doctor() {
  return (
    <div className="container">
      <h1>Doctor</h1>
      <p>
        This section is dedicated to Doctor. Sign in or sign up to connect with others in the Doctor community.
      </p>
      <a href="/signin" className="btn btn-primary">Sign In</a>
      <a href="/signup" className="btn btn-secondary ms-2">Sign Up</a>
    </div>
  );
}

export default Doctor;
