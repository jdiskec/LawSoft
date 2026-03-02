import React, { useState, useEffect } from 'react';

const AsignarTarea = ({ tareas, setTareas, setView, tareaEditando, setTareaEditando }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        abogado: '',
        cliente: '',
        limite: '',
        prioridad: 'Media',
        estado: 'Pendiente',
        importante: false
    });

    useEffect(() => {
        if (tareaEditando) {
            setFormData(tareaEditando);
        }
    }, [tareaEditando]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tareaEditando) {
            setTareas(tareas.map(t => t.id === tareaEditando.id ? { ...formData } : t));
            setTareaEditando(null);
        } else {
            setTareas([...tareas, { ...formData, id: Date.now() }]);
        }
        setView('list');
    };

    return (
        <div className="asignar-tarea-container glass" style={{ padding: '2.5rem', marginTop: '2rem', borderRadius: '16px' }}>
            <h2 style={{ marginBottom: '1.5rem', fontWeight: '600' }}>
                {tareaEditando ? '✏️ Editar Tarea' : '📋 Asignación de Tareas'}
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Título de la Tarea / Cita</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Ej: Revisión de expediente"
                        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        required
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Abogado Asignado</label>
                        <input
                            type="text"
                            name="abogado"
                            value={formData.abogado}
                            onChange={handleChange}
                            placeholder="Nombre del abogado"
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Cliente</label>
                        <input
                            type="text"
                            name="cliente"
                            value={formData.cliente}
                            onChange={handleChange}
                            placeholder="Nombre del cliente"
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                            required
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Fecha Límite</label>
                        <input
                            type="date"
                            name="limite"
                            value={formData.limite}
                            onChange={handleChange}
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Prioridad</label>
                        <select
                            name="prioridad"
                            value={formData.prioridad}
                            onChange={handleChange}
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(15, 23, 42, 0.8)', color: 'white' }}
                        >
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                    </div>
                </div>

                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.5rem' }}>
                    <input
                        type="checkbox"
                        name="importante"
                        checked={formData.importante}
                        onChange={handleChange}
                        style={{ cursor: 'pointer' }}
                    />
                    <label style={{ fontSize: '0.9rem', cursor: 'pointer' }}>Marcar como urgente/importante</label>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <button type="submit" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
                        {tareaEditando ? 'Actualizar Tarea' : 'Asignar Tarea'}
                    </button>
                    <button
                        type="button"
                        className="btn-tab"
                        onClick={() => {
                            setView('list');
                            setTareaEditando(null);
                        }}
                        style={{ padding: '0.8rem 2rem' }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export const eliminarTarea = (id, lista) => {
    return lista.filter(tarea => tarea.id !== id);
};

export default AsignarTarea;
