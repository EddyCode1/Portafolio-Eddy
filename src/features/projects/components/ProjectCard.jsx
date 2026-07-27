import PropTypes from 'prop-types'
import { FaGithub, FaExternalLinkAlt, FaImage, FaArrowRight } from 'react-icons/fa'

function ProjectCard({ project }) {
  const { title, description, skills, repo, demo, images } = project
  const previewImage = images?.find((img) => img.src)

  const gradients = [
    'from-indigo-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-fuchsia-500',
    'from-rose-500 to-pink-500',
  ]

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {previewImage ? (
        <img
          src={previewImage.src}
          alt={previewImage.alt}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div
          className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradients[project.id % gradients.length]} text-white/70`}
        >
          <FaImage size={40} />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-zinc-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-indigo-400"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3">
          <a
            href={`/project/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-indigo-500"
          >
            Explorar este proyecto <FaArrowRight size={12} />
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-zinc-800"
            >
              <FaGithub size={14} /> Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-zinc-800"
            >
              <FaExternalLinkAlt size={12} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    repo: PropTypes.string,
    demo: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
  }).isRequired,
}

export default ProjectCard
