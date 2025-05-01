import './Skills.css';
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaGit, FaGithub, 
  FaPython, FaVuejs
} from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Mis Habilidades</h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3>Tecnologías Principales</h3>
            <div className="main-skills-grid">
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: JavaScript">
                <FaJs className="skill-icon js-icon" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: React">
                <FaReact className="skill-icon react-icon" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: HTML5">
                <FaHtml5 className="skill-icon html-icon" />
                <span className="skill-name">HTML5</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: CSS3">
                <FaCss3Alt className="skill-icon css-icon" />
                <span className="skill-name">CSS3</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: MySQL">
                <SiMysql className="skill-icon sql-icon" />
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: Git">
                <FaGit className="skill-icon git-icon" />
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: GitHub">
                <FaGithub className="skill-icon github-icon" />
                <span className="skill-name">GitHub</span>
              </div>
              <div className="skill-card" tabIndex="0" role="button" aria-label="Habilidad: Python">
                <FaPython className="skill-icon python-icon" />
                <span className="skill-name">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;