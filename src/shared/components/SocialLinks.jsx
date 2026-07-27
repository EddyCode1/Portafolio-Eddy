import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  computrabajo: FaBriefcase,
}

const LABELS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  computrabajo: 'CompuTrabajo',
}

/**
 * Lista de enlaces a redes/plataformas profesionales.
 */
function SocialLinks({ socials, variant = 'light' }) {
  const baseClasses =
    variant === 'light'
      ? 'bg-white/10 hover:bg-white/20 text-white'
      : 'bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600'

  return (
    <div className="flex items-center gap-3">
      {Object.entries(socials).map(([key, url]) => {
        const Icon = ICONS[key]
        if (!Icon || !url) return null

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LABELS[key] ?? key}
            title={LABELS[key] ?? key}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${baseClasses}`}
          >
            <Icon size={18} />
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  socials: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']),
}

export default SocialLinks
