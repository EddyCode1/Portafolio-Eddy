import PropTypes from 'prop-types'

/**
 * Encabezado reutilizable para cada sección del portafolio.
 */
function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col gap-3 mb-10 md:mb-14 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title}</h2>
      {description && (
        <p className="max-w-2xl text-slate-500 text-base md:text-lg">{description}</p>
      )}
      <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
    </div>
  )
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
}

export default SectionTitle
