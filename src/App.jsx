import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App