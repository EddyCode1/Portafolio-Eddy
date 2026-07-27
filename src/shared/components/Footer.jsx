import { profile } from '../data/profile'

/**
 * Pie de página simple con derechos y nombre.
 */
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-500">
      © {year} {profile.name}. Todos los derechos reservados.
    </footer>
  )
}

export default Footer
