import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaImage, FaMobileAlt, FaLaptop, FaTimes, FaGlobe, FaDownload } from 'react-icons/fa'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id))
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6">
        <h1 className="text-2xl font-bold text-white">Proyecto no encontrado</h1>
        <p className="text-slate-400">El proyecto que buscas no existe o ha sido eliminado.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-400"
        >
          <FaArrowLeft size={14} /> Volver al inicio
        </Link>
      </div>
    )
  }

  const hasType = project.images.some((img) => img.type)
  const webImages = project.images.filter((img) => img.type === 'web')
  const movilImages = project.images.filter((img) => img.type === 'movil')
  const genericImages = project.images.filter((img) => !img.type)

  const gradients = [
    'from-indigo-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-fuchsia-500',
    'from-rose-500 to-pink-500',
    'from-amber-500 to-orange-500',
    'from-sky-500 to-blue-500',
  ]

  const ImageCard = ({ image, index }) => {
    const clickable = !!image.src
    const shared = clickable
      ? 'cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
      : ''

    if (image.src) {
      return (
        <img
          src={image.src}
          alt={image.alt}
          onClick={() => setLightbox(image)}
          className={`aspect-video w-full rounded-xl object-cover shadow-md ${shared}`}
        />
      )
    }
    return (
      <div
        className={`flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white/70 shadow-md ${shared}`}
      >
        <div className="flex flex-col items-center gap-3">
          <FaImage size={36} />
          <span className="px-4 text-center text-xs font-medium text-white/80">
            {image.alt}
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      {lightbox && lightbox.src && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <FaTimes size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
        >
          <FaArrowLeft size={14} /> Volver al portafolio
        </Link>

        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 shadow-sm md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
          </header>

          {hasType ? (
            <>
              {webImages.length > 0 && (
                <div className="mb-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                      <FaLaptop size={16} />
                    </span>
                    <h2 className="text-xl font-bold text-white">Versión Web</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {webImages.map((image, index) => (
                      <ImageCard key={index} image={image} index={index} />
                    ))}
                  </div>
                </div>
              )}
              {movilImages.length > 0 && (
                <div className="mb-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                      <FaMobileAlt size={16} />
                    </span>
                    <h2 className="text-xl font-bold text-white">Versión Móvil</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {movilImages.map((image, index) => (
                      <ImageCard key={index} image={image} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {genericImages.map((image, index) => (
                <ImageCard key={index} image={image} index={index} />
              ))}
            </div>
          )}

          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-white">Descripción</h2>
            <p className="leading-relaxed text-zinc-300">{project.longDescription}</p>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-white">Tecnologías</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-semibold text-indigo-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.deployWeb && (
              <a
                href={project.deployWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-500"
              >
                <FaGlobe size={14} /> Despliegue web
              </a>
            )}
            {project.deployMovil && (
              <a
                href={project.deployMovil}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-500"
              >
                <FaDownload size={14} /> Despliegue móvil
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-zinc-800"
              >
                <FaGithub size={16} /> Ver código
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-zinc-800"
              >
                <FaExternalLinkAlt size={14} /> Demo en vivo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetail
