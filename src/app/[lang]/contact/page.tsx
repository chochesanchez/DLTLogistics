import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageIntro from '@/components/ui/PageIntro'
import BusinessContactForm from '@/components/ui/BusinessContactForm'
import { COMPANY } from '@/content/site'
import { isLang, localePath, alternatesFor } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang)
  return { title: t.nav.contact, description: t.contactPage.description, alternates: alternatesFor(lang, '/contact') }
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)
  const c = t.contactPage
  return (
    <>
      <PageIntro title={c.title} lead={c.lead} crumbs={[{ href: localePath(lang, '/'), label: t.common.home }]} crumbLabel={t.common.breadcrumb} />
      <section className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 rounded-lg bg-white border border-dlt-line p-6 sm:p-8">
            <BusinessContactForm />
          </div>
          <aside className="lg:col-span-4 rounded-lg bg-dlt-ink text-white p-7 flex flex-col gap-6">
            <div>
              <h2 className="text-white/55 text-sm">{c.phone}</h2>
              <a href={COMPANY.phoneHref} className="font-display text-2xl font-bold whitespace-nowrap hover:text-dlt-yellow">{COMPANY.phone}</a>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">{c.email}</h2>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-dlt-yellow">{COMPANY.email}</a>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">{c.hours}</h2>
              <p className="leading-relaxed">{c.hoursText[0]}<br />{c.hoursText[1]}</p>
            </div>
            <div>
              <h2 className="text-white/55 text-sm">{c.location}</h2>
              <p className="leading-relaxed">{c.address}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-11 px-5 rounded-md bg-[#25D366] text-dlt-ink font-semibold">{t.common.whatsapp}</a>
              <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-11 px-5 rounded-md border border-white/30 hover:border-white">{c.maps}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
