import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/candyHouseLogo.png"
      alt="Candy House"
      width={200}
      height={200}
      className={cn('h-12 w-12 object-contain md:h-14 md:w-14', className)}
    />
  )
}
