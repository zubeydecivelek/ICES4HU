import React, { useState } from 'react';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from "../utils/data";              // this is temporary
import defaultPp from "../assets/defaultPp.png";

import '../styled/ChangePersonalInfo.css';
import"./NavBar";
import NavBar from './NavBar';

const ChangePersonalInfo = () => {
  // State for personal information
  const [Name, setName] = useState(user[0].name);
  const [Surname, setSurname] = useState(user[0].surname);
  const [Email, setEmail] = useState(user[0].email);

  // State for password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // State for photo change
  const [currentPhoto, setCurrentPhoto] = useState(user[0].image);
  const [newPhoto, setNewPhoto] = useState(null);

  const handlePersonalInfoSave = async (e) => {
    e.preventDefault();
    const updatedInfo = {
      Name,
      Surname,
      Email,
    };

    console.log('Info:', updatedInfo);
    try {
      const response = await fetch('http://localhost:...', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInfo),
      });

      if (response.ok) {
         
      } else {
      }
  } catch (error) {
  }
  };

  const handlePasswordSave = async (e) => {
    e.preventDefault();
    const updatedInfo = {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };

    console.log('Info:', updatedInfo);
    try {
      const response = await fetch('http://localhost:...', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInfo),
      });

      if (response.ok) {
         
          
      } else {
      }
  } catch (error) {
  }
  };

  const handlePhotoSave = async (e) => {
    e.preventDefault();
  
    if (newPhoto) {
      console.log("yenş forto....")
      console.log(newPhoto);
      setCurrentPhoto(newPhoto);
      /*try {
        const formData = new FormData();
        formData.append('photo', newPhoto);
  
        const response = await fetch('/api/upload-photo', {
          method: 'POST',
          body: formData,
        });
  
        // Handle the response from the server
        if (response.ok) {
          // Photo upload was successful
        } else {
          // Photo upload failed
        }
      } catch (error) {
        console.error('Error uploading photo:', error);
      }*/
    } else {
      // No new photo selected
    }
  };

  const handleDeletePhoto = () => {
    setCurrentPhoto(defaultPp);
    ///TODO fotoğraf silmek için backend bağlantısı
  }

  return (  
    <div className="change-personal-info">
    <NavBar/>
      <h2>Change Personal Information</h2>
      <div className="info-container">
        <div className="personal-info-container">
          <h2>Personal Information</h2>
          <form onSubmit={handlePersonalInfoSave}>
          <label htmlFor="name" className="label">
              Name
            </label>
            <div className="input-container">
              <input
                type="text"
                id="name"
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
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <label htmlFor="email">Email:</label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={Email}
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
            <img src={currentPhoto} alt="Current" className='user-photo' />
            <p className="delete-photo-link">
          <span onClick={handleDeletePhoto}>Delete </span>
          </p>
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
