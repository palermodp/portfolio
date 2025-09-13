import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import './Testimonials.css';

const Testimonials = ({ className = '', autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart Solutions",
      image: "/images/testimonial-1.svg",
      rating: 5,
      text: "Danilo demostró un nivel excepcional de profesionalismo y expertise técnico. Su capacidad para entender nuestras necesidades y traducirlas en soluciones innovadoras fue impresionante. El proyecto se entregó a tiempo y superó nuestras expectativas.",
      project: "Plataforma E-commerce",
      date: "2024"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "/images/testimonial-2.svg",
      rating: 5,
      text: "Trabajar con Danilo fue una experiencia extraordinaria. Su dominio de las tecnologías modernas y su enfoque en la calidad del código nos permitió desarrollar una aplicación robusta y escalable. Definitivamente lo recomendaría.",
      project: "App Móvil React Native",
      date: "2024"
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Product Manager, DataFlow",
      company: "DataFlow Analytics",
      image: "/images/testimonial-3.svg",
      rating: 5,
      text: "La atención al detalle y la capacidad de comunicación de Danilo son excepcionales. Nos mantuvo informados en cada etapa del desarrollo y siempre estuvo disponible para resolver dudas. El resultado final superó nuestras expectativas.",
      project: "Dashboard de Analytics",
      date: "2023"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "Founder, StartupHub",
      company: "StartupHub",
      image: "/images/testimonial-4.svg",
      rating: 5,
      text: "Danilo no solo es un excelente desarrollador, sino también un gran consultor tecnológico. Sus sugerencias y mejoras al proyecto original agregaron un valor significativo. Su profesionalismo y dedicación son admirables.",
      project: "API REST y Microservicios",
      date: "2023"
    },
    {
      id: 5,
      name: "Laura Fernández",
      position: "Director de IT, FinanceCore",
      company: "FinanceCore",
      image: "/images/testimonial-5.svg",
      rating: 5,
      text: "La experiencia trabajando con Danilo fue excepcional. Su capacidad para manejar proyectos complejos y entregar soluciones de alta calidad en tiempo récord es impresionante. Sin duda, un profesional de primer nivel.",
      project: "Sistema de Gestión Financiera",
      date: "2023"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, testimonials.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className={`testimonials ${className}`}>
      <div className="container">
        <AnimatedSection animation="fadeInDown" delay={0.2}>
          <div className="testimonials-header">
            <h2 className="section-title">Testimonios</h2>
            <p className="section-subtitle">
              Lo que dicen mis clientes sobre mi trabajo
            </p>
          </div>
        </AnimatedSection>

        <div className="testimonials-container">
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="testimonials-slider">
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      goToNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      goToPrevious();
                    }
                  }}
                  className="testimonial-slide"
                >
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      
                      <div className="testimonial-text">
                        <p>"{currentTestimonial.text}"</p>
                      </div>
                      
                      <div className="testimonial-rating">
                        <div className="stars">
                          {renderStars(currentTestimonial.rating)}
                        </div>
                        <span className="rating-text">
                          {currentTestimonial.rating}/5 estrellas
                        </span>
                      </div>
                    </div>
                    
                    <div className="testimonial-author">
                      <div className="author-image">
                        <OptimizedImage
                          src={currentTestimonial.image}
                          alt={`${currentTestimonial.name} - ${currentTestimonial.position}`}
                          className="author-photo"
                          width={80}
                          height={80}
                        />
                      </div>
                      
                      <div className="author-info">
                        <h4 className="author-name">{currentTestimonial.name}</h4>
                        <p className="author-position">{currentTestimonial.position}</p>
                        <p className="author-company">{currentTestimonial.company}</p>
                        
                        <div className="project-info">
                          <span className="project-name">{currentTestimonial.project}</span>
                          <span className="project-date">{currentTestimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="testimonials-controls">
                <button 
                  className="nav-btn prev-btn"
                  onClick={goToPrevious}
                  aria-label="Testimonio anterior"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                
                <button 
                  className="nav-btn next-btn"
                  onClick={goToNext}
                  aria-label="Siguiente testimonio"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
                
                <button 
                  className="play-pause-btn"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21"></polygon>
                    </svg>
                  )}
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Statistics */}
          <AnimatedSection animation="fadeInUp" delay={0.6}>
            <div className="testimonials-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Proyectos Completados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfacción del Cliente</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Soporte Técnico</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Años de Experiencia</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;