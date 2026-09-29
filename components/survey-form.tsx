'use client'

import { useActionState, useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitSurvey, type SurveyActionState } from '@/app/survey/actions'
import { SURVEY_QUESTIONS } from '@/lib/survey-questions'
import { StarRating } from '@/components/star-rating'

const initialState: SurveyActionState = { success: false }

export function SurveyForm() {
  const [state, formAction, isPending] = useActionState(submitSurvey, initialState)
  const [ratings, setRatings] = useState<Record<number, number>>({})

  const allAnswered = SURVEY_QUESTIONS.every((question) => (ratings[question.number] ?? 0) >= 1)

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center animate-in fade-in zoom-in-95">
        <CheckCircle2 className="size-14 text-primary" />
        <h2 className="font-serif text-2xl text-foreground">¡Gracias por tu tiempo!</h2>
        <p className="max-w-sm text-muted-foreground">
          Tu opinión nos ayuda a seguir endulzando cada ocasión. Nos vemos pronto en Candy House.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      {SURVEY_QUESTIONS.map((question) => (
        <div key={question.number} className="flex flex-col gap-3">
          <label className="text-sm font-medium text-foreground sm:text-base">
            {question.number}. {question.text}
          </label>
          <StarRating
            name={`q${question.number}`}
            label={question.text}
            value={ratings[question.number] ?? 0}
            onChange={(value) =>
              setRatings((prev) => ({ ...prev, [question.number]: value }))
            }
          />
        </div>
      ))}

      <div className="flex flex-col gap-3 border-t border-border/60 pt-6">
        <p className="text-sm font-medium text-foreground">
          Si quieres, déjanos tus datos (opcional)
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </div>
      </div>

      {state.error && <p className="text-sm text-destructive">{state.error}</p>}

      <button
        type="submit"
        disabled={!allAnswered || isPending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-50"
      >
        {isPending && <Loader2 className="size-4 animate-spin" />}
        Enviar respuestas
      </button>
    </form>
  )
}
