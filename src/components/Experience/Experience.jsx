import './Experience.css';
import { FaDownload } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2>Experiencia</h2>
        
        <div className="experience-container">
          <h3 className="experience-section-title">Últimas Experiencias Laborales</h3>
          
          <div className="experience-info">
            <div className="experience-item">
              <h3>Le utthe</h3>
              <p className="experience-period">Mayo 2023 - Actualidad</p>
              <p className="experience-location">Rosario, Santa Fe</p>
              <ul>
                <li>Atención personalizada al cliente, resolviendo consultas y gestionando reclamos con eficacia</li>
                <li>Control y cierre de caja, manejo de efectivo y medios de pago</li>
                <li>Reposición y control de stock, garantizando la correcta exhibición de productos</li>
                <li>Registro de movimientos, seguimiento de inventario y carga de datos</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3>Uno Fitness Center</h3>
              <p className="experience-period">Marzo 2022 - Mayo 2023</p>
              <p className="experience-location">Rosario, Santa Fe</p>
              <ul>
                <li>Manejo y control de caja, incluyendo apertura, cierre y conciliación diaria</li>
                <li>Atención al cliente presencial y virtual, brindando soluciones ágiles y efectivas</li>
                <li>Elaboración y control de planillas en Microsoft Excel para seguimiento de ingresos y asistencia</li>
                <li>Gestión de redes sociales institucionales, incluyendo publicaciones y atención de consultas</li>
                <li>Profesor a cargo de clases grupales e individuales en disciplinas fitness</li>
              </ul>
            </div>
          </div>
          
          <div className="cv-download">
            <h4 className="cv-title">¿Quieres saber más sobre mi experiencia?</h4>
            <a href="/cv.pdf" className="download-cv" download>
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