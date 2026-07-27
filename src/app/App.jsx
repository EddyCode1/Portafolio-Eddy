import Navbar from '../features/navbar/components/Navbar'
import Hero from '../features/hero/components/Hero'
import About from '../features/about/components/About'
import Skills from '../features/skills/components/Skills'
import Resume from '../features/resume/components/Resume'
import Projects from '../features/projects/components/Projects'
import Contact from '../features/contact/components/Contact'
import Footer from '../shared/components/Footer'

/**
 * Componente raíz del portafolio.
 * Ensambla todas las secciones (features) en una sola página con scroll.
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
