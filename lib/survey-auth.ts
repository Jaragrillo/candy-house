import { createHmac, timingSafeEqual } from 'node:crypto'

export const SURVEY_ADMIN_COOKIE = 'survey_admin_session'

function sessionToken(password: string) {
  return createHmac('sha256', password).update('candy-house-survey-admin').digest('hex')
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB)
}

export function isAdminPasswordConfigured() {
  return Boolean(process.env.SURVEY_ADMIN_PASSWORD)
}

export function verifyAdminPassword(input: string): boolean {
  const expected = process.env.SURVEY_ADMIN_PASSWORD
  if (!expected) return false
  return safeEqual(input, expected)
}

export function createAdminSessionToken(): string | null {
  const password = process.env.SURVEY_ADMIN_PASSWORD
  return password ? sessionToken(password) : null
}

export function isValidAdminSessionToken(token: string | undefined): boolean {
  const expected = createAdminSessionToken()
  if (!expected || !token) return false
  return safeEqual(token, expected)
}
