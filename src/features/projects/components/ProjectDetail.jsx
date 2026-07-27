import { useParams, Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaImage } from 'react-icons/fa'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6">
        <h1 className="text-2xl font-bold text-slate-900">Proyecto no encontrado</h1>
        <p className="text-slate-500">El proyecto que buscas no existe o ha sido eliminado.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
        >
          <FaArrowLeft size={14} /> Volver al inicio
        </Link>
      </div>
    )
  }

  const gradients = [
    'from-indigo-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-fuchsia-500',
    'from-rose-500 to-pink-500',
    'from-amber-500 to-orange-500',
    'from-sky-500 to-blue-500',
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <FaArrowLeft size={14} /> Volver al portafolio
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{project.title}</h1>
        </header>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white/70 shadow-md`}
            >
              <div className="flex flex-col items-center gap-3">
                <FaImage size={36} />
                <span className="px-4 text-center text-xs font-medium text-white/80">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Descripción</h2>
          <p className="leading-relaxed text-slate-600">{project.longDescription}</p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-slate-700"
            >
              <FaGithub size={16} /> Ver código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-700 transition hover:bg-slate-50"
            >
              <FaExternalLinkAlt size={14} /> Demo en vivo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
