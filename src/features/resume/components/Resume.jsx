import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'
import TimelineItem from './TimelineItem'

/**
 * Sección de currículum: educación y experiencia en formato de línea de tiempo.
 */
function Resume() {
  return (
    <section id="resume" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 md:mb-14 flex flex-col items-center gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">
            Currículum
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Educación y experiencia</h2>
          <p className="max-w-2xl text-slate-400 text-base md:text-lg">
            Un resumen de mi formación académica y mi trayectoria práctica en programación.
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Educación */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                <FaGraduationCap size={18} />
              </span>
              <h3 className="text-xl font-bold text-white">Educación</h3>
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
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <FaBriefcase size={18} />
              </span>
              <h3 className="text-xl font-bold text-white">Experiencia</h3>
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
