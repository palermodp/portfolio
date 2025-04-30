import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contacto</h2>
        <p className="contact-description">
          ¿Interesado en trabajar juntos? ¡Contáctame por cualquiera de estos medios!
        </p>
        
        <div className="contact-grid">
          <a href="mailto:danilopalermo97@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>

          <a href="https://github.com/palermodp" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/palermodanilo/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          <a href="https://wa.me/+543413738126" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;