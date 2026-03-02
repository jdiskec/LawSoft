import React, { FC } from 'react';
import './register.css';
import logo from '../../assets/medusalayer.png';

const Register: FC = () => {
    return (
        <div className="register-container">
            <div className="register-glass-card">
                <div className="register-header">
                    <img src={logo} alt="MedusaWare Logo" className="register-logo" />
                    <h2 className="register-title">Crear Cuenta <span className="text-gradient">Profesional</span></h2>
                    <p className="register-subtitle">Únase a la red jurídica MedusaWare Layer</p>
                </div>

                <form className="register-form">
                    <div className="form-grid">
                        <div className="input-group">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" id="nombre" placeholder="Ej. Juan Pérez" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="cedula">Cédula / RUC (Ecuador)</label>
                            <input type="text" id="cedula" placeholder="1712345678" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Correo Institucional</label>
                            <input type="email" id="email" placeholder="jperez@estudio.com" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="telefono">Teléfono de Contacto</label>
                            <input type="tel" id="telefono" placeholder="0987654321" required />
                        </div>

                        <div className="input-group full-width">
                            <label htmlFor="password">Nueva Contraseña</label>
                            <input type="password" id="password" placeholder="••••••••" required />
                        </div>
                    </div>

                    <div className="terms-agreement">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">Acepto los <a href="#">Términos de Servicio</a> y la <a href="#">Política de Privacidad</a></label>
                    </div>

                    <button type="submit" className="btn-primary w-full">Completar Registro</button>
                </form>

                <div className="register-footer">
                    <p>¿Ya tiene una cuenta? <a href="#">Inicie Sesión aquí</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
