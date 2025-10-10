'use client'

import React from 'react'

interface ModalProps {
  open: boolean
  title?: string
  children?: React.ReactNode
  onClose: () => void
}

export default function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
        <div>{children}</div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="btn-primary">OK</button>
        </div>
      </div>
    </div>
  )
}


