'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  SURVEY_ADMIN_COOKIE,
  createAdminSessionToken,
  isAdminPasswordConfigured,
  verifyAdminPassword,
} from '@/lib/survey-auth'

export type AdminLoginState = {
  success: boolean
  error?: string
}

export async function loginAdmin(
  _prevState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  if (!isAdminPasswordConfigured()) {
    return { success: false, error: 'La página de resumen no está configurada todavía.' }
  }

  const password = formData.get('password')?.toString() ?? ''

  if (!verifyAdminPassword(password)) {
    return { success: false, error: 'Contraseña incorrecta.' }
  }

  const token = createAdminSessionToken()!
  const store = await cookies()
  store.set(SURVEY_ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/survey/resumen',
    maxAge: 60 * 60 * 8,
  })

  redirect('/survey/resumen')
}

export async function logoutAdmin() {
  const store = await cookies()
  store.delete(SURVEY_ADMIN_COOKIE)
  redirect('/survey/resumen')
}
