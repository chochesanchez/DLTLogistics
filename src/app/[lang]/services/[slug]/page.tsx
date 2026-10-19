import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageIntro from '@/components/ui/PageIntro'
import { SERVICES } from '@/content/site'
import { LOCALES, isLang, localePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => SERVICES.map((s) => ({ lang, slug: s.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!isLang(lang) || !service) return {}
  const copy = getDictionary(lang).services[service.slug]
  return pageMetadata(lang, `/services/${service.slug}`, { title: copy.name, description: copy.summary, image: service.image })
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!isLang(lang) || !service) notFound()
  const t = getDictionary(lang)
  const copy = t.services[service.slug]
  const href = (p: string) => localePath(lang, p)
  const others = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageIntro
        title={copy.name}
        lead={copy.summary}
        image={service.image}
        crumbs={[{ href: href('/'), label: t.common.home }, { href: href('/services'), label: t.common.services }]}
        crumbLabel={t.common.breadcrumb}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href('/quote')} className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark">{t.common.getQuote}</Link>
          <Link href={href('/contact')} className="inline-flex items-center h-12 px-6 rounded-md border-2 border-dlt-ink font-semibold hover:bg-dlt-ink hover:text-white">{t.common.talk}</Link>
        </div>
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">{t.servicePage.included}</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {copy.features.map((f) => (
            <li key={f.title} className="border-t-[3px] border-dlt-yellow pt-5">
              <h3 className="font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-dlt-muted leading-relaxed">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">{t.servicePage.others}</h2>
          <ul className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={href(`/services/${o.slug}`)} className="group block h-full border-t-2 border-dlt-ink pt-4">
                  <span className="block font-display text-2xl font-bold group-hover:text-dlt-muted">{t.services[o.slug].name}</span>
                  <span className="block mt-2 text-dlt-muted">{t.services[o.slug].summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
