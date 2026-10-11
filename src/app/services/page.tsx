import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageIntro from '@/components/ui/PageIntro'
import { SERVICES } from '@/content/site'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Storage, fulfillment, retail distribution and last-mile delivery in the Monterrey metro area.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Services" lead="Storage, fulfillment, retail distribution and last-mile delivery — on their own or as one flow." crumbs={[{ href: '/', label: 'Home' }]} />
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-x-8 gap-y-14">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
            <span className="relative block aspect-[16/10] rounded-lg overflow-hidden">
              <Image src={s.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </span>
            <span className="block mt-5 font-display text-4xl font-bold group-hover:underline decoration-dlt-yellow decoration-[5px] underline-offset-[6px]">{s.name}</span>
            <span className="block mt-2 text-lg text-dlt-muted leading-relaxed max-w-lg">{s.summary}</span>
          </Link>
        ))}
      </section>
    </>
  )
}
