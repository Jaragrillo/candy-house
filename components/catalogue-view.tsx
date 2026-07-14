'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Product } from '@/lib/products'
import { categories, products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ProductDialog } from '@/components/product-dialog'
import { cn } from '@/lib/utils'

export function CatalogueView() {
  const searchParams = useSearchParams()
  const initial = searchParams.get('category') ?? 'all'
  // `active` drives the rendered list; `pending` drives the highlighted chip.
  const [active, setActive] = useState(initial)
  const [pending, setPending] = useState(initial)
  const [show, setShow] = useState(true)
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  const filters = [{ slug: 'all', name: 'Todos los regalos' }, ...categories]

  function changeFilter(slug: string) {
    if (slug === pending) return
    setPending(slug)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(slug)
      return
    }
    // Fade the current grid out, swap the list, then fade + stagger back in.
    setShow(false)
    window.setTimeout(() => {
      setActive(slug)
      setShow(true)
    }, 200)
  }

  return (
    <>
      <div className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {filters.map((f) => (
          <button
            key={f.slug}
            type="button"
            onClick={() => changeFilter(f.slug)}
            className={cn(
              'shrink-0 rounded-full border px-5 py-2.5 text-sm cursor-pointer font-medium transition-all duration-300',
              pending === f.slug
                ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary',
            )}
          >
            {f.name}
          </button>
        ))}
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Mostrando {filtered.length} {filtered.length === 1 ? 'regalo' : 'regalos'}
      </p>

      <div
        className={cn(
          'transition-opacity duration-200 ease-out',
          show ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div
          key={active}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} onSelect={setSelected} index={i} />
          ))}
        </div>
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
