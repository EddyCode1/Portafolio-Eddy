import PropTypes from 'prop-types'

/**
 * Elemento individual de una línea de tiempo (educación o experiencia).
 */
function TimelineItem({ title, place, period, description, isLast }) {
  return (
    <div className="relative flex gap-5 pb-8">
      <div className="flex flex-col items-center">
        <span className="z-10 h-3.5 w-3.5 shrink-0 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
        {!isLast && <span className="w-px flex-1 bg-slate-200" />}
      </div>

      <div className="pb-2">
        <span className="text-xs font-bold uppercase tracking-wide text-indigo-500">
          {period}
        </span>
        <h4 className="mt-1 text-lg font-bold text-slate-900">{title}</h4>
        <p className="text-sm font-semibold text-slate-500">{place}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
}

export default TimelineItem
