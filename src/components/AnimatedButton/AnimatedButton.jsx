import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedButton.css';

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  className = '',
  icon = null,
  ...props 
}) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 15
      }
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.8 },
    animate: {
      scale: 4,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleClick = (e) => {
    if (disabled || !onClick) return;
    
    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    onClick(e);
  };

  return (
    <motion.button
      className={`animated-button animated-button--${variant} animated-button--${size} ${className} ${disabled ? 'animated-button--disabled' : ''}`}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <span className="animated-button__content">
        <span className="animated-button__text">{children}</span>
        {icon && (
          <motion.span 
            className="animated-button__icon"
            variants={iconVariants}
          >
            {icon}
          </motion.span>
        )}
      </span>
      
      {/* Shine effect */}
      <motion.div 
        className="animated-button__shine"
        initial={{ x: '-100%' }}
        whileHover={!disabled ? {
          x: '100%',
          transition: {
            duration: 0.6,
            ease: 'easeInOut'
          }
        } : {}}
      />
    </motion.button>
  );
};

export default AnimatedButton;