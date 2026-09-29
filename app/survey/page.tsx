import type { Metadata } from 'next'
import { Logo } from '@/components/logo'
import { SurveyForm } from '@/components/survey-form'

export const metadata: Metadata = {
  title: 'Encuesta — Candy House',
  description: 'Cuéntanos cómo fue tu experiencia con Candy House.',
}

export default function SurveyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-16">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo className="mb-4" />
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">
            ¿Cómo estuvo tu experiencia?
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Tu opinión nos ayuda a mejorar. Tómate un minuto para calificarnos con estrellas.
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-xl shadow-primary/10 md:p-10">
          <SurveyForm />
        </div>
      </div>
    </main>
  )
}
