'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, MessageCircle, Check } from 'lucide-react'
import type { Product } from '@/lib/products'
import { getCategory } from '@/lib/products'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const EXIT_DURATION = 220

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const [shown, setShown] = useState(product)
  const [closing, setClosing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (product) {
      setShown(product)
      setClosing(false)
      return
    }
    if (!shown) return
    setClosing(true)
    const timeout = setTimeout(() => {
      setShown(null)
      setClosing(false)
    }, EXIT_DURATION)
    return () => clearTimeout(timeout)
  }, [product, shown])

  useEffect(() => {
    if (!shown) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [shown, onClose])

  if (!shown || !mounted) return null

  const category = getCategory(shown.category)

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm md:items-center md:p-6',
        closing ? 'animate-out fade-out duration-200' : 'animate-in fade-in duration-300',
      )}
      role="dialog"
      aria-modal="true"
      aria-label={shown.name}
      onClick={onClose}
    >
      <div
        className={cn(
          'relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-card md:max-h-[88vh] md:flex-row md:rounded-3xl',
          closing
            ? 'animate-out fade-out-0 zoom-out-95 slide-out-to-bottom-10 duration-200 ease-in md:slide-out-to-bottom-0'
            : 'animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-10 duration-300 ease-out md:slide-in-from-bottom-0',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-[4/3] w-full shrink-0 bg-secondary/40 md:aspect-auto md:w-1/2">
          <Image
            src={shown.image || '/placeholder.svg'}
            alt={shown.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          {category && (
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {category.name}
            </span>
          )}
          <h2 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">{shown.name}</h2>
          {/* <p className="mt-1 text-lg font-medium text-primary">${shown.price}</p> */}
          <p className="mt-4 leading-relaxed text-muted-foreground">{shown.description}</p>

          <ul className="mt-6 space-y-2.5">
            {shown.details.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappLink(
                // `¡Hola Candy House! Me interesa "${shown.name}" ($${shown.price}). ¿Está disponible?`,
                `¡Hola Candy House! Me interesa "${shown.name}". ¿Está disponible?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-5" />
              Consultar por WhatsApp
            </a>
            <p className="text-center text-xs text-muted-foreground">
              Esto es una muestra, los pedidos se coordinan directamente por chat.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
