import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageIntro from '@/components/ui/PageIntro'
import { SERVICES } from '@/content/site'
import { isLang, localePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang)
  return pageMetadata(lang, '/services', { title: t.servicesPage.title, description: t.servicesPage.description })
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)
  return (
    <>
      <PageIntro title={t.servicesPage.title} lead={t.servicesPage.lead} crumbs={[{ href: localePath(lang, '/'), label: t.common.home }]} crumbLabel={t.common.breadcrumb} />
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-x-8 gap-y-14">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={localePath(lang, `/services/${s.slug}`)} className="group block">
            <span className="relative block aspect-[16/10] rounded-lg overflow-hidden">
              <Image src={s.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </span>
            <span className="block mt-5 font-display text-4xl font-bold">{t.services[s.slug].name}</span>
            <span className="block mt-2 text-lg text-dlt-muted leading-relaxed max-w-lg">{t.services[s.slug].summary}</span>
          </Link>
        ))}
      </section>
    </>
  )
}
