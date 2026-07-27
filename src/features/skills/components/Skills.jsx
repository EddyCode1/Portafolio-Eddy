import { profile } from '../../../shared/data/profile'
import SkillBar from './SkillBar'

/**
 * Sección de habilidades técnicas representadas con barras de progreso.
 */
function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 md:mb-14 flex flex-col items-center gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">
            Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Tecnologías con las que trabajo</h2>
          <p className="max-w-2xl text-slate-400 text-base md:text-lg">
            Un vistazo general a mi nivel de dominio en las principales herramientas de mi stack.
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profile.skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
