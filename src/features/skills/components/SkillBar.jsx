import PropTypes from 'prop-types'
import {
  FaJava,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaGitAlt,
  FaDocker,
  FaUsers,
} from 'react-icons/fa'
import { DiDotnet, DiMongodb } from 'react-icons/di'

const iconMap = {
  Java: FaJava,
  JavaScript: FaJsSquare,
  React: FaReact,
  'React Native': FaReact,
  'HTML & CSS / Tailwind': FaHtml5,
  '.NET': DiDotnet,
  'Node.js / Express': FaNodeJs,
  'SQL / MongoDB': DiMongodb,
  Python: FaPython,
  Angular: FaAngular,
  'Git & GitHub': FaGitAlt,
  SCRUM: FaUsers,
  Docker: FaDocker,
}

const colorMap = {
  Java: '#f89820',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'React Native': '#61dafb',
  'HTML & CSS / Tailwind': '#e34f26',
  '.NET': '#512bd4',
  'Node.js / Express': '#68a063',
  'SQL / MongoDB': '#4db33d',
  Python: '#3776ab',
  Angular: '#dd0031',
  'Git & GitHub': '#f05032',
  SCRUM: '#2496ed',
  Docker: '#2496ed',
}

function SkillBar({ name, level }) {
  const Icon = iconMap[name] || FaDocker
  const color = colorMap[name] || '#6366f1'
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex items-center justify-center">
        <svg width="110" height="110" className="-rotate-90">
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="8"
          />
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <Icon
            className="text-2xl"
            style={{ color }}
          />
          <span className="mt-1 text-xs font-bold text-slate-500">{level}%</span>
        </div>
      </div>
      <span className="text-center text-sm font-semibold text-slate-800">{name}</span>
    </div>
  )
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}

export default SkillBar
