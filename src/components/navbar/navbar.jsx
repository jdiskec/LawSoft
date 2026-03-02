import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/maudlex.png';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo-container">
                <img src={logo} alt="MAUDLEX Logo" className="navbar-logo" />
            </Link>
            <div className="nav-links">
                <a href="#">Soluciones</a>
                <a href="#">Servicios</a>
                <a href="#">Compañía</a>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
                <Link to="/login" className="btn-outline">Iniciar Sesión</Link>
                <Link to="/register" className="btn-primary">Empezar</Link>
            </div>
        </nav>
    );
};

export default Navbar;
