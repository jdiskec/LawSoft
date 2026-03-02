import React from 'react';

export const VerRegistro = ({ registro, onClose }) => {
    if (!registro) return null;

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="glass" style={{
                width: '600px',
                padding: '2.5rem',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>
                <div className="header-title" style={{ marginBottom: '2rem' }}>
                    <h2>Visualizar <span className="text-gradient">Registro</span></h2>
                    <p>Detalles del expediente legal</p>
                </div>

                <div className="registro-details" style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Cliente</label>
                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{registro.cliente}</p>
                        </div>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Nº Expediente</label>
                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{registro.exp}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Abogado a Cargo</label>
                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>⚖️ {registro.abogado || 'No asignado'}</p>
                        </div>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Estado</label>
                            <div>
                                <span className={`status-tag ${registro.estado.toLowerCase().replace(' ', '-')}`}>
                                    {registro.estado}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Progreso del Proceso</label>
                        <div style={{ marginTop: '0.5rem' }}>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                                {registro.proceso || 'Información del proceso pendiente de actualización.'}
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Tipo de Caso</label>
                            <p>{registro.tipo}</p>
                        </div>
                        <div>
                            <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Fecha Apertura</label>
                            <p>{registro.fecha}</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn-tab" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export const EditarRegistro = ({ registro, onSave, onClose }) => {
    const [formData, setFormData] = React.useState(registro || {});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="glass" style={{
                width: '600px',
                padding: '2.5rem',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>
                <div className="header-title" style={{ marginBottom: '2rem' }}>
                    <h2>Asignar/Editar <span className="text-gradient">Caso</span></h2>
                    <p>Actualizar datos y asignación del expediente</p>
                </div>

                <form onSubmit={handleSubmit} className="edit-form">
                    <div className="input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>Cliente</label>
                            <input
                                type="text"
                                name="cliente"
                                className="dark-input"
                                value={formData.cliente || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Nº Expediente</label>
                            <input
                                type="text"
                                name="exp"
                                className="dark-input"
                                value={formData.exp || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>Abogado Responsable</label>
                            <select
                                name="abogado"
                                className="dark-input"
                                value={formData.abogado || ''}
                                onChange={handleChange}
                            >
                                <option value="">Seleccionar Abogado</option>
                                <option value="Dr. Roberto García">Dr. Roberto García</option>
                                <option value="Dra. Elena Martínez">Dra. Elena Martínez</option>
                                <option value="Lic. Carlos Ortiz">Lic. Carlos Ortiz</option>
                            </select>
                        </div>
                        <div>
                            <label>Estado del Caso</label>
                            <select
                                name="estado"
                                className="dark-input"
                                value={formData.estado || ''}
                                onChange={handleChange}
                            >
                                <option value="Abierto">Abierto</option>
                                <option value="En proceso">En proceso</option>
                                <option value="Cerrado">Cerrado</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Seguimiento del Proceso</label>
                        <textarea
                            name="proceso"
                            className="dark-input"
                            rows="4"
                            value={formData.proceso || ''}
                            onChange={handleChange}
                            placeholder="Describa el avance actual del caso..."
                        ></textarea>
                    </div>

                    <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button type="button" className="btn-tab" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="btn-tab active">Guardar Cambios</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
