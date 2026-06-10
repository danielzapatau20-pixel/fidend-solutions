'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.classList.add('custom-cursor')

    let rx = 0, ry = 0, ax = 0, ay = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      ax = e.clientX
      ay = e.clientY
      dot.style.left  = `${ax}px`
      dot.style.top   = `${ay}px`
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      rx = lerp(rx, ax, 0.12)
      ry = lerp(ry, ay, 0.12)
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      raf = requestAnimationFrame(tick)
    }

    const onEnterLink = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(2.5)'
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
      ring.style.opacity   = '0.4'
    }
    const onLeaveLink = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)'
      ring.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.opacity   = '1'
    }

    const bindLinks = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    bindLinks()

    dot.style.opacity  = '1'
    ring.style.opacity = '1'

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    top: 0,
    left: 0,
    opacity: 0,
    transform: 'translate(-50%,-50%)',
    willChange: 'left, top',
  }

  return (
    <>
      {/* Dot — crisp, snappy */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 6,
          height: 6,
          backgroundColor: '#B89968',
          transition: 'opacity 300ms, transform 180ms ease-out',
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 28,
          height: 28,
          border: '1px solid rgba(184,153,104,0.55)',
          transition: 'opacity 300ms, transform 220ms ease-out',
        }}
      />
    </>
  )
}
