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

export function Mail({ ...props }: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}

export function Check({ ...props }: IconProps) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" {...props}><path d="m4 10 4 4 8-9" /></svg>
}

export function ServiceIcon({ kind, ...props }: IconProps & { kind: string }) {
  const shared = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  switch (kind) {
    case 'plumbing':
      return <svg {...shared} aria-hidden="true" {...props}><path d="M10 8v10a7 7 0 0 0 7 7h14a7 7 0 0 1 7 7v8M6 8h8M34 40h8" /><circle cx="24" cy="25" r="3" /></svg>
    case 'renovation':
      return <svg {...shared} aria-hidden="true" {...props}><path d="m7 23 17-14 17 14M11 20v20h26V20M20 40V29h8v11" /><path d="m31 10 7 7" /></svg>
    case 'repair':
      return <svg {...shared} aria-hidden="true" {...props}><path d="M29 10a9 9 0 0 0-10.7 11.8L8.8 31.3a4.2 4.2 0 0 0 5.9 5.9l9.5-9.5A9 9 0 0 0 36 17l-5.5 5.5-5-5L31 12" /></svg>
    case 'painting':
      return <svg {...shared} aria-hidden="true" {...props}><rect x="8" y="10" width="25" height="10" rx="2" /><path d="M33 15h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H24v6M24 32v8" /></svg>
    case 'flooring':
      return <svg {...shared} aria-hidden="true" {...props}><path d="m8 17 16-8 16 8-16 8-16-8Z" /><path d="m8 17v14l16 8 16-8V17M24 25v14M16 13l16 8M32 13l-16 8" /></svg>
    case 'roofing':
      return <svg {...shared} aria-hidden="true" {...props}><path d="m5 27 19-17 19 17M10 25v14h28V25M17 39V28h14v11" /><path d="M7 31h34" /></svg>
    case 'gutters':
      return <svg {...shared} aria-hidden="true" {...props}><path d="m6 16 18-8 18 8M9 17h30v7a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5v-7ZM35 29v11" /><path d="M31 40h8" /></svg>
    case 'insulation':
      return <svg {...shared} aria-hidden="true" {...props}><path d="M24 7 39 13v10c0 9-6 15-15 18-9-3-15-9-15-18V13l15-6Z" /><path d="M24 15c-4 5-6 8-6 11a6 6 0 0 0 12 0c0-3-2-6-6-11Z" /></svg>
    default:
      return <svg {...shared} aria-hidden="true" {...props}><circle cx="34" cy="14" r="6" /><path d="M34 4v3M34 21v3M24 14h3M41 14h3M8 39h32M12 39V27h24v12M16 27l5-7 5 7" /></svg>
  }
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
