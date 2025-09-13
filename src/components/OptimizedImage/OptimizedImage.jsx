import React, { useState, useRef, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder = 'blur',
  quality = 75,
  priority = false,
  sizes = '100vw',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate WebP and fallback sources
  const generateSources = (originalSrc) => {
    if (!originalSrc) return { webp: '', fallback: originalSrc };
    
    // For now, just use the original source since WebP versions don't exist
    return {
      webp: originalSrc, // Use original instead of non-existent WebP
      fallback: originalSrc
    };
  };

  const sources = generateSources(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  // Handle image loading
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    
    // Try WebP first, fallback to original
    const tryLoadImage = async () => {
      try {
        // Check WebP support
        const supportsWebP = await checkWebPSupport();
        const srcToLoad = supportsWebP ? sources.webp : sources.fallback;
        
        img.onload = () => {
          setCurrentSrc(srcToLoad);
          setIsLoaded(true);
          setHasError(false);
          onLoad?.(img);
        };
        
        img.onerror = () => {
          // If WebP fails, try fallback
          if (supportsWebP && srcToLoad === sources.webp) {
            img.src = sources.fallback;
          } else {
            setHasError(true);
            onError?.(new Error('Failed to load image'));
          }
        };
        
        img.src = srcToLoad;
      } catch (error) {
        setHasError(true);
        onError?.(error);
      }
    };

    tryLoadImage();
  }, [isInView, sources.webp, sources.fallback, onLoad, onError]);

  // Check WebP support
  const checkWebPSupport = () => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  };

  // Generate placeholder
  const getPlaceholder = () => {
    if (placeholder === 'blur') {
      return `data:image/svg+xml;base64,${btoa(
        `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g">
              <stop stop-color="#f3f4f6" offset="20%" />
              <stop stop-color="#e5e7eb" offset="50%" />
              <stop stop-color="#f3f4f6" offset="70%" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="#f3f4f6" />
          <rect width="100%" height="100%" fill="url(#g)" opacity="0.5">
            <animateTransform attributeName="transform" type="translate" values="-100 0;100 0;-100 0" dur="2s" repeatCount="indefinite" />
          </rect>
        </svg>`
      )}`;
    }
    return placeholder;
  };

  const containerClasses = [
    'optimized-image-container',
    className,
    isLoaded ? 'loaded' : 'loading',
    hasError ? 'error' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={imgRef}
      className={containerClasses}
      style={{
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={getPlaceholder()}
          alt=""
          className="optimized-image-placeholder"
          aria-hidden="true"
        />
      )}
      
      {/* Main Image */}
      {isInView && !hasError && (
        <picture>
          <source srcSet={sources.webp} type="image/webp" />
          <img
            src={currentSrc || sources.fallback}
            alt={alt}
            className={`optimized-image ${isLoaded ? 'fade-in' : ''}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={width}
            height={height}
            sizes={sizes}
            onLoad={() => {
              setIsLoaded(true);
              onLoad?.();
            }}
            onError={(e) => {
              setHasError(true);
              onError?.(e);
            }}
          />
        </picture>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="optimized-image-error">
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <span>Error al cargar imagen</span>
        </div>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !hasError && isInView && (
        <div className="optimized-image-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;