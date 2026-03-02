import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/medusalayer.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Usuario Admin Predefinido
        const adminUser = {
            email: 'admin@medusa.com',
            password: 'admin123'
        };

        if (email === adminUser.email && password === adminUser.password) {
            console.log('Login exitoso');
            navigate('/admin/dashboard');
        } else {
            setError('Credenciales incorrectas. Intente con admin@medusa.com / admin123');
        }
    };

    return (
        <div className="login-container">
            <div className="login-glass-card">
                <div className="login-header">
                    <img src={logo} alt="MedusaWare Logo" className="login-logo" />
                    <h2 className="login-title">MedusaWare <span className="text-gradient">Layer</span></h2>
                    <p className="login-subtitle">Sistema de Gestión Jurídica - Ecuador</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    {error && <p className="error-message" style={{ color: '#ff5f56', fontSize: '0.85rem', textAlign: 'center' }}>{error}</p>}

                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="admin@medusa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Recordarme
                        </label>
                        <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
                    </div>

                    <button type="submit" className="btn-primary w-full">Entrar al Sistema</button>
                </form>

                <div className="login-footer">
                    <p>¿No tiene una cuenta? <Link to="/register">Solicitar Acceso</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
