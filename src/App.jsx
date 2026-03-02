import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Inicio from './components/inicio/inicio';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Background from './components/background/background';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Background className={!isDarkMode ? 'light-theme' : ''}>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Inicio />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard/*" element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          </Routes>
        </div>
      </Background>
    </Router>
  );
}

export default App;
