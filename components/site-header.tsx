'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, whatsappLink } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink('¡Hola Candy House! Tengo una pregunta sobre sus regalos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4" />
            Escríbenos
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'grid overflow-hidden border-border/60 bg-background transition-[grid-template-rows,border-color] duration-300 ease-in-out md:hidden',
          open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr] border-t-0',
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-hidden={!open}
            className={cn(
              'mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 transition-opacity duration-200',
              open ? 'opacity-100 delay-100' : 'pointer-events-none opacity-0',
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/60',
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink('¡Hola Candy House! Tengo una pregunta sobre sus regalos.')}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground"
            >
              <MessageCircle className="size-4" />
              Escríbenos
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
