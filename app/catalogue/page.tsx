import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { CatalogueView } from '@/components/catalogue-view'

export const metadata: Metadata = {
  title: 'Catálogo — Candy House',
  description:
    'Explora el catálogo de Candy House: envoltura de regalos, desayunos sorpresa, cajas de dulces, anchetas a tu gusto, globos personalizados, peluches y flores y otros.',
}

export default function CataloguePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              El catálogo
            </span>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Algo dulce para todos.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Explora nuestra colección completa de regalos cuidadosamente curados. Toca cualquier
              regalo para ver los detalles y consultar directamente por WhatsApp.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Cargando regalos…</div>}>
            <CatalogueView />
          </Suspense>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  )
}
