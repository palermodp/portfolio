import './About.css';
// Importa tu imagen (ajusta la ruta según el nombre de tu archivo)
import profileImage from '../../assets/images/me.jpeg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mí</h2>
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
        </div>
        <div className="about-image-container">
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
        </div>
      </div>
    </section>
  );
};

export default About;