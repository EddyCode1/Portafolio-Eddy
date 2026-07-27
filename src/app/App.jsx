import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../features/navbar/components/Navbar'
import Hero from '../features/hero/components/Hero'
import About from '../features/about/components/About'
import Skills from '../features/skills/components/Skills'
import SoftSkills from '../features/soft-skills/components/SoftSkills'
import Resume from '../features/resume/components/Resume'
import Projects from '../features/projects/components/Projects'
import Contact from '../features/contact/components/Contact'
import Footer from '../shared/components/Footer'
import ProjectDetail from '../features/projects/components/ProjectDetail'
import SplashScreen from '../shared/components/SplashScreen'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const location = useLocation()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSplash(false)
      return
    }
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black">
      {showSplash && <SplashScreen />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
