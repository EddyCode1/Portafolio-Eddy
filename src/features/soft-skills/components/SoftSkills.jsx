import {
  FaUsers,
  FaTrophy,
  FaComments,
  FaLightbulb,
  FaSyncAlt,
  FaBookOpen,
  FaFire,
  FaClock,
} from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'

const softSkillIcons = {
  'Trabajo en equipo': FaUsers,
  Liderazgo: FaTrophy,
  'Comunicación efectiva': FaComments,
  'Resolución de problemas': FaLightbulb,
  Adaptabilidad: FaSyncAlt,
  'Aprendizaje continuo': FaBookOpen,
  'Trabajo bajo presión': FaFire,
  'Gestión del tiempo': FaClock,
}

function SoftSkills() {
  return (
    <section id="soft-skills" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-center gap-3 md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-sm">
            Blandas
          </span>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Habilidades blandas
          </h2>
          <p className="max-w-2xl text-base text-slate-400 md:text-lg">
            Cualidades personales que complementan mi perfil técnico y potencian mi trabajo en equipo.
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profile.softSkills.map((skill) => {
            const Icon = softSkillIcons[skill] || FaUsers
            return (
              <div
                key={skill}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-slate-800">{skill}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
