'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Item {
  name: string
  image: string
}

interface PartnersMarqueeProps {
  items: Item[]
  speed?: number // pixels per ms
}

export default function PartnersMarquee({ items, speed = 0.065 }: PartnersMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [dragging, setDragging] = useState(false)
  const startXRef = useRef(0)
  const startScrollRef = useRef(0)
  const fractionalRef = useRef(0)

  // Auto-scroll loop with infinite wrap
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let rafId = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(16, now - last) // stabilize cadence (~60fps) to avoid micro-jitters
      last = now
      if (!paused) {
        // Accumulate sub‑pixel distance so we can run very slow speeds
        fractionalRef.current += speed * dt
        if (fractionalRef.current >= 0.5) { // smaller step for smoother motion
          const step = Math.max(1, Math.floor(fractionalRef.current))
          el.scrollLeft -= step
          fractionalRef.current -= step
        }
        const half = el.scrollWidth / 2
        if (el.scrollLeft <= 0) {
          // keep a tiny offset to prevent bounce
          el.scrollLeft += half - 1
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [paused, speed])

  // Pointer-drag to pan without showing native scrollbar
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    setPaused(true)
    setDragging(true)
    startXRef.current = e.clientX
    startScrollRef.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el || !dragging) return
    const dx = e.clientX - startXRef.current
    el.scrollLeft = startScrollRef.current - dx
    const half = el.scrollWidth / 2
    if (el.scrollLeft >= half) el.scrollLeft -= half
    else if (el.scrollLeft <= 0) el.scrollLeft += half
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    setDragging(false)
    setPaused(false)
    el.releasePointerCapture(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className="no-scrollbar overflow-hidden touch-pan-y select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div className="flex items-center gap-5 w-max py-1">
        {[...items, ...items].map((partner, index) => (
          <div key={index} className='partner-card'>
            <div className='relative w-40 h-20'>
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                style={{ objectFit: 'contain' }}
                className='partner-logo'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


