import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BusinessContactForm from '@/components/ui/BusinessContactForm'
import TextButton from '@/components/ui/TextButton'
import DeliveryTracker from '@/components/home/DeliveryTracker'
import VideoHero from '@/components/home/VideoHero'
import LogoMarquee from '@/components/home/LogoMarquee'
import ExportMap from '@/components/home/ExportMap'
import OrderFlow from '@/components/home/OrderFlow'
import CountUp from '@/components/motion/CountUp'
import { COMPANY, KPI_VALUES, SERVICES } from '@/content/site'
import { isLang, localePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

// Shared column template so the "What we do" header lines up with the rows below it.
const SERVICE_COLS = 'md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_10rem]'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)
  const href = (p: string) => localePath(lang, p)

  return (
    <>
      {/* Hero: looping road video pinned under the header */}
      <VideoHero
        desktop={{ mp4: '/videos/dlt-road-1080.mp4', webm: '/videos/dlt-road-1080.webm' }}
        mobile={{ mp4: '/videos/dlt-road-720.mp4', webm: '/videos/dlt-road-720.webm' }}
        poster="/videos/dlt-road-poster.jpg"
        label={t.home.videoLabel}
        scrollHint={t.home.scrollHint}
      >
        <p className="text-white/80 font-medium">{t.home.identity}</p>
        <h1 className="mt-3 font-display text-[3.2rem] leading-[0.92] sm:text-7xl lg:text-[6rem] font-extrabold tracking-tight max-w-4xl">{t.home.heroTitle}</h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-white/85">{t.home.heroText}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href('/quote')} className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark transition-colors">
            {t.common.getQuote}
          </Link>
          <Link href={href('/services')} className="inline-flex items-center h-12 px-6 rounded-md border-2 border-white/70 text-white font-semibold backdrop-blur-sm hover:bg-white hover:text-dlt-ink transition-colors">
            {t.common.seeServices}
          </Link>
        </div>
      </VideoHero>

      {/* Content layer: slides up over the pinned video */}
      <div className="relative z-10 -mt-6 rounded-t-[28px] overflow-clip bg-white shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.35)]">
      {/* Live delivery tracker */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 md:pt-24 pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">{t.home.trackerTitle}</h2>
          <p className="mt-5 text-lg text-dlt-muted leading-relaxed max-w-md">{t.home.trackerText}</p>
        </div>
        <div className="lg:col-span-7 lg:pl-6">
          <DeliveryTracker />
        </div>
      </section>

      {/* Road band with KPIs: value on top, label underneath, same for all three */}
      <section className="bg-dlt-ink text-white">
        <div className="h-1.5 lane-dashes" aria-hidden />
        <dl className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {t.kpis.map((k, i) => {
            const v = KPI_VALUES[i]
            return (
              <div key={k.label} className="py-6 sm:py-8 sm:px-8 sm:first:pl-0 flex flex-col">
                <dt className="order-2 mt-1 text-white/75 leading-snug">{k.label}</dt>
                <dd className="order-1 font-display text-4xl md:text-5xl font-bold text-dlt-yellow leading-none">
                  {v.value ? v.count ? <CountUp value={v.value} /> : v.value : t.kpiSameDay}
                </dd>
              </div>
            )
          })}
        </dl>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <div className={`grid gap-4 md:gap-x-8 ${SERVICE_COLS} items-end mb-10`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">{t.home.servicesTitle}</h2>
          <p className="text-lg text-dlt-muted leading-relaxed">{t.home.servicesText}</p>
        </div>
        <ul className="border-t-2 border-dlt-ink">
          {SERVICES.map((s) => {
            const copy = t.services[s.slug]
            return (
              <li key={s.slug} className="border-b border-dlt-line">
                <Link href={href(`/services/${s.slug}`)} className="group block py-6 md:py-7">
                  {/* Phones: thumbnail beside the text */}
                  <span className="md:hidden grid grid-cols-[6.5rem_1fr] gap-4 items-start">
                    <span className="relative block aspect-[4/3] rounded-md overflow-hidden">
                      <Image src={s.image} alt="" fill sizes="104px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-bold leading-tight">{copy.name}</span>
                      <span className="block mt-1.5 text-dlt-muted leading-relaxed">{copy.summary}</span>
                    </span>
                  </span>
                  {/* Desktop: name, summary, photo in shared columns */}
                  <span className={`hidden md:grid gap-x-8 ${SERVICE_COLS} items-center`}>
                    <span className="font-display text-4xl lg:text-5xl font-bold group-hover:underline decoration-dlt-yellow decoration-[6px] underline-offset-[6px]">{copy.name}</span>
                    <span className="text-lg text-dlt-muted leading-relaxed">{copy.summary}</span>
                    <span className="relative block h-24 w-40 rounded-md overflow-hidden">
                      <Image src={s.image} alt="" fill sizes="160px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-dlt-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] max-w-2xl">{t.home.flowTitle}</h2>
          <OrderFlow />
        </div>
      </section>

      {/* Photos + Dasza group: one grid, both columns end on the same line */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-2 lg:h-[600px]">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-7 lg:row-span-2 rounded-lg overflow-hidden">
            <Image src="/images/site/warehouse-yellow.jpg" alt={t.meta.ogAlt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-5 rounded-lg overflow-hidden">
            <Image src="/images/site/truck-road.jpg" alt={t.home.photoAlts[0]} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="lg:col-span-5 rounded-lg bg-dlt-paper p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{t.home.groupTitle}</h2>
            <p className="mt-3 text-dlt-muted leading-relaxed max-w-md">{t.home.groupText}</p>
            <div className="mt-6"><TextButton href={COMPANY.daszaUrl} external>{t.home.groupCta}</TextButton></div>
          </div>
        </div>
      </section>

      {/* Where we deliver */}
      <section className="bg-dlt-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">{t.home.mapTitle}</h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">{t.home.mapText}</p>
          </div>
          <div className="lg:col-span-8">
            <ExportMap />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-wrap items-end justify-between gap-6 mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] max-w-2xl">{t.home.clientsTitle}</h2>
          <TextButton href={href('/about#clients')}>{t.common.seeAllClients}</TextButton>
        </div>
        <LogoMarquee />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">{t.home.contactTitle}</h2>
            <p className="mt-5 text-lg text-dlt-muted leading-relaxed">{t.home.contactText}</p>
            <ul className="mt-8 space-y-3 text-lg">
              <li><a href={COMPANY.phoneHref} className="font-semibold whitespace-nowrap hover:text-dlt-muted">{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-dlt-muted">{COMPANY.email}</a></li>
            </ul>
          </div>
          <div className="lg:col-span-8 rounded-lg bg-white border border-dlt-line p-6 sm:p-8">
            <BusinessContactForm />
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
