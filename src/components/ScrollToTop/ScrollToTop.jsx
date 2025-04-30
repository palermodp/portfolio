import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Obtener la posición del componente About
    const aboutSection = document.getElementById('about');
    const aboutPosition = aboutSection?.offsetTop || 0;
    
    // Mostrar el botón cuando pasamos la sección About
    if (window.scrollY > aboutPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;