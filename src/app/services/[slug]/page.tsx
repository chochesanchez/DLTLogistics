import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageIntro from '@/components/ui/PageIntro'
import { SERVICES } from '@/content/site'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.name, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, openGraph: { images: [{ url: service.image }] } }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()
  const others = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageIntro title={service.name} lead={service.summary} image={service.image} crumbs={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }]}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/quote" className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark">Get a quote</Link>
          <Link href="/contact" className="inline-flex items-center h-12 px-6 rounded-md border-2 border-dlt-ink font-semibold hover:bg-dlt-ink hover:text-white">Talk to our team</Link>
        </div>
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">What’s included</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {service.features.map((f) => (
            <li key={f.title} className="border-t-[3px] border-dlt-yellow pt-5">
              <h3 className="font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-dlt-muted leading-relaxed">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Other services</h2>
          <ul className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="group block border-t-2 border-dlt-ink pt-4">
                  <span className="block font-display text-2xl font-bold group-hover:underline decoration-dlt-yellow decoration-4 underline-offset-4">{o.name}</span>
                  <span className="block mt-2 text-dlt-muted">{o.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
