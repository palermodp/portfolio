import './Experience.css';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experiencia
        </motion.h2>
        
        <div className="experience-container">
          <motion.h3 
            className="experience-section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Últimas Experiencias Laborales
          </motion.h3>
          
          <div className="experience-info">
            <motion.div 
              className="experience-item"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3>Encargado de Depósito y Administrativo - Le utthe</h3>
              <p className="experience-period">Mayo 2023 - Actualidad</p>
              <p className="experience-location">Rosario, Santa Fe</p>
              <ul>
                <li>Atención personalizada al cliente, resolviendo consultas y gestionando reclamos con eficacia</li>
                <li>Control y cierre de caja, manejo de efectivo y medios de pago</li>
                <li>Reposición y control de stock, garantizando la correcta exhibición de productos</li>
                <li>Registro de movimientos, seguimiento de inventario y carga de datos</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="experience-item"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3>Administrativo - Uno Fitness Center</h3>
              <p className="experience-period">Marzo 2022 - Mayo 2023</p>
              <p className="experience-location">Rosario, Santa Fe</p>
              <ul>
                <li>Manejo y control de caja, incluyendo apertura, cierre y conciliación diaria</li>
                <li>Atención al cliente presencial y virtual, brindando soluciones ágiles y efectivas</li>
                <li>Elaboración y control de planillas en Microsoft Excel para seguimiento de ingresos y asistencia</li>
                <li>Gestión de redes sociales institucionales, incluyendo publicaciones y atención de consultas</li>
                <li>Profesor a cargo de clases grupales e individuales en disciplinas fitness</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="cv-download"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h4 className="cv-title">¿Quieres saber más sobre mi experiencia?</h4>
            <motion.a 
              href="/DaniloPalermoCV.pdf" 
              className="download-cv" 
              download="DaniloPalermoCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="download-icon" />
              Descargar CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;