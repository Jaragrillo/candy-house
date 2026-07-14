'use client'

import Image from 'next/image'
import type { Product } from '@/lib/products'

export function ProductCard({
  product,
  onSelect,
  index = 0,
}: {
  product: Product
  onSelect: (product: Product) => void
  index?: number
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
      className="group flex animate-in cursor-pointer flex-col overflow-hidden rounded-3xl border border-border/60 bg-card text-left fill-mode-both fade-in-0 zoom-in-95 slide-in-from-bottom-3 duration-500 ease-out transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 motion-reduce:animate-none"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-serif text-lg font-semibold leading-tight">{product.name}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.blurb}
        </p>
        <div className="mt-4 flex items-center justify-end">
          {/* <span className="font-medium text-primary">${product.price}</span> */}
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Ver detalles →
          </span>
        </div>
      </div>
    </button>
  )
}
