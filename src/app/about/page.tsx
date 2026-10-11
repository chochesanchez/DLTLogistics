import type { Metadata } from 'next'
import Image from 'next/image'
import PageIntro from '@/components/ui/PageIntro'
import ClientLogos from '@/components/home/ClientLogos'
import { COMPANY } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'DLT Logistics is the storage, distribution and last-mile arm of the Dasza group, serving brands and manufacturers in Monterrey.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="An extension of your team"
        lead="Brands, retailers and manufacturers in México rely on DLT to handle their products, their orders and the information behind them."
        image="/images/site/docks-aerial.jpg"
        crumbs={[{ href: '/', label: 'Home' }]}
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            We offer storage, fulfillment, retail distribution and last-mile delivery that adapt to your business and your part numbers. Our
            teams handle the day-to-day execution while giving your leadership the visibility needed to make decisions.
          </p>
          <p className="text-dlt-muted">
            We work with your current systems and data structures, so starting with DLT doesn’t mean changing how your company operates.
          </p>
        </div>
        <aside className="lg:col-span-5 rounded-lg bg-dlt-ink text-white p-7 md:p-9">
          <h2 className="font-display text-3xl font-bold">Part of the Dasza group</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Dasza 3PL brings customs brokerage, IMMEX and bonded warehousing for manufacturers. Together we cover the full path from the port to your customer.
          </p>
          <a href={COMPANY.daszaUrl} className="mt-6 inline-flex items-center h-11 px-5 rounded-md bg-dlt-yellow text-dlt-ink font-semibold">Visit Dasza 3PL</a>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src="/images/site/parcels.jpg" alt="Parcels prepared for delivery" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src="/images/site/truck-yard.jpg" alt="Truck leaving a distribution yard" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      <section id="clients" className="scroll-mt-20 mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">Clients</h2>
        <ClientLogos />
      </section>
    </>
  )
}
