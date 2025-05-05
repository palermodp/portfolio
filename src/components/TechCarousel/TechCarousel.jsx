import './TechCarousel.css';
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaGit, FaGithub, 
  FaPython, FaVuejs 
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const TechCarousel = () => {
  const technologies = [
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaPython, name: 'Python3', color: '#3776AB' },
    { icon: FaVuejs, name: 'Vue3', color: '#4FC08D' },
    { icon: FaGit, name: 'Git', color: '#F05032' },
    { icon: FaGithub, name: 'GitHub', color: '#181717' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' }
  ];

  return (
    <motion.div 
      className="tech-carousel"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="carousel-track">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div 
              key={`${tech.name}-${index}`} 
              className="tech-item"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon style={{ color: tech.color }} />
              <span>{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TechCarousel;