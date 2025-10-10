'use client'

import React, { useState } from 'react'
import Modal from './Modal'

const solutions = [
  'Storage & Distribution',
  'Transportation Management',
  'Cross-Border',
  'Manufacturing Support',
  'E‑Commerce Solution',
  'Rail Switching',
  'Control Tower',
  'Other',
]

export default function BusinessContactForm() {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    fd.set('formType', 'contact')
    const selected = selectedSolutions
    fd.set('message', `Title: ${fd.get('title') || ''}\nSolutions: ${selected.join(', ')}\n${fd.get('message') || ''}`)
    if (!fd.get('website')) {
      setSubmitting(true)
      try {
        // When multiple selection is enabled, collect all selected options explicitly
        const payload: Record<string, unknown> = Object.fromEntries(fd.entries())
        payload.solutions = selected
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        setOpen(true)
      } finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="hidden" name="formType" value="contact" />
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input name="name" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input name="lastName" className="input-field" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input name="phone" className="input-field" placeholder="+52 811 916 1086" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Postal code</label>
            <input name="postalCode" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input name="company" className="input-field" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input name="title" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Which solution(s) are you interested in?</label>
            <div className="relative">
              <button
                type="button"
                className="input-field text-left"
                onClick={() => setShowSolutions(!showSolutions)}
              >
                {selectedSolutions.length ? selectedSolutions.join(', ') : 'Select solutions'}
              </button>
              {showSolutions && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto">
                  {solutions.map((s) => {
                    const checked = selectedSolutions.includes(s)
                    return (
                      <label key={s} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={checked}
                          onChange={(e) => {
                            setSelectedSolutions((prev) => e.target.checked ? [...prev, s] : prev.filter(x => x !== s))
                          }}
                        />
                        <span className="text-sm text-gray-700">{s}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
          <textarea name="message" rows={4} className="input-field" placeholder="Tell us about your needs" />
        </div>

        <button type="submit" className="w-full btn-primary" disabled={submitting}>{submitting ? 'Sending…' : 'Send'}</button>
      </form>

      <Modal open={open} onClose={() => setOpen(false)} title="Thank you!">
        <p>Your request was received. We will get back to you shortly.</p>
      </Modal>
    </>
  )
}


