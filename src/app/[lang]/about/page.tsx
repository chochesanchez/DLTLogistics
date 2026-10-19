import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageIntro from '@/components/ui/PageIntro'
import TextButton from '@/components/ui/TextButton'
import ClientLogos from '@/components/home/ClientLogos'
import { COMPANY } from '@/content/site'
import { isLang, localePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang)
  return pageMetadata(lang, '/about', { title: t.nav.about, description: t.about.metaDescription })
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)
  const a = t.about
  return (
    <>
      <PageIntro
        title={a.title}
        lead={a.lead}
        image="/images/site/docks-aerial.jpg"
        imageAlt={a.heroAlt}
        crumbs={[{ href: localePath(lang, '/'), label: t.common.home }]}
        crumbLabel={t.common.breadcrumb}
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>{a.p1}</p>
          <p className="text-dlt-muted">{a.p2}</p>
        </div>
        <aside className="lg:col-span-5 rounded-lg bg-dlt-ink text-white p-7 md:p-9">
          <h2 className="font-display text-3xl font-bold">{a.groupTitle}</h2>
          <p className="mt-3 text-white/75 leading-relaxed">{a.groupText}</p>
          <div className="mt-6"><TextButton href={COMPANY.daszaUrl} tone="dark" external>{a.groupCta}</TextButton></div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 gap-6">
        {['/images/site/parcels.jpg', '/images/site/truck-yard.jpg'].map((src, i) => (
          <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={src} alt={a.photoAlts[i]} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section id="clients" className="scroll-mt-20 mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">{t.clients.title}</h2>
        <ClientLogos />
      </section>
    </>
  )
}
