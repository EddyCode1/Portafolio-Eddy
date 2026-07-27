import { FaArrowDown } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'
import SocialLinks from '../../../shared/components/SocialLinks'

/**
 * Sección de bienvenida (Hero): minimalista, con frase de identidad.
 */
function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 px-6 text-center"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 fade-in">
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
          Bienvenido a mi portafolio
        </span>

        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Hola, soy <span className="text-indigo-400">{profile.name}</span>
        </h1>

        <p className="max-w-xl text-lg text-slate-300 md:text-xl">{profile.tagline}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-400"
          >
            Ver proyectos
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Contactarme
          </button>
        </div>

        <SocialLinks socials={profile.socials} variant="light" />
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 z-10 text-slate-400 hover:text-white transition-colors animate-bounce"
      >
        <FaArrowDown size={20} />
      </button>
    </section>
  )
}

export default Hero
