'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroVideoProps {
  /**
   * HIGGSFIELD ASSET 01 — Hero video loop
   * Replace with actual URL after generating:
   *   Tool: generate_video · Model: seedance_2_0 or kling3_0
   *   Prompt: "Slow cinematic tracking shot through the corridor of an upscale
   *   senior living home at golden hour. Cream and navy tones. Soft directional
   *   light through large windows. No people visible. Calm, institutional,
   *   permanent. Grain texture. 4–6 second seamless loop."
   *   Aspect: 16:9 · Duration: 5–6 sec
   */
  src?: string
  /**
   * HIGGSFIELD ASSET 01 — Poster frame (first frame of hero video)
   * Export a static PNG/JPEG from Higgsfield, place in /public/poster-hero.jpg
   */
  poster?: string
  overlayOpacity?: number
  children: React.ReactNode
  minHeight?: string
}

export default function HeroVideo({
  src,
  poster,
  overlayOpacity = 0.60,
  children,
  minHeight = '100svh',
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile to skip preload
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Attempt autoplay
  useEffect(() => {
    if (!videoRef.current || !src || videoError) return
    videoRef.current.play().catch(() => setVideoError(true))
  }, [src, videoError])

  const showVideo = src && !videoError && !isMobile

  return (
    <div
      role="region"
      style={{
        position: 'relative',
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16243A',
        overflow: 'hidden',
      }}
    >
      {/* Video background — HIGGSFIELD ASSET 01 */}
      {showVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          onError={() => setVideoError(true)}
        />
      )}

      {/* Navy overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: `rgba(22, 36, 58, ${overlayOpacity})`,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}
