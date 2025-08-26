"use client"

import React from 'react'

interface RevealProps {
  children: React.ReactNode
  delayMs?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export default function Reveal({ children, delayMs = 0, as = 'div', className }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delayMs)
            return () => clearTimeout(timer)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.unobserve(node)
  }, [delayMs])

  const Component: any = as
  return (
    <Component ref={ref} className={`${className ?? ''} reveal ${visible ? 'reveal-visible' : ''}`}>
      {children}
    </Component>
  )
}


