import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { navLinks, socials, whatsappLink } from '@/lib/site'
import { categories } from '@/lib/products'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Un estudio boutique de regalos que crea obsequios dulces, pensados, personalizados y bellamente
              envueltos para cada momento que vale la pena celebrar.
            </p>
            <a
              href={whatsappLink('¡Hola Candy House! Me encantaría saber más sobre sus regalos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explorar</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Categorías
            </h3>
            <ul className="mt-4 space-y-3">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/catalogue?category=${c.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Síguenos</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{s.name}</span>
                    <span className="text-xs text-muted-foreground/70">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Candy House. Hecho con amor.</p>
          <p>Tu cómplice para cada ocasión.</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none bg-gradient-to-b from-primary/15 to-transparent bg-clip-text text-center font-serif text-[18vw] font-semibold leading-none text-transparent"
      >
        Candy House
      </p>
    </footer>
  )
}
