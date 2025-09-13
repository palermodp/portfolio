import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './FloatingParticles.css';

const FloatingParticles = ({ count = 20, speed = 'slow' }) => {
  const containerRef = useRef(null);
  
  const speedSettings = {
    slow: { duration: [15, 25], delay: [0, 5] },
    medium: { duration: [10, 20], delay: [0, 3] },
    fast: { duration: [5, 15], delay: [0, 2] }
  };

  const currentSpeed = speedSettings[speed] || speedSettings.slow;

  const generateParticles = () => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 6 + 2; // 2-8px
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const duration = Math.random() * (currentSpeed.duration[1] - currentSpeed.duration[0]) + currentSpeed.duration[0];
      const delay = Math.random() * (currentSpeed.delay[1] - currentSpeed.delay[0]) + currentSpeed.delay[0];
      
      return {
        id: i,
        size,
        initialX,
        initialY,
        duration,
        delay
      };
    });
  };

  const particles = generateParticles();

  const floatingAnimation = {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1.2, 0.8]
  };

  return (
    <div className="floating-particles" ref={containerRef}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={floatingAnimation}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;