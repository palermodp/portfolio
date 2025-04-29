import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  )
}

export default App