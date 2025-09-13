import './Header.css';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'projects', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-content">
        <div className="header-text">
          <h1>Danilo Palermo</h1>
          <span className="header-subtitle">Desarrollador Front-end</span>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={`${isMenuOpen ? 'Cerrar' : 'Abrir'} menú de navegación`}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav 
          className={`header-nav ${isMenuOpen ? 'active' : ''}`}
          role="navigation"
          aria-label="Navegación principal"
          id="main-navigation"
        >
          <ul role="menubar">
            <li role="none">
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre Mí
              </a>
            </li>
            <li role="none">
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-current={activeSection === 'experience' ? 'page' : undefined}
              >
                Experiencia
              </a>
            </li>
            <li role="none">
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-current={activeSection === 'projects' ? 'page' : undefined}
              >
                Proyectos
              </a>
            </li>
            <li role="none">
              <a 
                href="#blog" 
                className={activeSection === 'blog' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-current={activeSection === 'blog' ? 'page' : undefined}
              >
                Blog
              </a>
            </li>
            <li role="none">
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;