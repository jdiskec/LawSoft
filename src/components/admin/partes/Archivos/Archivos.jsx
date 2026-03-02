import React, { useState, useEffect } from 'react';


const Archivos = () => {
    // Mock cases to assign files to

    useEffect(() => {
        const fetchCasos = async () => {
            const response = await fetch('http://localhost:3000/casos');
            const data = await response.json();
            setCasos(data);
        };
        fetchCasos();
    }, []);

    const [casos, setCasos] = useState([]);

    const [archivos, setArchivos] = useState([
        { id: 1, name: 'Contrato_Venta.pdf', type: 'PDF', icon: '📄', date: '2024-03-01', casoId: null },
        { id: 2, name: 'Prueba_Audiencia.mp4', type: 'Video', icon: '🎬', date: '2024-02-28', casoId: null },
        { id: 3, name: 'Escrito_Inicial.docx', type: 'Word', icon: '📝', date: '2024-03-02', casoId: null },
        { id: 4, name: 'Foto_Evidencia.jpg', type: 'Imagen', icon: '🖼️', date: '2024-01-15', casoId: null }
    ]);

    const [selectedFile, setSelectedFile] = useState(null);
    const [showAssignModal, setShowAssignModal] = useState(false);

    const handleAssignClick = (file) => {
        setSelectedFile(file);
        setShowAssignModal(true);
    };

    const confirmAssignment = (casoId) => {
        setArchivos(archivos.map(f =>
            f.id === selectedFile.id ? { ...f, casoId: casoId } : f
        ));
        setShowAssignModal(false);
        setSelectedFile(null);
        alert(`Archivo asignado al expediente ${casos.find(c => c.id === casoId).exp}`);
    };

    return (
        <div className="archivos-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Archivos</span></h1>
                    <p>Subida y asignación de documentos a expedientes</p>
                </div>
            </header>

            <div className="glass" style={{ padding: '2rem' }}>
                <div className="upload-area" style={{ border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '15px', padding: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📤</div>
                    <h3>Subir Archivos</h3>
                    <p>Arrastra o selecciona archivos para procesar</p>
                    <input type="file" multiple style={{ display: 'none' }} id="file-upload" />
                    <button className="btn-primary" onClick={() => document.getElementById('file-upload').click()} style={{ marginTop: '1rem' }}>
                        Seleccionar Archivos
                    </button>
                </div>

                <h3>Documentos sin Asignar</h3>
                <div className="file-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                    {archivos.filter(f => !f.casoId).map((doc) => (
                        <div key={doc.id} className="file-card glass hover-effect" style={{ padding: '1.5rem', textAlign: 'center', position: 'relative' }}>
                            <div style={{ fontSize: '2.5rem' }}>{doc.icon}</div>
                            <p style={{ marginTop: '0.8rem', fontSize: '0.95rem', fontWeight: 'bold' }}>{doc.name}</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{doc.type}</span>
                                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>•</span>
                                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{doc.date}</span>
                            </div>
                            <button
                                className="btn-tab active"
                                style={{ marginTop: '1rem', width: '100%', fontSize: '0.8rem' }}
                                onClick={() => handleAssignClick(doc)}
                            >
                                Asignar a Caso
                            </button>
                        </div>
                    ))}
                </div>

                <h3 style={{ marginTop: '3rem' }}>Documentos Asignados</h3>
                <div className="file-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                    {archivos.filter(f => f.casoId).map((doc) => (
                        <div key={doc.id} className="file-card glass" style={{ padding: '1.5rem', textAlign: 'center', opacity: 0.8 }}>
                            <div style={{ fontSize: '2.5rem' }}>{doc.icon}</div>
                            <p style={{ marginTop: '0.8rem', fontSize: '0.95rem', fontWeight: 'bold' }}>{doc.name}</p>
                            <div className="status-tag active" style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                                Asignado a: {casos.find(c => c.id === doc.casoId).exp}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Assignment Modal */}
            {showAssignModal && (
                <div className="modal-overlay" style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div className="glass" style={{ width: '450px', padding: '2rem' }}>
                        <h3>Asignar: {selectedFile?.name}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Seleccione el expediente correspondiente:</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {casos.map(caso => (
                                <button
                                    key={caso.id}
                                    className="activity-item"
                                    style={{ width: '100%', textAlign: 'left', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}
                                    onClick={() => confirmAssignment(caso.id)}
                                >
                                    <div className="item-details">
                                        <div className="item-title">{caso.exp}</div>
                                        <div className="item-subtitle">{caso.cliente}</div>
                                    </div>
                                    <span className="icon">➡️</span>
                                </button>
                            ))}
                        </div>

                        <button
                            className="btn-tab"
                            style={{ marginTop: '1.5rem', width: '100%' }}
                            onClick={() => setShowAssignModal(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Archivos;
