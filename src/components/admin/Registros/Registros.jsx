import React, { useState } from 'react';
import { VerRegistro, EditarRegistro } from './funregistroyedit';

const Registros = () => {
    // Initial mockup data
    const [data, setData] = useState([
        {
            cliente: 'Juan Carlos Mendoza',
            exp: '2024-001',
            tipo: 'Civil',
            estado: 'Abierto',
            fecha: '2024-01-15',
            abogado: 'Dr. Roberto García',
            proceso: 'Presentación de demanda inicial realizada. Pendiente de notificación a la parte contraria.'
        },
        {
            cliente: 'TechCorp S.A.',
            exp: '2024-025',
            tipo: 'Corporativo',
            estado: 'En proceso',
            fecha: '2024-02-10',
            abogado: 'Dra. Elena Martínez',
            proceso: 'Revisión de contratos de fusión y adquisición. Fase de auditoría legal completada.'
        },
        {
            cliente: 'María López',
            exp: '2023-198',
            tipo: 'Familiar',
            estado: 'Cerrado',
            fecha: '2023-11-20',
            abogado: 'Lic. Carlos Ortiz',
            proceso: 'Resolución final dictada por el juzgado. Archivo del expediente concluido.'
        }
    ]);

    // Modal state
    const [viewMode, setViewMode] = useState(null); // 'view' | 'edit' | null
    const [selectedRecord, setSelectedRecord] = useState(null);

    const handleView = (record) => {
        setSelectedRecord(record);
        setViewMode('view');
    };

    const handleEdit = (record) => {
        setSelectedRecord(record);
        setViewMode('edit');
    };

    const handleSave = (updatedRecord) => {
        // Find by exp for mock update
        setData(data.map(item => item.exp === selectedRecord.exp ? { ...item, ...updatedRecord } : item));
        setViewMode(null);
    };

    return (
        <div className="registros-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Registros</span></h1>
                    <p>Gestión y seguimiento de todos los registros legales</p>
                </div>
            </header>
            <div className="glass" style={{ padding: '2rem' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ padding: '1rem' }}>Cliente</th>
                                <th style={{ padding: '1rem' }}>Nº Expediente</th>
                                <th style={{ padding: '1rem' }}>Abogado</th>
                                <th style={{ padding: '1rem' }}>Tipo de Caso</th>
                                <th style={{ padding: '1rem' }}>Estado</th>
                                <th style={{ padding: '1rem' }}>Fecha Apertura</th>
                                <th style={{ padding: '1rem' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1rem' }}>{row.cliente}</td>
                                    <td style={{ padding: '1rem' }}>{row.exp}</td>
                                    <td style={{ padding: '1rem' }}>⚖️ {row.abogado}</td>
                                    <td style={{ padding: '1rem' }}>{row.tipo}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span className={`status-tag ${row.estado.toLowerCase().replace(' ', '-')}`}>
                                            {row.estado}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{row.fecha}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                className="icon-btn-small"
                                                onClick={() => handleView(row)}
                                                title="Ver Detalles"
                                            >
                                                👁️
                                            </button>
                                            <button
                                                className="icon-btn-small"
                                                onClick={() => handleEdit(row)}
                                                title="Editar/Asignar"
                                            >
                                                ✏️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            {viewMode === 'view' && (
                <VerRegistro
                    registro={selectedRecord}
                    onClose={() => setViewMode(null)}
                />
            )}
            {viewMode === 'edit' && (
                <EditarRegistro
                    registro={selectedRecord}
                    onSave={handleSave}
                    onClose={() => setViewMode(null)}
                />
            )}
        </div>
    );
};

export default Registros;
