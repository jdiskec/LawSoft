import React, { useState } from 'react';
import { FormularioNota, eliminarNotaDeLista } from './funaggnotas';

const Notas = () => {
    const [view, setView] = useState('grid'); // 'grid' o 'agg'
    const [isDeleting, setIsDeleting] = useState(false);
    const [notas, setNotas] = useState([
        { id: 1, titulo: 'Reunión con cliente', contenido: 'Revisar términos del contrato de arrendamiento.', fecha: '2024-02-24', color: '#fef3c7' },
        { id: 2, titulo: 'Pendiente juzgado', contenido: 'Presentar memorial en el juzgado 5to de lo civil.', fecha: '2024-02-25', color: '#dcfce7' }
    ]);

    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota]);
        setView('grid');
    };

    const handleEliminar = (id) => {
        setNotas(eliminarNotaDeLista(id, notas));
    };

    return (
        <div className="notas-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Notas</span></h1>
                    <p>Apuntes rápidos y recordatorios importantes</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        className={`btn-primary ${view === 'agg' ? 'active' : ''}`}
                        onClick={() => { setView('agg'); setIsDeleting(false); }}
                    >
                        + Nueva Nota
                    </button>
                    <button
                        className={`btn-primary ${isDeleting ? 'btn-danger' : ''}`}
                        onClick={() => setIsDeleting(!isDeleting)}
                    >
                        {isDeleting ? '✓ Finalizar' : 'x Eliminar Nota'}
                    </button>
                </div>
            </header>

            {view === 'agg' ? (
                <FormularioNota onAdd={agregarNota} onCancel={() => setView('grid')} />
            ) : (
                <div className="notas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                    {notas.map(nota => (
                        <div
                            key={nota.id}
                            className={`nota-card glass ${isDeleting ? 'shake-animation' : ''}`}
                            style={{
                                backgroundColor: nota.color,
                                padding: '1.5rem',
                                borderRadius: '12px',
                                color: '#1f2937',
                                position: 'relative',
                                cursor: isDeleting ? 'pointer' : 'default',
                                border: isDeleting ? '2px dashed #ef4444' : 'none'
                            }}
                            onClick={() => isDeleting && handleEliminar(nota.id)}
                        >
                            {isDeleting && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '-10px',
                                    background: '#ef4444',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}>
                                    X
                                </div>
                            )}
                            <h3 style={{ marginBottom: '0.5rem' }}>{nota.titulo}</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{nota.contenido}</p>
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{nota.fecha}</span>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                .shake-animation {
                    animation: shake 0.5s infinite;
                }
                @keyframes shake {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(1deg); }
                    50% { transform: rotate(0deg); }
                    75% { transform: rotate(-1deg); }
                    100% { transform: rotate(0deg); }
                }
                .btn-danger {
                    background: #ef4444 !important;
                    border-color: #ef4444 !important;
                }
            `}</style>
        </div>
    );
};

export default Notas;
