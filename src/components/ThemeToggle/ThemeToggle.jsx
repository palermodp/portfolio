import './ThemeToggle.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDarkMode}
      title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key={isDarkMode ? 'dark' : 'light'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      </motion.div>
      <span className="sr-only">
        {isDarkMode ? 'Modo oscuro activado. Presiona para cambiar a modo claro.' : 'Modo claro activado. Presiona para cambiar a modo oscuro.'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;