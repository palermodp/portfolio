import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-content">
        <AnimatedSection animation="fadeInDown" delay={0.2}>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contacto
          </motion.h2>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <motion.p 
            className="contact-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¿Interesado en trabajar juntos? ¡Contáctame por cualquiera de estos medios!
          </motion.p>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeInUp" delay={0.6}>
          <motion.div 
            className="contact-grid"
            role="list"
            aria-label="Opciones de contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
          <motion.a 
            href="mailto:danilopalermo97@gmail.com" 
            className="contact-item"
            role="listitem"
            aria-label="Enviar email a danilopalermo97@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="contact-icon" aria-hidden="true" />
            <span>Email</span>
          </motion.a>

          <motion.a 
            href="https://github.com/palermodp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            role="listitem"
            aria-label="Visitar perfil de GitHub (se abre en nueva ventana)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="contact-icon" aria-hidden="true" />
            <span>GitHub</span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/palermodanilo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            role="listitem"
            aria-label="Visitar perfil de LinkedIn (se abre en nueva ventana)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="contact-icon" aria-hidden="true" />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/+543413738126" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
            role="listitem"
            aria-label="Contactar por WhatsApp (se abre en nueva ventana)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="contact-icon" aria-hidden="true" />
            <span>WhatsApp</span>
          </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;