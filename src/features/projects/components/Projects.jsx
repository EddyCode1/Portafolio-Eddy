import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

/**
 * Sección de proyectos: portafolio de aplicaciones desarrolladas.
 */
function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14 flex flex-col items-center gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proyectos destacados</h2>
          <p className="max-w-2xl text-slate-400 text-base md:text-lg">
            Una selección de aplicaciones que he desarrollado, con su código disponible en GitHub.
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
