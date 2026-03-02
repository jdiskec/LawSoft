import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Inicio from './components/inicio/inicio';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Background from './components/background/background';
import './App.css';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleTheme = () => {
    if (!isHomePage) {
      setIsDarkMode(!isDarkMode);
    }
  };

  // Force light mode on home page
  const currentDarkMode = isHomePage ? false : isDarkMode;

  return (
    <Background className={!currentDarkMode ? 'light-theme' : ''}>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar toggleTheme={toggleTheme} isDarkMode={currentDarkMode} showToggle={false} />
              <Inicio />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/dashboard/*" element={<Dashboard isDarkMode={currentDarkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Background>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
