'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/i18n/I18nProvider'

const CONDITIONS = ['fragile', 'hazardous', 'none', 'other'] as const
const EXTRAS = ['tracking', 'packaging', 'insurance', 'other'] as const
const FREQUENCIES = ['one-time', 'weekly', 'monthly', 'other'] as const
const TIMINGS = ['same-day', '24h', '48h', '3-5d', '1w', 'flexible'] as const

function Section({ title }: { title: string }) {
  return <h2 className="font-display text-2xl font-bold pb-2 border-b border-dlt-line">{title}</h2>
}
function Field({ id, label, required, type = 'text', placeholder }: { id: string; label: string; required?: boolean; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
        {required && ' *'}
      </label>
      <input id={id} name={id} type={type} required={required} placeholder={placeholder} className="mt-1.5 input-field" />
    </div>
  )
}

export default function QuotePage() {
  const { t, href } = useI18n()
  const q = t.quote
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const startedAt = useRef(0)
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      formType: 'quote',
      name: fd.get('name'),
      company: fd.get('business'),
      email: fd.get('email'),
      phone: fd.get('phone') || undefined,
      address: fd.get('address'),
      message: fd.get('comments') || undefined,
      product: fd.get('productType'),
      quantity: fd.get('quantity'),
      frequency: fd.get('frequency'),
      destinations: fd.get('destinations'),
      timing: fd.get('deliveryTiming'),
      storage: fd.get('storage'),
      transportConditions: fd.getAll('transportConditions'),
      additionalServices: fd.getAll('additionalServices'),
      website: String(fd.get('website') || ''),
      startedAt: startedAt.current,
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) {
        alert(q.error)
        return
      }
    } catch {
      alert(q.error)
      return
    } finally {
      setSending(false)
    }
    router.push(href('/quote/thank-you'))
  }

  return (
    <div className="bg-dlt-paper py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-lg border border-dlt-line p-6 sm:p-10">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[0.95] mb-4">{q.title}</h1>
          <p className="text-dlt-muted text-lg mb-10 max-w-2xl">{q.lead}</p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Honeypot — hidden from people, filled by bots */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
            <div className="space-y-5">
              <Section title={q.sections.basic} />
              <Field id="name" label={q.name} required />
              <Field id="business" label={q.business} required />
              <Field id="email" label={q.email} type="email" required />
              <Field id="address" label={q.address} required />
              <Field id="phone" label={q.phone} type="tel" />
            </div>

            <div className="space-y-5">
              <Section title={q.sections.product} />
              <Field id="productType" label={q.productType} placeholder={q.productTypePh} required />
              <Field id="quantity" label={q.quantity} placeholder={q.quantityPh} required />
            </div>

            <div className="space-y-5">
              <Section title={q.sections.service} />
              <div>
                <label htmlFor="frequency" className="block text-sm font-semibold">{q.frequency} *</label>
                <select id="frequency" name="frequency" required defaultValue="one-time" className="mt-1.5 input-field">
                  {FREQUENCIES.map((f) => <option key={f} value={f}>{q.frequencies[f]}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="destinations" className="block text-sm font-semibold">{q.destinations} *</label>
                <textarea id="destinations" name="destinations" required rows={2} placeholder={q.destinationsPh} className="mt-1.5 input-field h-auto py-3" />
              </div>
              <div>
                <label htmlFor="storage" className="block text-sm font-semibold">{q.storage} *</label>
                <select id="storage" name="storage" required defaultValue="no" className="mt-1.5 input-field">
                  <option value="yes">{q.yes}</option>
                  <option value="no">{q.no}</option>
                </select>
              </div>
              <fieldset>
                <legend className="block text-sm font-semibold mb-2">{q.conditions}</legend>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {CONDITIONS.map((c) => (
                    <label key={c} className="flex items-center gap-2.5 text-sm">
                      <input type="checkbox" name="transportConditions" value={c} className="h-4 w-4 accent-dlt-ink" />
                      {q.conditionOptions[c]}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="deliveryTiming" className="block text-sm font-semibold">{q.timing} *</label>
                <select id="deliveryTiming" name="deliveryTiming" required defaultValue="flexible" className="mt-1.5 input-field">
                  {TIMINGS.map((tm) => <option key={tm} value={tm}>{q.timings[tm]}</option>)}
                </select>
              </div>
              <fieldset>
                <legend className="block text-sm font-semibold mb-2">{q.extras}</legend>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {EXTRAS.map((x) => (
                    <label key={x} className="flex items-center gap-2.5 text-sm">
                      <input type="checkbox" name="additionalServices" value={x} className="h-4 w-4 accent-dlt-ink" />
                      {q.extraOptions[x]}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="comments" className="block text-sm font-semibold">{q.comments}</label>
                <textarea id="comments" name="comments" rows={3} placeholder={q.commentsPh} className="mt-1.5 input-field h-auto py-3" />
              </div>
            </div>

            <button type="submit" disabled={sending} className="w-full btn-primary disabled:opacity-60">{sending ? q.sending : q.send}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
