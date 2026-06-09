'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function CountUp({ to, suffix = '', prefix = '', duration = 1800 }: CountUpProps) {
  const [v, setV] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(to)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          const t0 = performance.now()
          const tick = (now: number) => {
            const prog = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - prog, 4)
            setV(Math.round(eased * to))
            if (prog < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {prefix}{v}{suffix}
    </span>
  )
}
