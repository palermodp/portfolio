import './Skills.css';
import { 
  SiJavascript, SiReact, SiHtml5, SiCss3,
  SiMysql, SiGit, SiGithub, SiPython,
  SiVuedotjs, SiTypescript
} from 'react-icons/si';
import { FaTools, FaFileWord, FaHeadset } from 'react-icons/fa';

const Skills = () => {
  const mainSkills = [
    { name: 'JavaScript', icon: <SiJavascript className="js-icon" /> },
    { name: 'React', icon: <SiReact className="react-icon" /> },
    { name: 'HTML', icon: <SiHtml5 className="html-icon" /> },
    { name: 'CSS', icon: <SiCss3 className="css-icon" /> },
    { name: 'SQL', icon: <SiMysql className="sql-icon" /> },
    { name: 'Git', icon: <SiGit className="git-icon" /> },
    { name: 'GitHub', icon: <SiGithub className="github-icon" /> }
  ];

  const additionalSkills = {
    otherTech: [
      { name: 'Python 3', icon: <SiPython className="python-icon" /> },
      { name: 'Vue 3', icon: <SiVuedotjs className="vue-icon" /> },
      { name: 'TypeScript', icon: <SiTypescript className="ts-icon" /> }
    ],
    extras: [
      { name: 'Hardware', icon: <FaTools className="hardware-icon" /> },
      { name: 'Office', icon: <FaFileWord className="office-icon" /> },
      { name: 'Soporte', icon: <FaHeadset className="support-icon" /> }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Mis Habilidades</h2>
        
        <div className="main-skills">
          <h3>Tecnologías Principales</h3>
          <div className="main-skills-grid">
            {mainSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="additional-skills">
          <div className="additional-skills-category">
            <h3>Otras Tecnologías</h3>
            <div className="additional-skills-grid">
              {additionalSkills.otherTech.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="additional-skills-category">
            <h3>Habilidades Adicionales</h3>
            <div className="additional-skills-grid">
              {additionalSkills.extras.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;