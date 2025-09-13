import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import './Blog.css';

const Blog = ({ className = '', postsPerPage = 6 }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Introducción a React Hooks: useState y useEffect",
      excerpt: "Aprende los fundamentos de React Hooks y cómo useState y useEffect pueden simplificar tu código y mejorar la gestión del estado.",
      content: "Los React Hooks revolucionaron la forma en que escribimos componentes en React...",
      category: "React",
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
      author: "Danilo Palermo",
      date: "2024-01-15",
      readTime: "8 min",
      image: "/images/blog/react-hooks.svg",
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: Cuándo usar cada uno",
      excerpt: "Una guía completa sobre las diferencias entre CSS Grid y Flexbox, con ejemplos prácticos para saber cuándo usar cada tecnología.",
      content: "CSS Grid y Flexbox son dos herramientas poderosas para el layout en CSS...",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive"],
      author: "Danilo Palermo",
      date: "2024-01-10",
      readTime: "12 min",
      image: "/images/blog/css-grid-flexbox.svg",
      featured: false,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: "Optimización de Performance en React",
      excerpt: "Técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React, incluyendo memoización, lazy loading y code splitting.",
      content: "La optimización de performance es crucial para crear aplicaciones React rápidas...",
      category: "React",
      tags: ["React", "Performance", "Optimization", "Memoization"],
      author: "Danilo Palermo",
      date: "2024-01-05",
      readTime: "15 min",
      image: "/images/blog/react-performance.svg",
      featured: true,
      views: 1450,
      likes: 112
    },
    {
      id: 4,
      title: "JavaScript ES6+: Características Modernas",
      excerpt: "Explora las características más importantes de ES6+ que todo desarrollador JavaScript debería conocer en 2024.",
      content: "JavaScript ha evolucionado significativamente con ES6 y versiones posteriores...",
      category: "JavaScript",
      tags: ["JavaScript", "ES6", "Modern JS", "Arrow Functions"],
      author: "Danilo Palermo",
      date: "2023-12-28",
      readTime: "10 min",
      image: "/images/blog/javascript-es6.svg",
      featured: false,
      views: 875,
      likes: 54
    },
    {
      id: 5,
      title: "Responsive Design: Mobile First Approach",
      excerpt: "Aprende a implementar un diseño responsive efectivo usando la metodología Mobile First y las mejores prácticas de CSS.",
      content: "El diseño responsive es esencial en el desarrollo web moderno...",
      category: "CSS",
      tags: ["CSS", "Responsive", "Mobile First", "Media Queries"],
      author: "Danilo Palermo",
      date: "2023-12-20",
      readTime: "9 min",
      image: "/images/blog/responsive-design.svg",
      featured: false,
      views: 720,
      likes: 43
    },
    {
      id: 6,
      title: "Gestión de Estado con Context API",
      excerpt: "Una guía completa sobre cómo usar React Context API para manejar el estado global de tu aplicación sin librerías externas.",
      content: "React Context API es una herramienta poderosa para la gestión de estado...",
      category: "React",
      tags: ["React", "Context API", "State Management", "Global State"],
      author: "Danilo Palermo",
      date: "2023-12-15",
      readTime: "11 min",
      image: "/images/blog/context-api.svg",
      featured: false,
      views: 1100,
      likes: 78
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Sort posts
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'likes':
          aValue = a.likes;
          bValue = b.likes;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [blogPosts, selectedCategory, searchTerm, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortBy, sortOrder]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className={`blog ${className}`} aria-labelledby="blog-heading">
      <div className="container">
        <AnimatedSection animation="fadeInDown" delay={0.2}>
          <div className="blog-header">
            <h2 id="blog-heading" className="section-title">Blog Técnico</h2>
            <p className="section-subtitle">
              Artículos sobre desarrollo web, tecnologías modernas y mejores prácticas
            </p>
          </div>
        </AnimatedSection>

        {/* Filters and Search */}
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <div className="blog-controls">
            <div className="search-container">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                  aria-label="Buscar artículos"
                />
                {searchTerm && (
                  <button
                    className="clear-search"
                    onClick={() => setSearchTerm('')}
                    aria-label="Limpiar búsqueda"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="filter-container">
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={selectedCategory === category}
                  >
                    {category === 'all' ? 'Todos' : category}
                  </button>
                ))}
              </div>

              <div className="sort-controls">
                <label htmlFor="sort-select" className="sort-label">Ordenar por:</label>
                <div className="sort-buttons">
                  {[
                    { key: 'date', label: 'Fecha' },
                    { key: 'views', label: 'Vistas' },
                    { key: 'likes', label: 'Likes' },
                    { key: 'title', label: 'Título' }
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      className={`sort-btn ${
                        sortBy === key ? 'active' : ''
                      }`}
                      onClick={() => handleSortChange(key)}
                      aria-pressed={sortBy === key}
                    >
                      {label}
                      {sortBy === key && (
                        <span className="sort-arrow">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Results Info */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <div className="results-info">
            <p>
              Mostrando {currentPosts.length} de {filteredAndSortedPosts.length} artículos
              {searchTerm && ` para "${searchTerm}"`}
              {selectedCategory !== 'all' && ` en ${selectedCategory}`}
            </p>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <AnimatedSection animation="fadeInUp" delay={0.8}>
          <div className="blog-grid">
            <AnimatePresence mode="wait">
              {currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className={`blog-card ${post.featured ? 'featured' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="blog-card-image">
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        className="post-image"
                        width={400}
                        height={250}
                      />
                      {post.featured && (
                        <div className="featured-badge">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          Destacado
                        </div>
                      )}
                      <div className="post-category">{post.category}</div>
                    </div>

                    <div className="blog-card-content">
                      <div className="post-meta">
                        <span className="post-date">{formatDate(post.date)}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>

                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>

                      <div className="post-tags">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="post-tag">{tag}</span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="post-tag more">+{post.tags.length - 3}</span>
                        )}
                      </div>

                      <div className="post-footer">
                        <div className="post-stats">
                          <span className="stat">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {post.views}
                          </span>
                          <span className="stat">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            {post.likes}
                          </span>
                        </div>
                        <button className="read-more-btn">
                          Leer más
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7,7 17,7 17,17"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  className="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="no-results-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                  <h3>No se encontraron artículos</h3>
                  <p>Intenta con otros términos de búsqueda o cambia los filtros.</p>
                  <button
                    className="reset-filters-btn"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                  >
                    Limpiar filtros
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Pagination */}
        {totalPages > 1 && (
          <AnimatedSection animation="fadeInUp" delay={1.0}>
            <div className="pagination">
              <button
                className="pagination-btn prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
                Anterior
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = page === 1 || 
                                  page === totalPages || 
                                  (page >= currentPage - 1 && page <= currentPage + 1);
                  
                  if (!showPage) {
                    // Show ellipsis
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="pagination-ellipsis">...</span>;
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      className={`pagination-btn number ${
                        currentPage === page ? 'active' : ''
                      }`}
                      onClick={() => handlePageChange(page)}
                      aria-label={`Ir a página ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                className="pagination-btn next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
              >
                Siguiente
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Blog;