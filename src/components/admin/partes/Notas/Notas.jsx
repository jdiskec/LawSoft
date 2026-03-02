import React, { useState } from 'react';

const Notas = () => {
    const [notas, setNotas] = useState([
        { id: 1, titulo: 'Reunión con cliente', contenido: 'Revisar términos del contrato de arrendamiento.', fecha: '2024-02-24', color: '#fef3c7' },
        { id: 2, titulo: 'Pendiente juzgado', contenido: 'Presentar memorial en el juzgado 5to de lo civil.', fecha: '2024-02-25', color: '#dcfce7' }
    ]);

    return (
        <div className="notas-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Notas</span></h1>
                    <p>Apuntes rápidos y recordatorios importantes</p>
                </div>
                <button className="btn-primary">+ Nueva Nota</button>
            </header>

            <div className="notas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {notas.map(nota => (
                    <div key={nota.id} className="nota-card glass" style={{ backgroundColor: nota.color, padding: '1.5rem', borderRadius: '12px', color: '#1f2937' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>{nota.titulo}</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{nota.contenido}</p>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{nota.fecha}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notas;
