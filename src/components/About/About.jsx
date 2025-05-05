import './About.css';
import profileImage from '../../assets/images/me.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TechCarousel from '../TechCarousel/TechCarousel';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre Mí</h2>
      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={profileImage} 
            alt="Danilo Palermo - Desarrollador Web" 
            className="profile-image"
          />
          <div className="social-links">
            <a 
              href="https://github.com/palermodp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/palermodanilo/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="tagline">
            Desarrollador Web Front-end | Entusiasta de React
          </p>
          <p>
            ¡Hola! Soy Danilo Palermo, un recién graduado apasionado por el desarrollo web, especialmente en el front-end. 
            Me encanta crear experiencias web interactivas y atractivas utilizando tecnologías como JavaScript, HTML, CSS y ReactJS. 
            También tengo conocimientos en desarrollo backend con Python 3, SQL y Node.js.
          </p>
          <p>
            Actualmente, estoy en búsqueda de mi primer trabajo en el mundo IT, donde pueda aplicar mis conocimientos y crecer como programador. 
            Busco una oportunidad que me permita desarrollar mi potencial y contribuir con soluciones innovadoras.
          </p>
          <p>
            Además de mis habilidades en desarrollo web, tengo un sólido conocimiento en hardware, incluyendo el armado y reparación de PC's, 
            lo que me permite tener una comprensión integral de los sistemas informáticos.
          </p>
          <div className="professional-goals">
            <h3>Objetivos Profesionales</h3>
            <p>
              Busco mi primera oportunidad en el mundo IT para desarrollarme como programador front-end,
              aprender de equipos experimentados y crecer profesionalmente mientras aporto
              mi entusiasmo y dedicación por la programación.
            </p>
          </div>
        </motion.div>
      </div>
      <TechCarousel />
    </section>
  );
};

export default About;