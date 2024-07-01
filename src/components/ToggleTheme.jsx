import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    minHeight: '100vh',
    transition: 'background-color 0.5s, color 0.5s',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{color: theme === 'light' ? '#000000' : '#ffffff',}}>Toggle Theme</h1>
      <input type="checkbox" name="toggle" onClick={toggleTheme} />
      <p>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</p>
    </div>
  );
};

export default ToggleTheme;
