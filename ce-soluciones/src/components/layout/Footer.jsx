import { content } from '../../data/content'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-gold">
              CE Soluciones
            </h3>
            <p className="text-sm leading-relaxed text-cream/60">
              {content.company.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.05em] uppercase text-gold">
              Navegacion
            </h4>
            <ul className="space-y-2">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.05em] uppercase text-gold">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.2} />
                {content.company.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.2} />
                {content.company.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.2} />
                {content.company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px bg-gold/20" />

        <p className="mt-6 text-center text-xs text-cream/40">
          &copy; 2025 CE Soluciones en Construccion. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
