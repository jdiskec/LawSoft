import React from 'react';

const Configuracion = () => {
    return (
        <div className="configuracion-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Configuración</span></h1>
                    <p>Personalización y ajustes del sistema LegalAdmin</p>
                </div>
            </header>
            <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3>Ajustes del Sistema en Desarrollo</h3>
                <p>Configure los parámetros generales de su aplicación.</p>
            </div>
        </div>
    );
};

export default Configuracion;
