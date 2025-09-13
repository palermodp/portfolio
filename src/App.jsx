import React, { Suspense } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'

// Lazy loading de componentes para mejorar rendimiento
const About = React.lazy(() => import('./components/About/About'))
const Experience = React.lazy(() => import('./components/Experience/Experience'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const Blog = React.lazy(() => import('./components/Blog/Blog'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop/ScrollToTop'))

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">
          <Suspense fallback={<div className="loading-fallback">Cargando...</div>}>
            <About />
            <Experience />
            <Projects />
            <Blog />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <ScrollToTop />
        </Suspense>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App