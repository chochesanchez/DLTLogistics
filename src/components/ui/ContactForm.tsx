'use client'

import React, { useState } from 'react'
import Modal from './Modal'

type FormType = 'contact' | 'quote'

interface ContactFormProps {
  formType?: FormType
}

export default function ContactForm({ formType = 'contact' }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [open, setOpen] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    fd.set('formType', formType)
    // honeypot empty
    if (!fd.get('website')) {
      setSubmitting(true)
      try {
        const payload = Object.fromEntries(fd.entries())
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (res.ok) setOpen(true)
      } finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <input type="hidden" name="formType" value={formType} />
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input id="name" name="name" required className="input-field" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input id="company" name="company" className="input-field" placeholder="Your company name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="email" name="email" type="email" required className="input-field" placeholder="you@company.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input id="phone" name="phone" className="input-field" placeholder="+52 811 916 1086" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" rows={4} required className="input-field" placeholder="How can we help you?" />
        </div>

        <button type="submit" className="w-full btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      <Modal open={open} onClose={() => setOpen(false)} title="Thank you!">
        <p>Your submission was received. We will get back to you shortly.</p>
      </Modal>
    </>
  )
}


