'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms, useful for staggering items in a grid. */
  delay?: number
  /** Direction the content eases in from. */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  as?: ElementType
}

const hiddenByDirection: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -64px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out will-change-transform motion-reduce:transition-none',
        visible ? 'translate-x-0 translate-y-0 opacity-100' : cn('opacity-0', hiddenByDirection[from]),
        className,
      )}
    >
      {children}
    </Tag>
  )
}
