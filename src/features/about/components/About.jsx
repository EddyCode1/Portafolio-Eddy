import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCode, FaBirthdayCake } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'
import SectionTitle from '../../../shared/components/SectionTitle'

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
    <section id="about" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sobre mí"
          title={profile.role}
          description={profile.tagline}
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Descripción */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900">¿Quién soy?</h3>
            <p className="whitespace-pre-line text-slate-600 leading-relaxed">{profile.bio}</p>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              {profile.general.status}
            </span>
          </div>

          {/* Datos generales */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GENERAL_ITEMS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-sm"
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
