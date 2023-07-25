import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import ManageCourse from './manage-course.js';
import UserList from './user-list.js'

import '../styled/admin-menu.css';

function ProfileMenu({ open, onClickOutside, showText }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`profile-menu${open ? ' open' : ''}`} style={{ display: open ? 'block' : 'none', marginTop: '45px', marginRight: '25px' }}>
      <div className="profile-menu-option" style={{fontWeight:'bold'}}>Settings</div>
      <div className="profile-menu-option" style={{fontWeight:'bold'}}>Exit</div>
    </div>
  );
}

function ProfileButton({ onClick }) {
  return (
    <div className="profile-button" onClick={onClick}>
      <div>
        <span style={{fontWeight:'bold'}}>Admin</span>
      </div>
      <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'45px'}}/>
    </div>
  );
}

function TextPopUp(props) {
  return props.trigger ? (
    <div className='sure'>
      <div className='sure-inner'>
        {props.children}
      </div>
    </div>
  ) : null;
}

function PopupWindowMessage({ messages }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMessageBoxClick = (message) => {
    setSelectedMessage(message);
    setPopupVisible(true);
  };

  const truncateMessage = (message) => {
    if (message.length > 15) {
      return message.slice(0, 15) + "...";
    }
    return message;
  };

  return (
    <div className="profile-menu-messages">
      <h2>Messages</h2>
      {messages.slice(0, 2).map((message, index) => (
        <button
          key={index}
          onClick={() => handleMessageBoxClick(message)}
          className="message-box"
        >
          {truncateMessage(message)}
        </button>
      ))}
      {messages.length > 2 && (
        <button
          onClick={() => handleMessageBoxClick(messages.join("\n"))}
          className="message-box"
        >
          ...
        </button>
      )}
      {selectedMessage && (
        <TextPopUp trigger={popupVisible}>
          {selectedMessage.split("\n").map((message, index) => (
            <React.Fragment key={index}>
              {message}
              <br />
            </React.Fragment>
          ))}
          {messages.length > 2 && (
            <hr />
          )}
          <button className="MessageCloseButton" onClick={() => setPopupVisible(false)}>
            Close
          </button>
        </TextPopUp>
      )}
    </div>
  );
}

function PopupWindowNotification({ notifications }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setPopupVisible(true);
  };

  const handleCloseButtonClick = () => {
    setPopupVisible(false);
  };

  const truncateNotification = (notification) => {
    if (notification.length > 15) {
      return notification.slice(0, 15) + "...";
    }
    return notification;
  };

  return (
    <div className="profile-menu-notifications">
      <h2>Notifications</h2>
      {notifications.slice(0, 2).map((notification, index) => (
        <div key={index}>
          <button
            onClick={() => handleNotificationClick(notification)}
            className="notification-button"
          >
            {truncateNotification(notification)}
          </button>
        </div>
      ))}
      {notifications.length > 2 && (
        <button
          onClick={() => handleNotificationClick(notifications.join("\n"))}
          className="notification-button"
        >
          ...
        </button>
      )}
      {selectedNotification && (
        <TextPopUp trigger={popupVisible}>
          {selectedNotification.split("\n").map((notification, index) => (
            <React.Fragment key={index}>
              {notification}
              <br />
            </React.Fragment>
          ))}
          {notifications.length > 2 && (
            <hr />
          )}
          <button className="NotificationCloseButton" onClick={handleCloseButtonClick}>
            Close
          </button>
        </TextPopUp>
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [numNotification, setNumNotification] = useState(2);
  const [numMessages, setNumMessages] = useState(2);

  const nonReadNotification = ["selam", "naber", "a"];
  const nonReadMessages = ["a", "hava çok güzel", "a"];

  const handleProfileButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMessagePopupToggle = () => {
    setShowMessagePopup(!showMessagePopup);
    if (!showMessagePopup) {
      nonReadMessages.splice(0, nonReadMessages.length); 
      setNumMessages(0);
    }
  };

  const handleNotificationPopupToggle = () => {
    setShowNotificationPopup(!showNotificationPopup);
    if (!showNotificationPopup) {
      nonReadNotification.splice(0, nonReadNotification.length); 
      setNumNotification(0); 
    }
  };

  return (
    <div className="header">
      <div className="optionNotification" onClick={handleNotificationPopupToggle}>
        <FontAwesomeIcon icon={faBell} />
        {numNotification > 0 && <span className="numNotification">{numNotification}</span>}
      </div>

      {showNotificationPopup && (
        <div className="popup-overlay">
          <PopupWindowNotification
            notifications={nonReadNotification}
            onClose={handleNotificationPopupToggle}
          />
        </div>
      )}

      <div className="optionMessages" onClick={handleMessagePopupToggle}>
        <FontAwesomeIcon icon={faEnvelope} />
        {numMessages > 0 && <span className="numMessages">{numMessages}</span>}
      </div>

      {showMessagePopup && (
        <div className="popup-overlay">
          <PopupWindowMessage
            messages={nonReadMessages}
            onClose={handleMessagePopupToggle}
          />
        </div>
      )}

      <div className="optionAdmin">
        <ProfileButton onClick={handleProfileButtonClick} showText={true} />
        <ProfileMenu open={menuOpen} showText={true} />
      </div>
    </div>
  );
}

function Sidebar() {
  const [showManageCourse, setShowManageCourse] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  
  const handleManageCourseClick = () => {
    setShowManageCourse(!showManageCourse);
    if(!showManageCourse){
      setShowUserList(false);
    }
  };
  
  const handleUserListClick = () => {
    setShowUserList(!showUserList);
    if(!showUserList){
      setShowManageCourse(false);
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <div>
            <Hamburger size={18} color="#fff" />
          </div>
          <Link  className="sidebar-button">Anasayfa</Link>
        </li>
        <li>
          <Link  className="sidebar-button" onClick={handleUserListClick}>User List</Link>
        </li>
        <li>
          <Link  className="sidebar-button" onClick={handleManageCourseClick}>Manage Course</Link>
        </li>
        <li>
          <Link  className="sidebar-button">Assign Account Types</Link>
        </li>
        <li>
          <Link  className="sidebar-button">Manage Members</Link>
        </li>
        <li>
          <Link  className="sidebar-button">Manage Question</Link>
        </li>
      </ul>

      {showManageCourse && (
        <div className="manage-course-sidebar">
          <ManageCourse />
        </div>
      )}

      {showUserList && (
        <div className="user-list-sidebar">
          <UserList />
        </div>
      )}
    </div>
  );
}

function App() {
  return (

      <div className="App">
        <Header/>
        <Sidebar />
      </div>
  
  );
}

export default App;
