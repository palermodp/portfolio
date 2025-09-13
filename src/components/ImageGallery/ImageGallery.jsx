import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './ImageGallery.css';

const ImageGallery = ({ 
  images = [], 
  title = "Galería", 
  columns = 3,
  showLightbox = true,
  className = '',
  ...props 
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  // Sample images for demonstration (replace with actual project images)
  const defaultImages = [
    {
      id: 1,
      src: '/images/project-1.jpg',
      alt: 'Proyecto de desarrollo web',
      category: 'web',
      title: 'Aplicación Web Moderna',
      description: 'Desarrollo de aplicación web con React y Node.js'
    },
    {
      id: 2,
      src: '/images/project-2.jpg',
      alt: 'Aplicación móvil',
      category: 'mobile',
      title: 'App Móvil Nativa',
      description: 'Aplicación móvil desarrollada con React Native'
    },
    {
      id: 3,
      src: '/images/project-3.jpg',
      alt: 'Dashboard de análisis',
      category: 'web',
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos'
    },
    {
      id: 4,
      src: '/images/project-4.jpg',
      alt: 'E-commerce platform',
      category: 'web',
      title: 'Plataforma E-commerce',
      description: 'Tienda online con carrito de compras'
    },
    {
      id: 5,
      src: '/images/project-5.jpg',
      alt: 'API REST',
      category: 'backend',
      title: 'API REST Escalable',
      description: 'Backend con microservicios y Docker'
    },
    {
      id: 6,
      src: '/images/project-6.jpg',
      alt: 'Aplicación de escritorio',
      category: 'desktop',
      title: 'App de Escritorio',
      description: 'Aplicación multiplataforma con Electron'
    }
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  // Get unique categories for filtering
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Handle image click
  const handleImageClick = useCallback((image, index) => {
    if (showLightbox) {
      setSelectedImage(image);
      setCurrentIndex(index);
    }
  }, [showLightbox]);

  // Navigate in lightbox
  const navigateLightbox = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  }, [currentIndex, filteredImages]);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateLightbox('prev');
        break;
      case 'ArrowRight':
        navigateLightbox('next');
        break;
      default:
        break;
    }
  }, [selectedImage, closeLightbox, navigateLightbox]);

  // Add keyboard event listener
  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, handleKeyDown]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`image-gallery ${className}`} {...props}>
      <AnimatedSection animation="fadeInDown" delay={0.2}>
        <h2 className="gallery-title">{title}</h2>
      </AnimatedSection>

      {/* Category Filter */}
      {categories.length > 2 && (
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Image Grid */}
      <motion.div 
        className={`gallery-grid columns-${columns}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${filter}-${image.id}`}
              className="gallery-item"
              variants={itemVariants}
              layout
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              onClick={() => handleImageClick(image, index)}
            >
              <div className="gallery-item-container">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <p className="gallery-item-description">{image.description}</p>
                    <div className="gallery-category">{image.category}</div>
                  </div>
                  
                  {showLightbox && (
                    <button className="gallery-expand-btn" aria-label="Ver imagen completa">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <polyline points="9,21 3,21 3,15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && showLightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Cerrar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
                priority={true}
              />

              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className="lightbox-category">{selectedImage.category}</span>
              </div>

              {/* Navigation */}
              {filteredImages.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav lightbox-prev"
                    onClick={() => navigateLightbox('prev')}
                    aria-label="Imagen anterior"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                  </button>
                  
                  <button 
                    className="lightbox-nav lightbox-next"
                    onClick={() => navigateLightbox('next')}
                    aria-label="Siguiente imagen"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="lightbox-counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;