import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            Desarrollado con <FaHeart className="heart-icon" /> por Danilo Palermo
          </p>
          <p className="copyright">
            © {currentYear} - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;