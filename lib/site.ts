// Central place for brand + contact configuration.
export const WHATSAPP_NUMBER = '573004513547'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/candy_house0419?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    handle: '@candy_house0419',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@candy_house0419?_r=1&_t=ZS-97vxKRg5H0v',
    handle: '@candy_house0419',
  },
  // { name: 'Pinterest', href: 'https://pinterest.com', handle: 'Candy House' },
  // { name: 'Facebook', href: 'https://facebook.com', handle: 'Candy House' },
]

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogue' },
  { label: 'Nosotros', href: '/about' },
]
