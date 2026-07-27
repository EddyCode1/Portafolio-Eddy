import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaCoffee } from 'react-icons/fa'
import { useActiveSection } from '../../../shared/hooks/useActiveSection'
import { profile } from '../../../shared/data/profile'

const NAV_LINKS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Tecnologías' },
  { id: 'soft-skills', label: 'Blandas' },
  { id: 'resume', label: 'Currículum' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

/**
 * Barra de navegación fija con scroll suave y resaltado de sección activa.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick('home')}
          className="text-lg font-extrabold tracking-tight text-white"
        >
          <FaCoffee className="text-indigo-400" size={22} />
        </button>

        {/* Menú desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeId === link.id ? 'text-indigo-400' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="text-white md:hidden"
          aria-label="Abrir menú"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="flex flex-col gap-1 bg-slate-900/98 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`w-full rounded-lg px-3 py-3 text-left text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeId === link.id
                    ? 'bg-indigo-500/10 text-indigo-400'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
