import React, { useState } from 'react';
import AsignarTarea, { eliminarTarea } from './funasigtar';

const Tareas = () => {
    const [view, setView] = useState('list'); // 'list' or 'asignar'
    const [tareaEditando, setTareaEditando] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [tareas, setTareas] = useState([
        { id: 1, titulo: 'Revision de Contrato', abogado: 'Dra. Elena Rivas', cliente: 'TechCorp', estado: 'Pendiente', limite: '2024-03-01', prioridad: 'Alta', importante: true },
        { id: 2, titulo: 'Cita: Firma de Escritura', abogado: 'Juan Carlos Mendoza', cliente: 'Familia Pérez', estado: 'Agendada', limite: '2024-02-28', prioridad: 'Media', importante: false }
    ]);

    const handleEliminar = (id) => {
        setTareas(eliminarTarea(id, tareas));
    };

    return (
        <div className="tareas-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Gestión de <span className="text-gradient">Tareas y Citas</span></h1>
                    <p>Asignación de casos y agenda de abogados</p>
                </div>
                <div className="header-actions">
                    <button className={`btn-tab ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>Lista</button>
                    <button className={`btn-tab ${view === 'asignar' ? 'active' : ''}`} onClick={() => { setView('asignar'); setTareaEditando(null); }}>Asignación</button>
                    <button className="btn-primary" style={{ marginLeft: '1rem' }} onClick={() => { setView('asignar'); setTareaEditando(null); }}>+ Nueva Tarea/Cita</button>
                    <button
                        className={`btn-primary ${isDeleting ? 'btn-danger' : ''}`}
                        style={{ marginLeft: '1rem' }}
                        onClick={() => setIsDeleting(!isDeleting)}
                    >
                        {isDeleting ? '✓ Finalizar' : '- Eliminar'}
                    </button>
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
                                        {!isDeleting ? (
                                            <>
                                                <button className="icon-btn-small" title="Editar" onClick={() => { setTareaEditando(tarea); setView('asignar'); }}>✏️</button>
                                                <button className="icon-btn-small" title="Subir documento">📤</button>
                                                <button className="icon-btn-small" title="Comentario">💬</button>
                                            </>
                                        ) : (
                                            <button
                                                className="icon-btn-small btn-danger-icon"
                                                title="Eliminar"
                                                onClick={() => handleEliminar(tarea.id)}
                                                style={{ background: '#ef4444', borderRadius: '4px', padding: '2px 5px' }}
                                            >
                                                🗑️ Eliminar
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <AsignarTarea
                    tareas={tareas}
                    setTareas={setTareas}
                    setView={setView}
                    tareaEditando={tareaEditando}
                    setTareaEditando={setTareaEditando}
                />
            )}

            <style>{`
                .btn-danger {
                    background: #ef4444 !important;
                    border-color: #ef4444 !important;
                }
                .btn-danger-icon:hover {
                    transform: scale(1.1);
                    filter: brightness(1.2);
                }
                .is-deleting-row {
                    background: rgba(239, 68, 68, 0.05);
                }
            `}</style>
        </div>
    );
};

export default Tareas;
