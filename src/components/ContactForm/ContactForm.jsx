import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Por favor ingresa un email válido' : '';
      case 'subject':
        return value.trim().length < 3 ? 'El asunto debe tener al menos 3 caracteres' : '';
      case 'message':
        return value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show success
      // In a real app, you'd send this to your backend or email service
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    blur: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name" className={errors.name ? 'error' : ''}>
            Nombre *
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.name ? 'error' : ''}
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            required
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <motion.span 
              id="name-error"
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.name}
            </motion.span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className={errors.email ? 'error' : ''}>
            Email *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.email ? 'error' : ''}
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            required
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <motion.span 
              id="email-error"
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.email}
            </motion.span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className={errors.subject ? 'error' : ''}>
            Asunto *
          </label>
          <motion.input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.subject ? 'error' : ''}
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            required
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <motion.span 
              id="subject-error"
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.subject}
            </motion.span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className={errors.message ? 'error' : ''}>
            Mensaje *
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.message ? 'error' : ''}
            rows="5"
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            required
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <motion.span 
              id="message-error"
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {errors.message}
            </motion.span>
          )}
        </div>

        <div className="form-submit">
          <AnimatedButton
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            icon={isSubmitting ? 
              <i className="fas fa-spinner fa-spin"></i> : 
              <i className="fas fa-paper-plane"></i>
            }
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </AnimatedButton>
        </div>

        {submitStatus && (
          <motion.div 
            className={`submit-status ${submitStatus}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {submitStatus === 'success' ? (
              <>
                <i className="fas fa-check-circle"></i>
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </>
            ) : (
              <>
                <i className="fas fa-exclamation-circle"></i>
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </>
            )}
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;