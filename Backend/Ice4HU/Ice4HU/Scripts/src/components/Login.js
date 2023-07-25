// Register.js
import React, { useState } from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styled/Login.css';
import registrationImage from '../assets/login-register.png'; // Update the image path and extension accordingly

const Login = ({ setShowRegister }) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('e-mail:', email);
    console.log('Password:', password);
    // authentication here

    if (!email ||!password ){
      setError('Please fill in all required fields correctly.');
      return;
    }
    else{
      setError("");
    }
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <img
          src={registrationImage}
          alt="Registration"
          className="registration-image"
        />
         
      </div>
      <div className="splitter-line" />
      <div className="right-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="email" className="label">
              Email
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="6+ Characters, 1 Capital letter"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-link">
      Don't have an account? <span onClick={() => setShowRegister(true)}>Sign Up</span>
    </p>
    <p className="password-reset-link">
      Did you forget your password? <span>Reset password</span>
    </p>
      </div>
    </div>
  );
};

export default Login;
