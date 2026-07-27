import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCode, FaBirthdayCake } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'

const GENERAL_ITEMS = [
  { icon: FaBirthdayCake, label: 'Edad', value: profile.general.age },
  { icon: FaMapMarkerAlt, label: 'Ubicación', value: profile.general.location },
  { icon: FaCode, label: 'Experiencia', value: profile.general.yearsCoding },
  { icon: FaEnvelope, label: 'Correo', value: profile.general.email },
  { icon: FaPhoneAlt, label: 'Teléfono', value: profile.general.phone },
]

/**
 * Sección "Sobre mí": rol, bio breve y datos generales.
 */
function About() {
  return (
    <section id="about" className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14 flex flex-col items-center gap-3">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">
            Sobre mí
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">{profile.role}</h2>
          <p className="max-w-2xl text-slate-400 text-base md:text-lg">{profile.tagline}</p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Descripción */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
            <h3 className="text-xl font-bold text-slate-900">¿Quién soy?</h3>
            <p className="whitespace-pre-line leading-relaxed text-slate-600">{profile.bio}</p>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              {profile.general.status}
            </span>
          </div>

          {/* Datos generales */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GENERAL_ITEMS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-800">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
