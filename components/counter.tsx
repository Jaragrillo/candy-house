'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION = 1400

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  return { prefix, suffix, target: Number(digits.replace(/,/g, '')), hasCommas: digits.includes(',') }
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const initial = parseValue(value)
  const [display, setDisplay] = useState(initial ? `${initial.prefix}0${initial.suffix}` : value)

  useEffect(() => {
    const el = ref.current
    const parsed = parseValue(value)
    if (!el || !parsed) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
        observer.unobserve(el)

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1)
          const eased = 1 - (1 - progress) ** 3
          const current = Math.round(parsed.target * eased)
          const formatted = parsed.hasCommas ? current.toLocaleString('en-US') : String(current)
          setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{display}</span>
}
