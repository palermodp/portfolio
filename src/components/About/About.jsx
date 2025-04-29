import './About.css';
// Importa tu imagen (ajusta la ruta según el nombre de tu archivo)
import profileImage from '../../assets/images/me.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            ¡Hola! Soy Danilo Palermo, un desarrollador web apasionado por el front-end. 
            Me especializo en crear experiencias web interactivas y atractivas utilizando 
            tecnologías como JavaScript, HTML, CSS y ReactJS. También cuento con experiencia 
            en desarrollo backend con Python 3, SQL y Node.js.
          </p>
          <p>
            Mi objetivo profesional es iniciar mi carrera en el mundo IT, donde pueda 
            aplicar mis conocimientos y crecer como programador. Busco una oportunidad 
            que me permita desarrollar mi potencial y contribuir con soluciones 
            innovadoras.
          </p>
          <p>
            Además de mis habilidades en desarrollo web, tengo un sólido conocimiento 
            en hardware, incluyendo el armado y reparación de PC's, lo que me permite 
            tener una comprensión integral de los sistemas informáticos.
          </p>
        </div>
        <div className="about-image">
          <img 
            src={profileImage} 
            alt="Danilo Palermo - Desarrollador Web" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;