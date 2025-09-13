import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

// Legacy wrapper for backward compatibility
const LazyImage = ({ src, alt, className = '', placeholder, ...props }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`lazy-image-legacy ${className}`}
      placeholder={placeholder || 'blur'}
      {...props}
    />
  );
};

export default LazyImage;