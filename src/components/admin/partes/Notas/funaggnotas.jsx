import React, { useState } from 'react';

export const FormularioNota = ({ onAdd, onCancel }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        contenido: '',
        color: '#fef3c7'
    });

    const colors = [
        { name: 'Amarillo', hex: '#fef3c7' },
        { name: 'Verde', hex: '#dcfce7' },
        { name: 'Azul', hex: '#dbeafe' },
        { name: 'Morado', hex: '#f3e8ff' },
        { name: 'Rojo', hex: '#fee2e2' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            ...formData,
            id: Date.now(),
            fecha: new Date().toLocaleDateString()
        });
    };

    return (
        <div className="form-nota-container glass" style={{ padding: '2rem', marginTop: '2rem', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>📝 Nueva Nota</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input
                    type="text"
                    placeholder="Título de la nota"
                    value={formData.titulo}
                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}
                    required
                />
                <textarea
                    placeholder="Escribe algo..."
                    value={formData.contenido}
                    onChange={(e) => setFormData({ ...formData, contenido: e.target.value })}
                    style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', minHeight: '120px', resize: 'vertical' }}
                    required
                ></textarea>

                <div className="color-selector" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Color de fondo:</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {colors.map((c) => (
                            <div
                                key={c.hex}
                                onClick={() => setFormData({ ...formData, color: c.hex })}
                                title={c.name}
                                style={{
                                    width: '25px',
                                    height: '25px',
                                    backgroundColor: c.hex,
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    border: formData.color === c.hex ? '2px solid white' : '1px solid rgba(0,0,0,0.1)',
                                    transform: formData.color === c.hex ? 'scale(1.2)' : 'scale(1)',
                                    transition: 'all 0.2s'
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>Guardar Nota</button>
                    <button type="button" className="btn-tab" onClick={onCancel} style={{ flex: 1 }}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

// Función helper para eliminar que utilizaremos en el componente principal
export const eliminarNotaDeLista = (id, lista) => {
    return lista.filter(nota => nota.id !== id);
};
