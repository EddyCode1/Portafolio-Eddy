import PropTypes from 'prop-types'

/**
 * Barra de progreso individual para representar una habilidad.
 */
function SkillBar({ name, level }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
        <span>{name}</span>
        <span className="text-indigo-500">{level}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}

export default SkillBar
