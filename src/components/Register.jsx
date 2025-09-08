import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    //Handle Login Logic Here
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/admin';
  };

  return (
    <div className='login-container'>
      <h2 className='login-title'>Register</h2>
      <form className='login-form'>
        <input type='text' placeholder='Full Name' required />

        <input type='email' placeholder='Email' required />

        <input type='password' placeholder='Password' required />

        <input type='password' placeholder='Confirm Password' required />

        <button type='submit'>Register</button>

        {/* 👉 Link back to login */}
        <p className='register-text'>
          Already have an account? <NavLink to='/'>Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
