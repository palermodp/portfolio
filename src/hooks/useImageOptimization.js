import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for image optimization and WebP support detection
 * @param {string} src - Original image source
 * @param {Object} options - Optimization options
 * @returns {Object} - Optimized image data and utilities
 */
export const useImageOptimization = (src, options = {}) => {
  const {
    quality = 75,
    format = 'webp',
    sizes = [],
    enableWebP = true,
    enableLazyLoading = true
  } = options;

  const [optimizedSrc, setOptimizedSrc] = useState('');
  const [isWebPSupported, setIsWebPSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check WebP support
  const checkWebPSupport = useCallback(() => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }, []);

  // Generate optimized image sources
  const generateOptimizedSources = useCallback((originalSrc) => {
    if (!originalSrc) return { webp: '', fallback: originalSrc };
    
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    const basePath = originalSrc.replace(`.${extension}`, '');
    
    const sources = {
      webp: enableWebP ? `${basePath}.webp` : null,
      avif: `${basePath}.avif`, // Future format support
      fallback: originalSrc
    };

    // Generate responsive sizes if provided
    if (sizes.length > 0) {
      sources.srcSet = sizes.map(size => {
        const webpSrc = `${basePath}-${size}w.webp ${size}w`;
        const fallbackSrc = `${basePath}-${size}w.${extension} ${size}w`;
        return { webp: webpSrc, fallback: fallbackSrc };
      });
    }

    return sources;
  }, [enableWebP, sizes]);

  // Preload image
  const preloadImage = useCallback((imageSrc) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imageSrc;
    });
  }, []);

  // Initialize optimization
  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    const initializeOptimization = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check WebP support
        const webpSupported = await checkWebPSupport();
        setIsWebPSupported(webpSupported);

        // Generate optimized sources
        const sources = generateOptimizedSources(src);
        
        // Determine best source to use
        let bestSrc = sources.fallback;
        if (webpSupported && sources.webp) {
          try {
            await preloadImage(sources.webp);
            bestSrc = sources.webp;
          } catch {
            // WebP failed, use fallback
            bestSrc = sources.fallback;
          }
        }

        setOptimizedSrc(bestSrc);
      } catch (err) {
        setError(err);
        setOptimizedSrc(src); // Fallback to original
      } finally {
        setIsLoading(false);
      }
    };

    initializeOptimization();
  }, [src, checkWebPSupport, generateOptimizedSources, preloadImage]);

  // Generate srcSet for responsive images
  const generateSrcSet = useCallback((sources) => {
    if (!sources.srcSet) return '';
    
    const srcSetArray = sources.srcSet.map(source => 
      isWebPSupported ? source.webp : source.fallback
    );
    
    return srcSetArray.join(', ');
  }, [isWebPSupported]);

  return {
    src: optimizedSrc,
    isWebPSupported,
    isLoading,
    error,
    generateOptimizedSources,
    generateSrcSet,
    preloadImage
  };
};

/**
 * Hook for batch image optimization
 * @param {Array} images - Array of image sources
 * @param {Object} options - Optimization options
 * @returns {Object} - Batch optimization results
 */
export const useBatchImageOptimization = (images = [], options = {}) => {
  const [optimizedImages, setOptimizedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    const optimizeImages = async () => {
      setIsLoading(true);
      const results = [];
      const errorList = [];

      for (let i = 0; i < images.length; i++) {
        try {
          const { src: optimizedSrc } = useImageOptimization(images[i], options);
          results.push({ original: images[i], optimized: optimizedSrc, index: i });
        } catch (error) {
          errorList.push({ index: i, error, original: images[i] });
          results.push({ original: images[i], optimized: images[i], index: i });
        }
      }

      setOptimizedImages(results);
      setErrors(errorList);
      setIsLoading(false);
    };

    optimizeImages();
  }, [images, options]);

  return {
    optimizedImages,
    isLoading,
    errors
  };
};

/**
 * Hook for image performance monitoring
 * @returns {Object} - Performance metrics and utilities
 */
export const useImagePerformance = () => {
  const [metrics, setMetrics] = useState({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    webpUsage: 0
  });

  const recordImageLoad = useCallback((loadTime, isWebP = false) => {
    setMetrics(prev => ({
      ...prev,
      totalImages: prev.totalImages + 1,
      loadedImages: prev.loadedImages + 1,
      averageLoadTime: (prev.averageLoadTime * (prev.loadedImages - 1) + loadTime) / prev.loadedImages,
      webpUsage: isWebP ? prev.webpUsage + 1 : prev.webpUsage
    }));
  }, []);

  const recordImageError = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      totalImages: prev.totalImages + 1,
      failedImages: prev.failedImages + 1
    }));
  }, []);

  const getPerformanceReport = useCallback(() => {
    const { totalImages, loadedImages, failedImages, averageLoadTime, webpUsage } = metrics;
    
    return {
      successRate: totalImages > 0 ? (loadedImages / totalImages) * 100 : 0,
      failureRate: totalImages > 0 ? (failedImages / totalImages) * 100 : 0,
      webpAdoptionRate: loadedImages > 0 ? (webpUsage / loadedImages) * 100 : 0,
      averageLoadTime: Math.round(averageLoadTime),
      totalImages,
      loadedImages,
      failedImages
    };
  }, [metrics]);

  return {
    metrics,
    recordImageLoad,
    recordImageError,
    getPerformanceReport
  };
};

export default useImageOptimization;