import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Candy House — Tu cómplice para cada ocasión',
  description:
    'Candy House es un estudio boutique de regalos que crea obsequios dulces, pensados y bellamente envueltos. Explora envoltura de regalos, desayunos sorpresa, cajas de dulces, anchetas, globos, peluches y flores.',
}

export const viewport: Viewport = {
  themeColor: '#f7c5d6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
