import './Experience.css';
import cvFile from '../../assets/downloads/cv.pdf';
import { FaDownload } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2>Experiencia</h2>
        <div className="experience-container">
          <div className="experience-summary">
            <div className="experience-item">
              <h3>Desarrollador Web - Proyecto Final</h3>
              <p className="experience-period">2023</p>
              <ul>
                <li>Desarrollo de una aplicación web full-stack utilizando React y Node.js</li>
                <li>Implementación de base de datos SQL y gestión de usuarios</li>
                <li>Diseño responsive y experiencia de usuario intuitiva</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3>Soporte Técnico IT</h3>
              <p className="experience-period">2022 - 2023</p>
              <ul>
                <li>Mantenimiento y reparación de equipos informáticos</li>
                <li>Resolución de problemas de hardware y software</li>
                <li>Atención al cliente y documentación técnica</li>
              </ul>
            </div>
          </div>
          
          <div className="cv-download">
            <p>¿Quieres ver mi experiencia completa?</p>
            <a href={cvFile} download className="download-button">
              <FaDownload className="download-icon" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;