'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement
      const max = d.scrollHeight - d.clientHeight
      setP(max > 0 ? d.scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        backgroundColor: 'rgba(184,153,104,0.15)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#B89968',
          transformOrigin: 'left',
          transform: `scaleX(${p})`,
          transition: 'transform 80ms linear',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
