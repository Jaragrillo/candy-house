'use server'

import { prisma } from '@/lib/prisma'
import { SURVEY_QUESTIONS } from '@/lib/survey-questions'

export type SurveyActionState = {
  success: boolean
  error?: string
}

export async function submitSurvey(
  _prevState: SurveyActionState,
  formData: FormData,
): Promise<SurveyActionState> {
  const ratings: Record<number, number> = {}

  for (const question of SURVEY_QUESTIONS) {
    const raw = formData.get(`q${question.number}`)
    const value = Number(raw)

    if (raw === null || !Number.isInteger(value) || value < 1 || value > 5) {
      return {
        success: false,
        error: 'Por favor califica las 5 preguntas con estrellas antes de enviar.',
      }
    }

    ratings[question.number] = value
  }

  const name = formData.get('name')?.toString().trim() || null
  const email = formData.get('email')?.toString().trim() || null
  const phone = formData.get('phone')?.toString().trim() || null

  try {
    await prisma.$transaction(async (tx) => {
      const response = await tx.surveyResponse.create({ data: { name, email, phone } })

      await tx.surveyAnswer.createMany({
        data: SURVEY_QUESTIONS.map((question) => ({
          responseId: response.id,
          questionNumber: question.number,
          rating: ratings[question.number],
        })),
      })
    })
  } catch {
    return {
      success: false,
      error: 'Algo salió mal, inténtalo de nuevo.',
    }
  }

  return { success: true }
}
