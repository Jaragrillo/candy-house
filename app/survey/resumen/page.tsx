import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Star, LogOut } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { SURVEY_ADMIN_COOKIE, isValidAdminSessionToken } from '@/lib/survey-auth'
import { SURVEY_QUESTIONS } from '@/lib/survey-questions'
import { Logo } from '@/components/logo'
import { AdminLoginForm } from '@/components/admin-login-form'
import { logoutAdmin } from './actions'

export const metadata: Metadata = {
  title: 'Resumen de la encuesta — Candy House',
}

export default async function SurveyResumenPage() {
  const store = await cookies()
  const token = store.get(SURVEY_ADMIN_COOKIE)?.value
  const authenticated = isValidAdminSessionToken(token)

  if (!authenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-16">
        <AdminLoginForm />
      </main>
    )
  }

  const responses = await prisma.surveyResponse.findMany({
    orderBy: { createdAt: 'desc' },
    include: { answers: true },
  })

  const totals: Record<number, { sum: number; count: number }> = {}
  for (const question of SURVEY_QUESTIONS) {
    totals[question.number] = { sum: 0, count: 0 }
  }
  for (const response of responses) {
    for (const answer of response.answers) {
      totals[answer.questionNumber].sum += answer.rating
      totals[answer.questionNumber].count += 1
    }
  }

  const dateFormatter = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <main className="min-h-screen bg-background px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <Logo />
            <div>
              <h1 className="font-serif text-2xl text-foreground md:text-3xl">
                Resumen de la encuesta
              </h1>
              <p className="text-sm text-muted-foreground">
                {responses.length} respuesta{responses.length === 1 ? '' : 's'} en total
              </p>
            </div>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LogOut className="size-4" />
              Cerrar sesión
            </button>
          </form>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SURVEY_QUESTIONS.map((question) => {
            const { sum, count } = totals[question.number]
            const average = count > 0 ? sum / count : 0
            return (
              <div
                key={question.number}
                className="rounded-3xl border border-border/60 bg-card p-5"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  Pregunta {question.number}
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="size-5 fill-primary text-primary" />
                  <span className="font-serif text-2xl text-foreground">
                    {count > 0 ? average.toFixed(1) : '—'}
                  </span>
                  <span className="text-sm text-muted-foreground">/ 5</span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground" title={question.text}>
                  {question.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border/60 bg-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/40 text-xs font-medium text-secondary-foreground">
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Correo</th>
                <th className="px-4 py-3">Teléfono</th>
                {SURVEY_QUESTIONS.map((question) => (
                  <th key={question.number} className="px-3 py-3 text-center">
                    P{question.number}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {responses.length === 0 && (
                <tr>
                  <td colSpan={4 + SURVEY_QUESTIONS.length} className="px-4 py-8 text-center text-muted-foreground">
                    Todavía no hay respuestas.
                  </td>
                </tr>
              )}
              {responses.map((response) => {
                const ratingByQuestion = new Map(
                  response.answers.map((answer) => [answer.questionNumber, answer.rating]),
                )
                return (
                  <tr key={response.id} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                      {dateFormatter.format(response.createdAt)}
                    </td>
                    <td className="px-4 py-3">{response.name ?? '—'}</td>
                    <td className="px-4 py-3">{response.email ?? '—'}</td>
                    <td className="px-4 py-3">{response.phone ?? '—'}</td>
                    {SURVEY_QUESTIONS.map((question) => (
                      <td key={question.number} className="px-3 py-3 text-center font-medium text-foreground">
                        {ratingByQuestion.get(question.number) ?? '—'}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
