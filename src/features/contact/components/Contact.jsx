import { useState } from 'react'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { profile } from '../../../shared/data/profile'
import SectionTitle from '../../../shared/components/SectionTitle'
import SocialLinks from '../../../shared/components/SocialLinks'

/**
 * Sección de contacto: formulario simple + enlaces directos a redes.
 * El formulario es de demostración (no envía datos a un backend real).
 */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-slate-900 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto"
          description="Estoy disponible para prácticas, empleo o proyectos freelance. Escríbeme o encuéntrame en mis redes."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Info de contacto */}
          <div className="flex flex-col gap-6 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                <FaEnvelope size={16} />
              </span>
              <a href={`mailto:${profile.general.email}`} className="font-semibold hover:text-white">
                {profile.general.email}
              </a>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                También puedes encontrarme en
              </p>
              <SocialLinks socials={profile.socials} variant="light" />
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              value={form.name}
              onChange={handleChange}
              className="input-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              value={form.email}
              onChange={handleChange}
              className="input-base"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="input-base resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-indigo-400"
            >
              <FaPaperPlane size={14} /> Enviar mensaje
            </button>
            {sent && (
              <p className="text-sm font-semibold text-emerald-400">
                ¡Mensaje enviado! Te responderé pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
