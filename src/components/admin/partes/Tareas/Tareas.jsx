import React, { useState } from 'react';

const Tareas = () => {
    const [view, setView] = useState('list'); // 'list' or 'calendar'
    const [tareas, setTareas] = useState([
        { id: 1, titulo: 'Revision de Contrato', abogado: 'Dra. Elena Rivas', cliente: 'TechCorp', estado: 'Pendiente', limite: '2024-03-01', prioridad: 'Alta', importante: true },
        { id: 2, titulo: 'Cita: Firma de Escritura', abogado: 'Juan Carlos Mendoza', cliente: 'Familia Pérez', estado: 'Agendada', limite: '2024-02-28', prioridad: 'Media', importante: false }
    ]);

    return (
        <div className="tareas-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Gestión de <span className="text-gradient">Tareas y Citas</span></h1>
                    <p>Asignación de casos y agenda de abogados</p>
                </div>
                <div className="header-actions">
                    <button className={`btn-tab ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>Lista</button>
                    <button className={`btn-tab ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>Calendario</button>
                    <button className="btn-primary" style={{ marginLeft: '1rem' }}>+ Nueva Tarea/Cita</button>
                </div>
            </header>

            {view === 'list' ? (
                <div className="tareas-table-container glass" style={{ marginTop: '2rem', overflowX: 'auto' }}>
                    <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ padding: '1rem' }}>Tarea / Cita</th>
                                <th style={{ padding: '1rem' }}>Abogado Asignado</th>
                                <th style={{ padding: '1rem' }}>Cliente</th>
                                <th style={{ padding: '1rem' }}>Fecha Límite</th>
                                <th style={{ padding: '1rem' }}>Estado</th>
                                <th style={{ padding: '1rem' }}>Prioridad</th>
                                <th style={{ padding: '1rem' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.map(tarea => (
                                <tr key={tarea.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        {tarea.importante && <span style={{ color: '#ef4444', marginRight: '5px' }}>★</span>}
                                        {tarea.titulo}
                                    </td>
                                    <td style={{ padding: '1rem' }}>{tarea.abogado}</td>
                                    <td style={{ padding: '1rem' }}>{tarea.cliente}</td>
                                    <td style={{ padding: '1rem' }}>{tarea.limite}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span className={`status-tag ${tarea.estado.toLowerCase().replace(' ', '-')}`}>
                                            {tarea.estado}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{tarea.prioridad}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <button className="icon-btn-small" title="Subir documento">📤</button>
                                        <button className="icon-btn-small" title="Comentario">💬</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="calendar-placeholder glass" style={{ marginTop: '2rem', padding: '4rem', textAlign: 'center' }}>
                    <h3>Calendario de Actividades</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '2rem' }}>
                        {Array.from({ length: 31 }).map((_, i) => (
                            <div key={i} style={{ height: '80px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '5px', textAlign: 'left' }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{i + 1}</span>
                                {i === 24 && <div style={{ fontSize: '0.6rem', background: 'rgba(99, 102, 241, 0.2)', padding: '2px', borderRadius: '4px', marginTop: '5px' }}>Cita: TechCorp</div>}
                                {i === 27 && <div style={{ fontSize: '0.6rem', background: 'rgba(239, 68, 68, 0.2)', padding: '2px', borderRadius: '4px', marginTop: '5px' }}>Tarea: Contrato</div>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tareas;
