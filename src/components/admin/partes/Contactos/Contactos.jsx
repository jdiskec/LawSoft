import React from 'react';

const Contactos = () => {
    return (
        <div className="contactos-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Contactos</span></h1>
                    <p>Administración de clientes, abogados y contrapartes</p>
                </div>
            </header>
            <div className="glass" style={{ padding: '2rem' }}>
                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="form-section">
                        <h3>Datos del Cliente</h3>
                        <div className="input-group">
                            <label>Nombre Completo</label>
                            <input type="text" placeholder="Ej: Juan Pérez" className="dark-input" />
                        </div>
                        <div className="input-group">
                            <label>Preferencias de Ubicación</label>
                            <input type="text" placeholder="Dirección, Referencias, Coordenadas" className="dark-input" />
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Redes Sociales y Comunicación</h3>
                        <div className="social-inputs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div className="input-group">
                                <label>WhatsApp</label>
                                <input type="text" placeholder="+593..." className="dark-input" />
                            </div>
                            <div className="input-group">
                                <label>LinkedIn</label>
                                <input type="text" placeholder="url..." className="dark-input" />
                            </div>
                            <div className="input-group">
                                <label>Facebook</label>
                                <input type="text" placeholder="url..." className="dark-input" />
                            </div>
                            <div className="input-group">
                                <label>Instagram</label>
                                <input type="text" placeholder="@usuario..." className="dark-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn-primary" style={{ marginTop: '2rem' }}>Guardar Contacto</button>
            </div>
        </div>
    );
};

export default Contactos;
