import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>
        <motion.p 
          className="contact-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ¿Interesado en trabajar juntos? ¡Contáctame por cualquiera de estos medios!
        </motion.p>
        
        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.a 
            href="mailto:danilopalermo97@gmail.com" 
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </motion.a>

          <motion.a 
            href="https://github.com/palermodp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/palermodanilo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/+543413738126" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;