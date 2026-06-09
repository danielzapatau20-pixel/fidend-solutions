'use client'
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  className?: string
  style?: CSSProperties
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0,0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const initialTransform =
    direction === 'up'    ? 'translateY(36px)'
    : direction === 'down'  ? 'translateY(-24px)'
    : direction === 'left'  ? 'translateX(-32px)'
    : direction === 'right' ? 'translateX(32px)'
    : direction === 'scale' ? 'scale(0.94)'
    : 'none'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity 680ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 680ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
