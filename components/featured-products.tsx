'use client'

import { useState } from 'react'
import type { Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ProductDialog } from '@/components/product-dialog'

export function FeaturedProducts({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} onSelect={setSelected} index={i} />
        ))}
      </div>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
