import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gift, Heart, Sparkles, Truck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { Marquee } from '@/components/marquee'
import { FeaturedProducts } from '@/components/featured-products'
import { Reveal } from '@/components/reveal'
import { categories, products } from '@/lib/products'
import { whatsappLink } from '@/lib/site'

const featured = products.filter((p) => p.badge === 'Más vendido').slice(0, 4)

const perks = [
  { icon: Gift, title: 'Bellamente envuelto', text: 'Cada regalo llega listo para dar, con listón y todo.' },
  { icon: Heart, title: 'Hecho con amor', text: 'Terminado a mano por nuestro pequeño equipo de estudio.' },
  { icon: Sparkles, title: 'Detalles personales', text: 'Agrega una nota escrita a mano a cualquier regalo.' },
  { icon: Truck, title: 'Dulce y rápido', text: 'Entrega local coordinada por chat.' },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-8 md:px-8 md:py-24">
            <Reveal className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                Estudio boutique de regalos
              </span>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl">
                Tu cómplice para cada ocasión
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                Candy House es donde los pequeños detalles pensados llegan bellamente envueltos.
                Anchetas, dulces, flores y más, regalos para endulzar cada momento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  Explorar el catálogo
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={whatsappLink('¡Hola Candy House! Me gustaría ayuda para elegir un regalo.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Pedir una recomendación
                </a>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="animate-float overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/sitio/sitio-01.webp"
                  alt="Candy House local físico"
                  width={720}
                  height={720}
                  priority
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-lg md:-left-8">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Heart className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-none">+5,000 sonrisas</p>
                  <p className="mt-1 text-xs text-muted-foreground">regaladas y contando</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Perks */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <perk.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{perk.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{perk.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Compra por antojo
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl text-balance">
                Explora nuestras categorías
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Ver todo
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, i) => (
              <Reveal key={category.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/catalogue?category=${category.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-border/60"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                    <Image
                      src={category.image || '/placeholder.svg'}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                    <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                    <p className="mt-0.5 text-sm text-background/80">{category.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Amados por todos
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl text-balance">
                Nuestros más vendidos
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Ver el catálogo
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal className="mt-8" delay={120}>
            <FeaturedProducts products={featured} />
          </Reveal>
        </section>

        {/* Celebration feature */}
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60">
            <Image
              src="/images/sitio/sitio-02.webp"
              alt="Una escena de celebración con globos y regalos"
              width={1400}
              height={700}
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-foreground/55 md:bg-gradient-to-r md:from-foreground/70 md:via-foreground/30 md:to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-background md:p-16">
              <h2 className="max-w-lg font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Cada ocasión merece un poco de dulzura.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-background/80">
                Cumpleaños, agradecimientos, momentos porque sí, cuéntanos la historia y te
                ayudaremos a armar la sorpresa perfecta.
              </p>
              <div className="mt-8">
                <a
                  href={whatsappLink('¡Hola Candy House! Tengo una ocasión próxima y necesito un regalo.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
                >
                  Planea un regalo con nosotros
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
            <p className="font-serif text-2xl font-medium leading-snug text-balance md:text-4xl">
              &ldquo;El regalo más bonito que he recibido. Candy House lo entiende, 
              detallista, dulce e increíblemente tierno.&rdquo;
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Amara L. — clienta feliz
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  )
}
