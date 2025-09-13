import './About.css';
import profileImage from '../../assets/images/me.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TechCarousel from '../TechCarousel/TechCarousel';
import LazyImage from '../LazyImage/LazyImage';
import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import Testimonials from '../Testimonials/Testimonials';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <FloatingParticles count={15} speed="slow" />
      <div className="container">
        <AnimatedSection animation="fadeInDown" delay={0.2}>
          <h2 id="about-heading">Sobre Mí</h2>
        </AnimatedSection>
        <div className="about-content">
          <AnimatedSection animation="scaleIn" delay={0.4}>
            <div className="about-image-container">
              <LazyImage 
                src={profileImage} 
                alt="Fotografía profesional de Danilo Palermo, desarrollador web frontend especializado en React y JavaScript" 
                className="profile-image"
                placeholder={<div className="image-skeleton">Cargando...</div>}
              />
              <AnimatedSection animation="bounceIn" delay={0.8}>
                <div className="social-links" role="list" aria-label="Enlaces a redes sociales">
                  <a 
                    href="https://github.com/palermodp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visitar perfil de GitHub de Danilo Palermo (se abre en nueva ventana)"
                    role="listitem"
                  >
                    <FaGithub className="social-icon" aria-hidden="true" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/palermodanilo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visitar perfil de LinkedIn de Danilo Palermo (se abre en nueva ventana)"
                    role="listitem"
                  >
                    <FaLinkedin className="social-icon" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInLeft" delay={0.6}>
            <div className="about-text">
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
              <AnimatedSection animation="fadeInUp" delay={1.0}>
                <AnimatedButton 
                  variant="primary" 
                  size="medium"
                  icon={<i className="fas fa-download"></i>}
                  onClick={() => window.open('/cv.pdf', '_blank')}
                >
                  Descargar CV
                </AnimatedButton>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <TechCarousel />
      
      {/* Testimonials Section */}
      <Testimonials />
    </section>
  );
};

export default About;