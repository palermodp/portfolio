import './Header.css';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="header-text">
          <h1>Danilo Palermo</h1>
          <span className="header-subtitle">Desarrollador Front-end</span>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experiencia</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;