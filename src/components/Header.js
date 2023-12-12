import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>Toggle To Dark Mode</button>
      <h1>IBUKA- A Knowledge repository.</h1>
    </div>
  );
};

export default Header;