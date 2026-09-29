'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type StarRatingProps = {
  name: string
  label: string
  value: number
  onChange: (value: number) => void
}

export function StarRating({ name, label, value, onChange }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const displayValue = hoverValue ?? value

  return (
    <div role="radiogroup" aria-label={label} className="flex items-center gap-1.5 sm:gap-2">
      <input type="hidden" name={name} value={value || ''} />
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= displayValue
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star === value}
            aria-label={`${star} de 5`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(null)}
            onFocus={() => setHoverValue(star)}
            onBlur={() => setHoverValue(null)}
            className="rounded-full p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Star
              className={cn(
                'size-8 transition-colors',
                filled ? 'fill-primary text-primary' : 'fill-transparent text-muted-foreground',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
