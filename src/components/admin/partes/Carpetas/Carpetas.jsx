import React, { useState } from 'react';

const Carpetas = () => {
    // Current state: list of case folders
    const [carpetas, setCarpetas] = useState([
        { id: 1, name: 'Exp. 2024-001 - Juan Mendoza', cliente: 'Juan Carlos Mendoza', color: '#6366f1' },
        { id: 2, name: 'Exp. 2024-025 - TechCorp', cliente: 'TechCorp S.A.', color: '#10b981' },
        { id: 3, name: 'Exp. 2023-198 - María López', cliente: 'María López', color: '#a855f7' }
    ]);

    // Mock files stored in folders
    const [documentos, setDocumentos] = useState([
        { id: 1, folderId: 1, name: 'Contrato_Inicial.pdf', type: 'PDF', date: '2024-03-01' },
        { id: 2, folderId: 1, name: 'Escritos_Varios.docx', type: 'Word', date: '2024-03-05' },
        { id: 3, folderId: 2, name: 'Audit_Final.pdf', type: 'PDF', date: '2024-02-15' }
    ]);

    const [selectedFolder, setSelectedFolder] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const openFolder = (folder) => setSelectedFolder(folder);
    const closeFolder = () => setSelectedFolder(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file && selectedFolder) {
            setIsUploading(true);
            setTimeout(() => {
                const newDoc = {
                    id: documentos.length + 1,
                    folderId: selectedFolder.id,
                    name: file.name,
                    type: file.name.split('.').pop().toUpperCase(),
                    date: new Date().toISOString().split('T')[0]
                };
                setDocumentos([...documentos, newDoc]);
                setIsUploading(false);
                alert(`Archivo "${file.name}" guardado exitosamente en ${selectedFolder.name}`);
            }, 1000);
        }
    };

    return (
        <div className="carpetas-container">
            <header className="content-header">
                <div className="header-title">
                    <h1>Módulo de <span className="text-gradient">Carpetas</span></h1>
                    <p>{selectedFolder ? `Contenido de: ${selectedFolder.name}` : 'Organización jerárquica de expedientes'}</p>
                </div>
                {selectedFolder && (
                    <button className="btn-tab active" onClick={closeFolder}>
                        ⬅️ Volver a Carpetas
                    </button>
                )}
            </header>

            <div className="glass" style={{ padding: '2rem' }}>
                {!selectedFolder ? (
                    /* Folder Grid View */
                    <div className="folder-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem'
                    }}>
                        {carpetas.map(folder => (
                            <div
                                key={folder.id}
                                className="folder-card glass hover-effect"
                                onClick={() => openFolder(folder)}
                                style={{
                                    padding: '2rem', textAlign: 'center', cursor: 'pointer',
                                    borderTop: `4px solid ${folder.color}`
                                }}
                            >
                                <div style={{ fontSize: '4rem', marginBottom: '1rem', color: folder.color }}>📂</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{folder.name}</h3>
                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{documentos.filter(d => d.folderId === folder.id).length} documentos</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Inside Folder View */
                    <div className="folder-content">
                        <div className="actions-bar" style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem',
                            padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px'
                        }}>
                            <div>
                                <h2 style={{ fontSize: '1.3rem' }}>📁 Documentos del Caso</h2>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cliente: {selectedFolder.cliente}</p>
                            </div>
                            <div className="upload-btn-container">
                                <label className="btn-tab active" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {isUploading ? 'Subiendo...' : '➕ Añadir Archivo'}
                                    <input type="file" style={{ display: 'none' }} onChange={handleUpload} disabled={isUploading} />
                                </label>
                            </div>
                        </div>

                        <div className="file-grid" style={{
                            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem'
                        }}>
                            {documentos.filter(d => d.folderId === selectedFolder.id).map(doc => (
                                <div key={doc.id} className="file-card glass hover-effect" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                        {doc.type === 'PDF' ? '📄' : doc.type === 'IMG' ? '🖼️' : '📝'}
                                    </div>
                                    <p style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{doc.name}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', opacity: 0.6, fontSize: '0.75rem' }}>
                                        <span>{doc.type}</span>
                                        <span>{doc.date}</span>
                                    </div>
                                </div>
                            ))}
                            {documentos.filter(d => d.folderId === selectedFolder.id).length === 0 && (
                                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                                    Esta carpeta está vacía. Comience subiendo un documento.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .folder-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.05) !important; }
                .file-card:hover { border-color: var(--primary) !important; }
            `}</style>
        </div>
    );
};

export default Carpetas;
