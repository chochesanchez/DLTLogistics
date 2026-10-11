import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'

// Lazily configure Resend so builds (e.g. CI) don't fail when the API key is missing
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const baseSchema = z.object({
  formType: z.enum(['contact', 'quote']),
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(),
  // Contact form fields
  lastName: z.string().optional(),
  postalCode: z.string().optional(),
  title: z.string().optional(),
})

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)
}

const quoteSchema = baseSchema.extend({
  product: z.string().optional(),
  quantity: z.union([z.string(), z.number()]).optional(),
  volume: z.string().optional(),
  weight: z.string().optional(),
  photoUrl: z.string().url().optional(),
  hsCode: z.string().optional(),
  origin: z.string().optional(),
  port: z.string().optional(),
  frequency: z.string().optional(),
  destinations: z.string().optional(),
  timing: z.string().optional(),
  // Additional fields used by the current quote form
  address: z.string().optional(),
  storage: z.string().optional(),
  transportConditions: z
    .union([z.array(z.string()), z.string()])
    .optional(),
  additionalServices: z
    .union([z.array(z.string()), z.string()])
    .optional(),
  solutions: z.union([z.array(z.string()), z.string()]).optional(),
})

async function readBodyAsObject(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return await request.json()
  }
  // Support standard HTML form posts
  const form = await request.formData()
  const obj: Record<string, unknown> = {}
  for (const [key, value] of form.entries()) obj[key] = value
  // Normalize common alternate field names we use on the quote page
  if (obj['business'] && !obj['company']) obj['company'] = obj['business']
  if (obj['productType'] && !obj['product']) obj['product'] = obj['productType']
  if (obj['deliveryTiming'] && !obj['timing']) obj['timing'] = obj['deliveryTiming']
  return obj
}

export async function POST(request: Request) {
  try {
    const payload = await readBodyAsObject(request)
    if (!payload.formType) payload.formType = 'contact'
    const result = quoteSchema.safeParse(payload)
    if (!result.success) {
      console.error('Form validation failed:', result.error.flatten())
      return NextResponse.json({ ok: false, error: 'Invalid form data' }, { status: 400 })
    }
    const parsed = result.data

    // Honeypot: silently accept to avoid giving bots signal
    if (parsed.website) return NextResponse.json({ ok: true })

    const subject =
      parsed.formType === 'quote'
        ? `New QUOTE request — ${parsed.company ?? parsed.name}`
        : `New CONTACT message — ${parsed.name}`

    const rows = Object.entries(parsed)
      .filter(([key, value]) => Boolean(value) && !['website'].includes(key))
      .map(
        ([key, value]) =>
          `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee"><b>${escapeHtml(key)}</b></td><td style="padding:6px 10px;border-bottom:1px solid #eee">${escapeHtml(
            String(value),
          ).replace(/\n/g, '<br/>')}</td></tr>`,
      )
      .join('')

    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2 style="margin:0 0 10px">${escapeHtml(subject)}</h2>
        <table cellspacing="0" cellpadding="0" style="border-collapse:collapse">${rows}</table>
        <p style="color:#666;font-size:12px">Source: ${escapeHtml(request.headers.get('referer') ?? 'unknown')}</p>
      </div>
    `

    // Plain-text version (improves deliverability for providers like Outlook/Hotmail)
    const text = Object.entries(parsed)
      .filter(([key, value]) => Boolean(value) && !['website'].includes(key))
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join('\n')

    // Allow comma-separated multiple recipients in EMAIL_TO
    const recipients = (process.env.EMAIL_TO || '')
      .split(',')
      .map(r => r.trim())
      .filter(Boolean)

    if (!resend) {
      console.error('RESEND_API_KEY is not configured; form submission not delivered.')
      return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 })
    }
    {
      const { error: sendError } = await resend.emails.send({
        from: process.env.EMAIL_FROM as string,
        to: (recipients.length ? recipients : (process.env.EMAIL_TO as string)) as any,
        subject,
        html,
        text,
        reply_to: parsed.email,
      })
      if (sendError) {
        console.error('Resend error:', sendError)
        return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 })
      }
    }

    // Persist to Supabase if envs are present
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE) {
      const sb = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE,
      )
      const { error: dbError } = await sb.from('web_form_submissions').insert({
        form_type: parsed.formType,
        payload: parsed,
      })
      // Email already went out; a storage failure should not fail the submission.
      if (dbError) console.error('Supabase insert failed:', dbError)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Form submission failed:', error)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}