import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleUnbalanced } from '@fortawesome/free-solid-svg-icons';
import './inicio.css';

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <main className={`hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <span className="badge">Nueva era del Software Jurídico</span>
          <h1>Impulsando el <span className="text-gradient">Futuro</span> de tu Estudio</h1>
          <p>
            Creamos experiencias digitales excepcionales para la gestión legal.
            Transformamos tu práctica jurídica en una realidad digital escalable, potente y elegante.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary">Empezar Ahora</Link>
            <Link to="/login" className="btn-outline">Iniciar Sesión</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-container">
            <FontAwesomeIcon icon={faScaleUnbalanced} className="law-logo-svg" />
            <div className="logo-glow"></div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 MedusaWare - Soluciones Jurídicas. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Inicio;
