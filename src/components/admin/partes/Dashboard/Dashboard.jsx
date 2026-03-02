import React from 'react';

const DashboardContent = () => {
    return (
        <>
            <header className="content-header">
                <div className="header-title">
                    <h1>Panel de <span className="text-gradient">Administración</span></h1>
                    <p>Gestión integral para bufetes de abogados</p>
                </div>
                <div className="header-actions">
                    <button className="btn-outline">🔔</button>
                    <button className="btn-primary">+ Nuevo Registro</button>
                </div>
            </header>

            <div className="stats-grid">
                <div className="stat-card glass hover-effect">
                    <div className="stat-icon purple">⚖️</div>
                    <div className="stat-info">
                        <h4>Casos Abiertos</h4>
                        <p className="stat-number">24</p>
                        <span className="stat-change positive">↑ 2 nuevos</span>
                    </div>
                    <div className="stat-chart-mini">
                        <div className="bar" style={{ height: '40%', background: '#a855f7' }}></div>
                        <div className="bar" style={{ height: '60%', background: '#a855f7' }}></div>
                        <div className="bar" style={{ height: '80%', background: '#a855f7' }}></div>
                    </div>
                </div>
                <div className="stat-card glass hover-effect">
                    <div className="stat-icon blue">🔄</div>
                    <div className="stat-info">
                        <h4>En Proceso</h4>
                        <p className="stat-number">42</p>
                        <span className="stat-change">Activos ahora</span>
                    </div>
                    <div className="stat-chart-mini">
                        <div className="bar" style={{ height: '70%', background: '#3b82f6' }}></div>
                        <div className="bar" style={{ height: '50%', background: '#3b82f6' }}></div>
                        <div className="bar" style={{ height: '90%', background: '#3b82f6' }}></div>
                    </div>
                </div>
                <div className="stat-card glass hover-effect">
                    <div className="stat-icon green">✅</div>
                    <div className="stat-info">
                        <h4>Casos Cerrados</h4>
                        <p className="stat-number">156</p>
                        <span className="stat-change positive">↑ 12 este mes</span>
                    </div>
                    <div className="stat-chart-mini">
                        <div className="bar" style={{ height: '30%', background: '#10b981' }}></div>
                        <div className="bar" style={{ height: '75%', background: '#10b981' }}></div>
                        <div className="bar" style={{ height: '95%', background: '#10b981' }}></div>
                    </div>
                </div>
                <div className="stat-card glass hover-effect">
                    <div className="stat-icon orange">📦</div>
                    <div className="stat-info">
                        <h4>Documentos</h4>
                        <p className="stat-number">892</p>
                        <span className="stat-change">Cloud Sync Ok</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="main-charts-section glass">
                    <div className="section-header">
                        <h3>Distribución de Casos</h3>
                    </div>
                    <div className="full-chart-container" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '200px', padding: '1rem' }}>
                        <div className="chart-item">
                            <div className="chart-bar" style={{ height: '120px', width: '40px', background: 'linear-gradient(to top, #a855f7, #c084fc)', borderRadius: '8px' }}></div>
                            <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>Abiertos</p>
                        </div>
                        <div className="chart-item">
                            <div className="chart-bar" style={{ height: '160px', width: '40px', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '8px' }}></div>
                            <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>Proceso</p>
                        </div>
                        <div className="chart-item">
                            <div className="chart-bar" style={{ height: '180px', width: '40px', background: 'linear-gradient(to top, #10b981, #34d399)', borderRadius: '8px' }}></div>
                            <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>Cerrados</p>
                        </div>
                    </div>
                </div>

                <div className="side-sections">
                    <section className="recent-activity glass">
                        <div className="section-header">
                            <h3>Actividad Reciente</h3>
                        </div>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="item-icon">📁</div>
                                <div className="item-details">
                                    <p className="item-title">#2024-085 modificado</p>
                                    <p className="item-subtitle">Escrito cargado por Dra. Rivas</p>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="item-icon">📅</div>
                                <div className="item-details">
                                    <p className="item-title">Nueva Cita Agendada</p>
                                    <p className="item-subtitle">Mañana 10:00 AM - Cliente Pérez</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default DashboardContent;
