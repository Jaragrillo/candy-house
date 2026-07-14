import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Compass, Gift, Heart, Leaf, Sparkles, Target } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'
import { socials, whatsappLink } from '@/lib/site'

const values = [
  {
    icon: Heart,
    title: 'Primero el detalle',
    text: 'Nos obsesionan los pequeños detalles que hacen que un regalo se sienta personal y pensado.',
  },
  {
    icon: Sparkles,
    title: 'Bellamente terminado',
    text: 'Cada regalo se envuelve a mano en nuestra paleta rosa insignia, listo para dar.',
  },
  {
    icon: Leaf,
    title: 'Hecho con conciencia',
    text: 'Elegimos empaques reciclables y trabajamos con pequeños productores locales siempre que podemos.',
  },
  {
    icon: Gift,
    title: 'Hecho para sorprender',
    text: 'Desde un ramillete hasta una canasta deluxe, creamos regalos que despiertan verdadera alegría.',
  },
]

const stats = [
  { value: '+5,000', label: 'regalos enviados' },
  { value: '7', label: 'categorías de regalos' },
  { value: '2021', label: 'fundada' },
  { value: '100%', label: 'envuelto a mano' },
]

const missionPoints = [
  'Productos de alta calidad, personalizados con dedicación y creatividad.',
  'Detalles que expresan amor, gratitud, amistad y celebración.',
  'Cada ocasión especial convertida en un recuerdo inolvidable.',
]

const visionPoints = [
  'Inspirar emociones y crear momentos memorables.',
  'Ser la primera opción de nuestros clientes.',
  'Que cada detalle transmita un sentimiento auténtico.',
]

export const metadata: Metadata = {
  title: 'Nosotros — Candy House',
  description:
    'Conoce Candy House, un estudio boutique de regalos que crea obsequios dulces, pensados y bellamente envueltos desde 2019.',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Nuestra historia
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-balance md:text-6xl">
              Un pequeño estudio con un gran cariño por regalar.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Candy House nació en 2021 con el propósito de transformar los pequeños y grandes momentos en recuerdos inolvidables a través de regalos llenos de intención y creatividad.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Somos un estudio boutique de regalos especializado en el diseño y elaboración de detalles personalizados para toda ocasión. Creamos desayunos sorpresa, anchetas, arreglos con globos, flores, peluches, dulces y muchas otras opciones pensadas para sorprender y emocionar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Explora nuestros regalos
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink('¡Hola Candy House! Me encantaría conocer más sobre ustedes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                Saludar
              </a>
            </div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/sitio/sitio-01.webp"
                  alt="Imagen del local físico de Candy House"
                  width={720}
                  height={820}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 md:grid-cols-4 md:px-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center">
                <p className="font-serif text-4xl font-semibold text-primary md:text-5xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Misión & Visión */}
        <section className="relative overflow-hidden">
          <div
            className="absolute -right-24 top-10 -z-10 size-72 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 bottom-10 -z-10 size-72 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Lo que nos mueve
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl text-balance">
                Nuestra esencia, en dos ideas.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                Todo lo que hacemos nace de una sola línea que nos guía:{' '}
                <span className="font-medium text-foreground">
                  tu cómplice para cada ocasión.
                </span>
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              {/* Misión */}
              <Reveal from="up" className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 md:p-10">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Target className="size-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold md:text-3xl">Misión</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                    En Candy House creamos regalos y detalles únicos que hablan por ti: amor,
                    gratitud, amistad y celebración envueltos a mano. Nos comprometemos con productos
                    de alta calidad, personalizados con dedicación y creatividad, para transformar
                    cada ocasión especial en un recuerdo inolvidable y acercar a las personas que
                    quieres.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Heart className="size-3" />
                        </span>
                        <span className="text-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              {/* Visión */}
              <Reveal from="up" delay={140} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-primary p-8 text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-10">
                  <div
                    className="absolute -right-10 -top-10 size-40 rounded-full bg-primary-foreground/10 blur-2xl"
                    aria-hidden="true"
                  />
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground transition-transform group-hover:scale-110">
                    <Compass className="size-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold md:text-3xl">Visión</h3>
                  <p className="mt-4 leading-relaxed text-primary-foreground/85 text-pretty">
                    Ser la tienda reconocida por inspirar emociones y crear momentos memorables a
                    través de regalos innovadores y personalizados. Aspiramos a convertirnos en la
                    primera opción de nuestros clientes, destacando por la creatividad y el
                    compromiso de hacer que cada detalle transmita un sentimiento auténtico.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {visionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                          <Sparkles className="size-3" />
                        </span>
                        <span className="text-primary-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            {/* Immersive detail strip */}
            <Reveal delay={100} className="mt-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/60">
                <Image
                  src="/images/sitio/sitio-02.webp"
                  alt="Imagen dos del local físico"
                  width={1400}
                  height={600}
                  className="h-64 w-full object-cover md:h-80"
                />
                <div className="absolute inset-0 bg-foreground/55 md:bg-gradient-to-r md:from-foreground/70 md:via-foreground/30 md:to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 md:p-14">
                  <p className="max-w-xl font-serif text-2xl font-medium leading-snug text-balance text-background md:text-4xl">
                    Cada listón, un gesto. Cada detalle, un sentimiento.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              En lo que creemos
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl text-balance">
              Pequeños valores que dan forma a cada regalo.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <Reveal>
            <div className="rounded-[2.5rem] border border-border/60 bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Armemos juntos algo maravilloso.
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
                Cuéntanos para quién es y el momento que estás celebrando — te ayudaremos a encontrar
                el regalo perfecto.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappLink('¡Hola Candy House! Me gustaría ayuda para elegir un regalo.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
                >
                  Escríbenos
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  Ver el catálogo
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  )
}
