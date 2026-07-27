import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'
import SectionTitle from '../../../shared/components/SectionTitle'
import TimelineItem from './TimelineItem'

/**
 * Sección de currículum: educación y experiencia en formato de línea de tiempo.
 */
function Resume() {
  return (
    <section id="resume" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Currículum"
          title="Educación y experiencia"
          description="Un resumen de mi formación académica y mi trayectoria práctica en programación."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Educación */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
                <FaGraduationCap size={18} />
              </span>
              <h3 className="text-xl font-bold text-slate-900">Educación</h3>
            </div>
            {profile.education.map((item, index) => (
              <TimelineItem
                key={item.title}
                {...item}
                isLast={index === profile.education.length - 1}
              />
            ))}
          </div>

          {/* Experiencia */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
                <FaBriefcase size={18} />
              </span>
              <h3 className="text-xl font-bold text-slate-900">Experiencia</h3>
            </div>
            {profile.experience.map((item, index) => (
              <TimelineItem
                key={item.title}
                {...item}
                isLast={index === profile.experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
