import { Routes, Route } from 'react-router-dom'
import Navbar from '../features/navbar/components/Navbar'
import Hero from '../features/hero/components/Hero'
import About from '../features/about/components/About'
import Skills from '../features/skills/components/Skills'
import Resume from '../features/resume/components/Resume'
import Projects from '../features/projects/components/Projects'
import Contact from '../features/contact/components/Contact'
import Footer from '../shared/components/Footer'
import ProjectDetail from '../features/projects/components/ProjectDetail'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
