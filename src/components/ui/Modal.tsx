'use client'

import React, { useEffect, useRef } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface ModalProps {
  open: boolean
  title?: string
  children?: React.ReactNode
  onClose: () => void
  closeLabel?: string
}

export default function Modal({ open, title, children, onClose, closeLabel = 'Close' }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  // Callers pass inline handlers; keep the latest one without re-running the effect on every render.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return
    // Return focus to whatever opened the dialog (e.g. the submit button) when it closes.
    const opener = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onCloseRef.current()
      if (e.key !== 'Tab' || !dialogRef.current) return
      // Keep Tab / Shift+Tab inside the dialog.
      const items = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')
      const first = items[0]
      const last = items[items.length - 1]
      if (!first) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      opener?.focus?.()
    }
  }, [open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div className="absolute inset-0 bg-dlt-ink/60" onClick={onClose} />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="dlt-modal-title" className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-7">
        <CheckCircleIcon className="h-9 w-9 text-dlt-ink" aria-hidden />
        {title && <h2 id="dlt-modal-title" className="mt-4 font-display text-3xl font-bold">{title}</h2>}
        <div className="mt-2 text-dlt-muted leading-relaxed">{children}</div>
        <button ref={closeRef} onClick={onClose} className="mt-6 btn-primary">{closeLabel}</button>
      </div>
    </div>
  )
}
