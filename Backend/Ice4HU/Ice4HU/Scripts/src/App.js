// App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ChangePersonalInfo from './components/ChangePersonalInfo';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => {
    setShowRegister(true);
  };
  return (
    <div className="App">
      
      {
      /* < ChangePersonalInfo/>*/
      !showRegister ? (
        <Login setShowRegister={handleShowRegister} />
      ) : (
        <Register setShowRegister={handleShowRegister} />
      )}

    </div>

  );
};

export default App;
