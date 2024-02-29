import React, { useState } from 'react';
// import Footertask from './Footertask';

const HomePage = () => {
  const [themeColor, setThemeColor] = useState('blue');

  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <div style={{ backgroundColor: themeColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to our Website</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('blue')}>Home</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('green')}>About Us</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('orange')}>Contact Us</button></li>
        </ul>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="theme-color">Change Theme Color:</label>
        <select id="theme-color" onChange={(e) => changeThemeColor(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    
      <div>
    <footer style={{ display: 'flex', justifyContent: 'space-between', 
    alignItems: 'center',topmargin: '300px', backgroundColor: '#333', color: '#fff', padding: '10px 20px' }}>
      {/* Social Icons */}
      <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
      <a href="mailto:example@gmail.com"><i className="fas fa-envelope"></i></a>
      <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
    <div>&copy; 2024 All rights reserved</div>
    <div><button>Support</button></div>
  </footer>
  </div>
  </div>
  );
};

export default HomePage;
