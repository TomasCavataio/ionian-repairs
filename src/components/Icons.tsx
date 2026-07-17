import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function Arrow({ ...props }: IconProps) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" {...props}><path d="M3 10h13M11 5l5 5-5 5" /></svg>
}

export function Phone({ ...props }: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M7.2 3.5 10 8.1 8.1 10a15.6 15.6 0 0 0 5.9 5.9l1.9-1.9 4.6 2.8-1 3.1c-.3.9-1.2 1.5-2.1 1.4C9.7 20.5 3.5 14.3 2.7 6.6c-.1-.9.5-1.8 1.4-2.1l3.1-1Z" /></svg>
}

export function Message({ ...props }: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M12 3a8.5 8.5 0 0 0-7.3 12.8L3.5 21l5.3-1.1A8.5 8.5 0 1 0 12 3Z" /><path d="M8.1 8.2c.6 3.5 2.3 5.3 5.8 5.8" /></svg>
}

export function Check({ ...props }: IconProps) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" {...props}><path d="m4 10 4 4 8-9" /></svg>
}

export function GreekFlag({ label }: { label: string }) {
  return (
    <svg className="flag" viewBox="0 0 27 18" role="img" aria-label={label}>
      <rect width="27" height="18" fill="#0d5eaf" />
      <path stroke="#fff" strokeWidth="2" d="M0 3h27M0 7h27M0 11h27M0 15h27" />
      <path fill="#0d5eaf" d="M0 0h11v11H0z" />
      <path stroke="#fff" strokeWidth="2.2" d="M5.5 0v11M0 5.5h11" />
    </svg>
  )
}

export function UkFlag({ label }: { label: string }) {
  return (
    <svg className="flag" viewBox="0 0 30 18" role="img" aria-label={label}>
      <rect width="30" height="18" fill="#15336b" />
      <path stroke="#fff" strokeWidth="4.2" d="m0 0 30 18M30 0 0 18" />
      <path stroke="#c8102e" strokeWidth="1.8" d="m0 0 30 18M30 0 0 18" />
      <path stroke="#fff" strokeWidth="6" d="M15 0v18M0 9h30" />
      <path stroke="#c8102e" strokeWidth="3.2" d="M15 0v18M0 9h30" />
    </svg>
  )
}

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M5 34V15L22 6l17 9v19" />
      <path d="M15 34V20h14v14" />
      <path d="M5 34h34" />
    </svg>
  )
}
