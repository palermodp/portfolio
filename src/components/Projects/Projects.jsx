import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bijouImage from '../../assets/images/Bijou.png';
import bookImage from '../../assets/images/FullstackBook.png'; // Asegúrate de tener esta imagen

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={bijouImage} alt="Proyecto Bijou Boutique" />
            </div>
            <div className="project-info">
              <h3>Bijou Boutique</h3>
              <p>E-commerce de joyería desarrollado con JavaScript, HTML y CSS. Implementa carrito de compras, gestión de productos en base de datos y diseño responsive para una experiencia de compra óptima. Backend construido con Express.</p>
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
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={bookImage} alt="Proyecto Full Stack Book" />
            </div>
            <div className="project-info">
              <h3>Full Stack Book</h3>
              <p>Plataforma educativa diseñada para principiantes en el mundo de la informática. Ofrece recursos de aprendizaje, guías paso a paso y contenido adaptado tanto para personas sin experiencia como para aquellos que buscan fortalecer sus conocimientos. Desarrollada con React, Node.js y Express, incluye sistema de autenticación y base de datos relacional.</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;