const items = [
  'Envoltura de regalos',
  'Desayunos sorpresa',
  'Cajas de dulces',
  'Anchetas a tu gusto',
  'Globos personalizados',
  'Peluches',
  'Flores y otros',
]

export function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="flex overflow-hidden border-y border-border/60 bg-primary py-4 text-primary-foreground">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-lg font-medium md:text-xl">
            {item}
            <span aria-hidden="true" className="text-primary-foreground/60">
              ✦
            </span>
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8"
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-lg font-medium md:text-xl">
            {item}
            <span className="text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
