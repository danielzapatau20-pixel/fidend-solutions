'use client'

const ITEMS = [
  'Faithful attention',
  'Care of distinguished places',
  'Listening first',
  'Open methodology',
  'Dignity at work',
  'Pennsylvania',
]

export default function Marquee({ speed = 42 }: { speed?: number }) {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div aria-hidden="true" style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'inline-flex',
          animation: `marquee ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 20,
              padding: '0 36px',
              whiteSpace: 'nowrap',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.38em',
              textTransform: 'uppercase' as const,
              color: '#B89968',
            }}
          >
            {item}
            <span
              style={{
                color: 'rgba(184,153,104,0.30)',
                fontSize: 6,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
