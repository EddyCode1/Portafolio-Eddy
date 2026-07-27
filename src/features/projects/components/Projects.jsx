import SectionTitle from '../../../shared/components/SectionTitle'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

/**
 * Sección de proyectos: portafolio de aplicaciones desarrolladas.
 */
function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de aplicaciones que he desarrollado, con su código disponible en GitHub."
        />

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
