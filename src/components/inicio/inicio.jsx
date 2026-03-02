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
          <span className="badge">MAUDLEX Estudio Jurídico</span>
          <h1>Impulsando el <span className="text-gradient"></span>La confianza es la base de la justicia</h1>
          <p>
            Somos un estudio jurídico comprometido con la excelencia en la prestación de servicios legales.
            Ofrecemos asesoría integral y personalizada a nuestros clientes, garantizando resultados óptimos y satisfactorios.
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
        <p>&copy; 2024 - 2026 MedusaWare - Soluciones Jurídicas. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Inicio;
