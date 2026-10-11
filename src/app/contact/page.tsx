import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import BusinessContactForm from '@/components/ui/BusinessContactForm'
import { COMPANY } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to DLT Logistics about storage, fulfillment and last-mile delivery in Monterrey. We reply within one business day.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Let’s talk deliveries" lead="Tell us what you need and we’ll reply within one business day." crumbs={[{ href: '/', label: 'Home' }]} />
      <section className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 rounded-lg bg-white border border-dlt-line p-6 sm:p-8">
            <BusinessContactForm />
          </div>
          <aside className="lg:col-span-4 rounded-lg bg-dlt-ink text-white p-7 space-y-6">
            <div>
              <h2 className="text-white/55 text-sm">Phone</h2>
              <a href={COMPANY.phoneHref} className="font-display text-2xl font-bold whitespace-nowrap hover:text-dlt-yellow">{COMPANY.phone}</a>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">Email</h2>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-dlt-yellow">{COMPANY.email}</a>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">Hours</h2>
              <p className="leading-relaxed">Monday to Friday, 8:00 to 18:00<br />Saturday, 9:00 to 14:00</p>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">Location</h2>
              <p className="leading-relaxed">760A Av. Miguel Alemán, El Milagro, 66634 Apodaca, N.L.</p>
              <a href="https://maps.google.com/?q=QR53%2BXP+Apodaca,+Nuevo+Le%C3%B3n" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center h-10 px-4 rounded-md border border-white/30 hover:border-white">Open in Maps</a>
            </div>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-11 px-5 rounded-md bg-[#25D366] text-dlt-ink font-semibold">WhatsApp us</a>
          </aside>
        </div>
      </section>
    </>
  )
}
