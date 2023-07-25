// Register.js
import React, { useState } from 'react';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styled/Register.css';
import registrationImage from '../assets/login-register.png'; // Update the image path and extension accordingly

const Register = ({ setShowRegister }) => {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [isDepartmentManager, setIsDepartmentManager] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Perform form validation
    if (!Name || !Email || !Surname || !Password || (!isDepartmentManager && !isStudent) || (isDepartmentManager && isStudent)) {
      setError('Please fill in all required fields correctly.');
      return;
    } else {
      setError('');
    }
  
    var Type = isStudent ? 'Student' : 'Department Manager';
  
    const registration = {
      Name,
      Surname,
      Email,
      Type,
      Password,
    };
  
    console.log('Registration:', registration);
  
    // Send the data to the API
    fetch('/api/UserEnrollmentRequest/Index', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registration),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success', data.success);
        alert(data.Message);
        window.location.href = '/api/UserEnrollmentRequest/Index';
      })
      .catch((error) => {
        console.log('Error', error);
      });
    
  
    // Reset form fields
    setName('');
    setSurname('');
    setEmail('');
    setIsStudent(false);
    setPassword('');
    setIsDepartmentManager(false);
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
        <h2>Enroll</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="input-container">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <label htmlFor="surname" className="label">
              Surname
            </label>
            <div className="input-container">
              <input
                type="text"
                id="surname"
                placeholder="Enter your surname"
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="6+ Characters, 1 Capital letter"
                value={Password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
          </div>
          <div className="form-group checkboxes">
          <label className="checkbox-label">
  <input
    type="checkbox"
    id="student"
    checked={isStudent}
    onChange={() => {
      if (!isStudent) {
      setIsDepartmentManager(false);
    }setIsStudent(!isStudent);}
    }
  />
  <span className="checkbox-custom" />
  Student
</label>

<label className="checkbox-label checkbox-label-right">
  <input
    type="checkbox"
    id="departmentManager"
    checked={isDepartmentManager}
    onChange={() => {
      if(!isDepartmentManager){
        setIsStudent(false);
      }
      setIsDepartmentManager(!isDepartmentManager);
    }}
  />
  <span className="checkbox-custom" />
  Department Manager
</label>

          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Send Enrollment Request</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
