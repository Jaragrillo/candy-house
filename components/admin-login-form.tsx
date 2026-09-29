'use client'

import { useActionState } from 'react'
import { Loader2, Lock } from 'lucide-react'
import { loginAdmin, type AdminLoginState } from '@/app/survey/resumen/actions'

const initialState: AdminLoginState = { success: false }

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState)

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl border border-border/60 bg-card p-8 text-center shadow-xl shadow-primary/10">
      <Lock className="size-10 text-primary" />
      <h1 className="font-serif text-2xl text-foreground">Resumen de la encuesta</h1>
      <p className="text-sm text-muted-foreground">
        Ingresa la contraseña para ver los resultados.
      </p>

      <form action={formAction} className="flex w-full flex-col gap-3">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoFocus
          className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        />

        {state.error && <p className="text-sm text-destructive">{state.error}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-50"
        >
          {isPending && <Loader2 className="size-4 animate-spin" />}
          Entrar
        </button>
      </form>
    </div>
  )
}
