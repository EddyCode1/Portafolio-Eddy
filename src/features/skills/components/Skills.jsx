import { profile } from '../../../shared/data/profile'
import SectionTitle from '../../../shared/components/SectionTitle'
import SkillBar from './SkillBar'

/**
 * Sección de habilidades técnicas representadas con barras de progreso.
 */
function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías con las que trabajo"
          description="Un vistazo general a mi nivel de dominio en las principales herramientas de mi stack."
        />

        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {profile.skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
