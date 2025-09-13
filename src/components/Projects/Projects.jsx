import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bijouImage from '../../assets/images/Bijou.png';
import bookImage from '../../assets/images/FullstackBook.png';
import { motion } from 'framer-motion';
import LazyImage from '../LazyImage/LazyImage';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

const Projects = () => {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="projects-content">
        <AnimatedSection animation="fadeInDown" delay={0.2}>
          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proyectos
          </motion.h2>
        </AnimatedSection>
        <div className="projects-grid" role="list" aria-label="Lista de proyectos">
          <motion.div 
            className="project-card"
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage 
                src="/images/bijou-boutique.svg" 
                alt="Captura de pantalla del proyecto Bijou Boutique"
                placeholder={<div className="image-skeleton">Cargando proyecto...</div>}
              />
            </motion.div>
            <div className="project-info">
              <h3>Bijou Boutique</h3>
              <p>E-commerce de joyería desarrollado con JavaScript, HTML y CSS. Implementa carrito de compras, gestión de productos en base de datos y diseño responsive para una experiencia de compra óptima. Backend construido con Express.
                Mi primer proyecto escalable con el cual rendi y aprobe el curso de Full Stack Developer en Digital House.
              </p>
              <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                <span role="listitem">JavaScript</span>
                <span role="listitem">HTML</span>
                <span role="listitem">CSS</span>
                <span role="listitem">Express</span>
              </div>
              <div className="project-links" role="group" aria-label="Enlaces del proyecto">
                <AnimatedButton variant="primary" size="small">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver proyecto Bijou Boutique en vivo (se abre en nueva ventana)"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Ver Proyecto
                  </a>
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="small">
                  <a 
                    href="https://github.com/palermodp/Bijou-Boutique" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver código fuente de Bijou Boutique en GitHub (se abre en nueva ventana)"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage 
                src="/images/fullstack-book.svg" 
                alt="Captura de pantalla del proyecto Full Stack Book"
                placeholder={<div className="image-skeleton">Cargando proyecto...</div>}
              />
            </motion.div>
            <div className="project-info">
              <h3>Full Stack Book</h3>
              <p>Plataforma educativa diseñada para principiantes en el mundo de la informática. Ofrece recursos de aprendizaje, guías paso a paso y contenido adaptado tanto para personas sin experiencia como para aquellos que buscan fortalecer sus conocimientos. Desarrollada con React, Node.js y Express.</p>
              <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                <span role="listitem">React</span>
                <span role="listitem">Node.js</span>
                <span role="listitem">Express</span>
                <span role="listitem">MySQL</span>
                <span role="listitem">JavaScript</span>
              </div>
              <div className="project-links" role="group" aria-label="Enlaces del proyecto">
                <AnimatedButton variant="primary" size="small">
                  <a 
                    href="https://fullstack-book.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver proyecto Full Stack Book en vivo (se abre en nueva ventana)"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Ver Proyecto
                  </a>
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="small">
                  <a 
                    href="https://github.com/palermodp/Fullstack-Book" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver código fuente de Full Stack Book en GitHub (se abre en nueva ventana)"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage 
                src="/images/sassify.svg" 
                alt="Captura de pantalla del proyecto SasSify"
                placeholder={<div className="image-skeleton">Cargando proyecto...</div>}
              />
            </motion.div>
            <div className="project-info">
              <h3>SasSify</h3>
              <p>Landing page premium para SaaS desarrollada con tecnologías modernas. Implementa animaciones fluidas, efectos glassmorphism, menú hamburguesa con transiciones espectaculares y diseño completamente responsive. Optimizada para conversión de visitantes en clientes.
              </p>
              <div className="project-tech" role="list" aria-label="Tecnologías utilizadas">
                <span role="listitem">Astro</span>
                <span role="listitem">React</span>
                <span role="listitem">Tailwind CSS</span>
                <span role="listitem">Vercel</span>
              </div>
              <div className="project-links" role="group" aria-label="Enlaces del proyecto">
                <AnimatedButton variant="primary" size="small">
                  <a 
                    href="https://sassy-landing-one.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver proyecto SasSify en vivo (se abre en nueva ventana)"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Ver Proyecto
                  </a>
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="small">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Ver código fuente de SasSify en GitHub (se abre en nueva ventana)"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;