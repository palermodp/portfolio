import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bijouImage from '../../assets/images/Bijou.png';
import bookImage from '../../assets/images/FullstackBook.png';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="projects-grid">
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={bijouImage} alt="Proyecto Bijou Boutique" />
            </motion.div>
            <div className="project-info">
              <h3>Bijou Boutique</h3>
              <p>E-commerce de joyería desarrollado con JavaScript, HTML y CSS. Implementa carrito de compras, gestión de productos en base de datos y diseño responsive para una experiencia de compra óptima. Backend construido con Express.
                Mi primer proyecto escalable con el cual rendi y aprobe el curso de Full Stack Developer en Digital House.
              </p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/palermodp/Bijou-Boutique" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={bookImage} alt="Proyecto Full Stack Book" />
            </motion.div>
            <div className="project-info">
              <h3>Full Stack Book</h3>
              <p>Plataforma educativa diseñada para principiantes en el mundo de la informática. Ofrece recursos de aprendizaje, guías paso a paso y contenido adaptado tanto para personas sin experiencia como para aquellos que buscan fortalecer sus conocimientos. Desarrollada con React, Node.js y Express.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/palermodp/Fullstack-Book" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;