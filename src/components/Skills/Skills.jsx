import './Skills.css';
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaGit, FaGithub, 
  FaPython, FaVuejs, 
  FaTools, FaMicrosoft, FaHeadset 
} from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Mis Habilidades</h2>
        
        <div className="main-skills">
          <h3>Tecnologías Principales</h3>
          <div className="main-skills-grid">
            <div className="skill-card">
              <FaJs className="skill-icon js-icon" />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon react-icon" />
              <span className="skill-name">React</span>
            </div>
            <div className="skill-card">
              <FaHtml5 className="skill-icon html-icon" />
              <span className="skill-name">HTML5</span>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon css-icon" />
              <span className="skill-name">CSS3</span>
            </div>
            <div className="skill-card">
              <SiMysql className="skill-icon sql-icon" />
              <span className="skill-name">MySQL</span>
            </div>
            <div className="skill-card">
              <FaGit className="skill-icon git-icon" />
              <span className="skill-name">Git</span>
            </div>
            <div className="skill-card">
              <FaGithub className="skill-icon github-icon" />
              <span className="skill-name">GitHub</span>
            </div>
            <div className="skill-card">
              <FaPython className="skill-icon python-icon" />
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-card">
              <FaVuejs className="skill-icon vue-icon" />
              <span className="skill-name">Vue.js</span>
            </div>
            <div className="skill-card">
              <SiTypescript className="skill-icon ts-icon" />
              <span className="skill-name">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="additional-skills">
          <div className="additional-skills-category">
            <h3>Habilidades Adicionales</h3>
            <div className="additional-skills-grid">
              <div className="skill-card">
                <FaTools className="skill-icon hardware-icon" />
                <span className="skill-name">Hardware</span>
              </div>
              <div className="skill-card">
                <FaMicrosoft className="skill-icon office-icon" />
                <span className="skill-name">Office</span>
              </div>
              <div className="skill-card">
                <FaHeadset className="skill-icon support-icon" />
                <span className="skill-name">Soporte Técnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;