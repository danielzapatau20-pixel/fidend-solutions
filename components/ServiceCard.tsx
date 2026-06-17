'use client'

import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image?: string
  badge?: string
  variant?: 'cream' | 'navy'
  href?: string
}

export default function ServiceCard({
  title,
  description,
  image,
  badge = 'Flexible scheduling · Matched to your standards',
  variant = 'cream',
  href,
}: ServiceCardProps) {
  const isNavy    = variant === 'navy'
  const bgColor   = isNavy ? 'rgba(244,236,220,0.06)' : '#F4ECDC'
  const textColor = isNavy ? '#F4ECDC' : '#16243A'
  const subColor  = isNavy ? 'rgba(244,236,220,0.60)' : 'rgba(22,36,58,0.55)'
  const border    = isNavy ? '1px solid rgba(184,153,104,0.20)' : '1px solid rgba(22,36,58,0.10)'

  const inner = (
    <div
      style={{
        backgroundColor: bgColor,
        border,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: '100%',
        transition: 'transform 240ms ease-out, box-shadow 240ms ease-out',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-2px)'
        el.style.boxShadow = isNavy
          ? '0 8px 32px rgba(0,0,0,0.3)'
          : '0 8px 32px rgba(22,36,58,0.10)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      {image && (
        <div
          style={{
            aspectRatio: '4 / 3',
            margin: '-32px -32px 0',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}

      {/* Gold rule */}
      <div style={{ height: 1, backgroundColor: '#B89968' }} />

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontVariationSettings: "'SOFT' 30, 'opsz' 36",
          fontWeight: 400,
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: textColor,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 14,
          lineHeight: 1.6,
          color: subColor,
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {/* Compliance badge */}
      {badge && (
        <div>
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B89968',
              border: '1px solid rgba(184,153,104,0.45)',
              padding: '5px 10px',
              display: 'inline-block',
            }}
          >
            {badge}
          </span>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
        {inner}
      </Link>
    )
  }

  return inner
}
