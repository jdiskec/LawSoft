import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './dashboard.css';

// Import subcomponents
import DashboardContent from '../partes/Dashboard/Dashboard';
import Registros from '../Registros/Registros';
import Carpetas from '../partes/Carpetas/Carpetas';
import Contactos from '../partes/Contactos/Contactos';
import Archivos from '../partes/Archivos/Archivos';
import Tareas from '../partes/Tareas/Tareas';
import Notas from '../partes/Notas/Notas';
import Configuracion from '../partes/Configuracion/Configuracion';

const Dashboard = ({ isDarkMode, toggleTheme }) => {
    return (
        <div className={`dashboard-container ${!isDarkMode ? 'light-theme' : ''}`}>
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <div className="logo-container">
                        <div className="logo-icon">⚖️</div>
                        <h3>LegalAdmin</h3>
                    </div>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <NavLink to="/admin/dashboard" end className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">📊</span> Dashboard
                    </NavLink>
                    <NavLink to="/admin/dashboard/registros" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">📝</span> Registros
                    </NavLink>
                    <NavLink to="/admin/dashboard/contactos" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">👤</span> Contactos
                    </NavLink>
                    <NavLink to="/admin/dashboard/Archivos" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">📦</span> Archivos
                    </NavLink>
                    <NavLink to="/admin/dashboard/carpetas" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">📁</span> Carpetas
                    </NavLink>
                    <NavLink to="/admin/dashboard/tareas" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">✅</span> Tareas
                    </NavLink>
                    <NavLink to="/admin/dashboard/notas" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">📓</span> Notas
                    </NavLink>
                    <div className="nav-divider"></div>
                    <NavLink to="/admin/dashboard/configuracion" className={({ isActive }) => isActive ? "active" : ""}>
                        <span className="icon">⚙️</span> Configuración
                    </NavLink>
                </nav>
            </aside>

            <main className="dashboard-content">
                <Routes>
                    <Route index element={<DashboardContent />} />
                    <Route path="registros" element={<Registros />} />
                    <Route path="carpetas" element={<Carpetas />} />
                    <Route path="contactos" element={<Contactos />} />
                    <Route path="archivos" element={<Archivos />} />
                    <Route path="tareas" element={<Tareas />} />
                    <Route path="notas" element={<Notas />} />
                    <Route path="configuracion" element={<Configuracion />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
