import React, { useState } from 'react';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from "../utils/data";              // this is temporary

import '../styled/ChangePersonalInfo.css';
import"./NavBar";
import NavBar from './NavBar';

const ChangePersonalInfo = () => {
  // State for personal information
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // State for password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // State for photo change
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [newPhoto, setNewPhoto] = useState(null);

  // Handle form submissions
  const handlePersonalInfoSave = (e) => {
    e.preventDefault();
    // Handle saving personal information
    // Implement your logic here
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    // Handle saving password
    // Implement your logic here
  };

  const handlePhotoSave = (e) => {
    e.preventDefault();
    // Handle saving photo
    // Implement your logic here
  };

  return (  
    <div className="change-personal-info">
    <NavBar/>
      <h2>Change Personal Information</h2>
      <div className="info-container">
        <div className="personal-info-container">
          <h2>Personal Information</h2>
          <form onSubmit={handlePersonalInfoSave}>
            <label htmlFor="fullName">Full Name:</label>
            <div className="input-container">
              <input
                type="text"
                id="fullName"
                value={fullName}
                placeholder = {user[0].name + " "+ user[0].surname}
                onChange={(e) => setFullName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <label htmlFor="email">Email:</label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={email}
                placeholder={user[0].email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="password-container">
          <h2>Password Change</h2>
          <form onSubmit={handlePasswordSave}>
            <label htmlFor="currentPassword">Current Password:</label>
            <div className="input-container">
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <label htmlFor="newPassword">New Password:</label>
            <div className="input-container">
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
            <div className="input-container">
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="photo-container">
        <h2>Photo Change</h2>
        <div className="photo-row">
         
          <div className="current-photo">
            {/* Render the current photo here */}
            <img src={currentPhoto} alt="Current" />
          </div>
        <div className="input-container">
          <label htmlFor="newPhoto">New Photo:</label>
          
            <input
              type="file"
              id="newPhoto"
              accept="image/*"
              onChange={(e) => setNewPhoto(URL.createObjectURL(e.target.files[0]))}
            />
           </div> 
           <div className='photo-button'>
            <button type="submit" onClick={handlePhotoSave}>Save</button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default ChangePersonalInfo;
