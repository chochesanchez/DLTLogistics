'use client'

import React, { useState } from 'react'
import Modal from './Modal'
import { PHONE_COUNTRIES, WHATSAPP_NUMBER } from '@/lib/phoneCountries'

const solutions = [
  'Storage & Distribution',
  'Last Mile',
  'Fulfillment / E‑Commerce',
  'Transportation',
  'Cross-Border',
  'Other',
]

export default function BusinessContactForm() {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [failedMessage, setFailedMessage] = useState<string | null>(null)
  const toggle = (s: string) => setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('website')) return // honeypot
    const country = PHONE_COUNTRIES.find((c) => c.code === fd.get('phoneCountry')) ?? PHONE_COUNTRIES[0]
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const phone = `${country.dial} ${String(fd.get('phone') || '').trim()}`.trim()
    const company = String(fd.get('company') || '').trim()
    const message = String(fd.get('message') || '').trim()

    setSubmitting(true)
    setFailedMessage(null)
    let sent = false
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name,
          email,
          phone,
          phoneCountry: country.label,
          company: company || undefined,
          message: message || undefined,
          solutions: selected,
        }),
      })
      sent = res.ok
    } catch {
      sent = false
    } finally {
      setSubmitting(false)
    }

    if (sent) {
      setOpen(true)
      setSelected([])
      form.reset()
    } else {
      // Keep the form filled and give the visitor a one-click way to still reach us.
      setFailedMessage(
        [
          `Hello DLT Logistics, I'm ${name}${company ? ` from ${company}` : ''}.`,
          selected.length ? `Interested in: ${selected.join(', ')}.` : '',
          message,
          `Email: ${email} · Phone: ${phone}`,
        ].filter(Boolean).join('\n'),
      )
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bc-name" className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
            <input id="bc-name" name="name" required minLength={2} autoComplete="name" className="input-field" />
          </div>
          <div>
            <label htmlFor="bc-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input id="bc-email" type="email" name="email" required autoComplete="email" className="input-field" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bc-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <div className="flex gap-2">
              <select name="phoneCountry" aria-label="Country code" defaultValue="MX" className="border border-gray-300 rounded-lg px-2 bg-white focus:ring-2 focus:ring-[#FFCC00]">
                {PHONE_COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.code === 'OTHER' ? 'Other' : `${c.code} ${c.dial}`}</option>
                ))}
              </select>
              <input id="bc-phone" type="tel" name="phone" required minLength={7} autoComplete="tel-national" placeholder="81 1234 5678" className="input-field flex-1 min-w-0" />
            </div>
          </div>
          <div>
            <label htmlFor="bc-company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input id="bc-company" name="company" autoComplete="organization" className="input-field" />
          </div>
        </div>

        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">What do you need?</legend>
          <div className="flex flex-wrap gap-2">
            {solutions.map((s) => {
              const on = selected.includes(s)
              return (
                <button
                  type="button"
                  key={s}
                  aria-pressed={on}
                  onClick={() => toggle(s)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${on ? 'bg-black border-black text-white' : 'border-gray-300 text-gray-700 hover:border-black'}`}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="bc-message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
          <textarea id="bc-message" name="message" rows={3} className="input-field" placeholder="Tell us briefly about your needs" />
        </div>

        {failedMessage && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className="font-medium">We couldn’t send your message right now.</p>
            <p className="mt-1">Your details are still here. Send them to us directly so we don’t miss you:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(failedMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366] text-black font-medium hover:brightness-95"
              >
                Send via WhatsApp
              </a>
              <a
                href={`mailto:jmsanchez@dasza.com?subject=${encodeURIComponent('DLT contact request')}&body=${encodeURIComponent(failedMessage)}`}
                className="px-4 py-2 rounded-lg border border-red-300 text-red-800 hover:bg-red-100"
              >
                Send by email
              </a>
            </div>
          </div>
        )}

        <button type="submit" className="w-full btn-primary disabled:opacity-60" disabled={submitting}>{submitting ? 'Sending…' : 'Send message'}</button>
      </form>

      <Modal open={open} onClose={() => setOpen(false)} title="Thank you!">
        <p>Your message was sent. We will get back to you within one business day.</p>
      </Modal>
    </>
  )
}
