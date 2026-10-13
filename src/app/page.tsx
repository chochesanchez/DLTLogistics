import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import BusinessContactForm from '@/components/ui/BusinessContactForm'
import DeliveryTracker from '@/components/home/DeliveryTracker'
import LogoMarquee from '@/components/home/LogoMarquee'
import ExportMap from '@/components/home/ExportMap'
import OrderFlow from '@/components/home/OrderFlow'
import CountUp from '@/components/motion/CountUp'
import { COMPANY, KPIS, SERVICES } from '@/content/site'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-6 md:pt-16 pb-12 md:pb-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:pl-6">
            <DeliveryTracker />
          </div>
          <div className="lg:col-span-6 lg:row-start-1">
            <p className="text-dlt-muted font-medium">DLT Logistics, part of the Dasza group in Monterrey, México</p>
            <h1 className="mt-3 font-display text-[3.1rem] leading-[0.92] sm:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight">
              From our shelves to your customer’s door.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-dlt-muted">
              We store, pick, pack and deliver for brands and manufacturers across the Monterrey metro area — same-day or next-day, with proof on every delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark transition-colors">
                Get a quote
              </Link>
              <Link href="/services" className="inline-flex items-center h-12 px-6 rounded-md border-2 border-dlt-ink font-semibold hover:bg-dlt-ink hover:text-white transition-colors">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Road band with KPIs */}
      <section className="bg-dlt-ink text-white">
        <div className="h-1.5 lane-dashes" aria-hidden />
        <dl className="mx-auto max-w-7xl px-5 sm:px-8 py-8 grid sm:grid-cols-3 gap-6">
          {KPIS.map((k) => (
            <div key={k.label} className="flex items-baseline gap-3">
              <dt className="sr-only">{k.label}</dt>
              <dd className="font-display text-4xl md:text-5xl font-bold text-dlt-yellow tabular-nums whitespace-nowrap">{k.count ? <CountUp value={k.value} /> : k.value}</dd>
              <dd className="text-white/75 leading-tight">{k.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] max-w-xl">What we do</h2>
          <p className="text-lg text-dlt-muted max-w-md">Use one service or all four. Your inventory, orders and deliveries stay in one place.</p>
        </div>
        <ul className="border-t-2 border-dlt-ink">
          {SERVICES.map((s) => (
            <li key={s.slug} className="border-b border-dlt-line">
              <Link href={`/services/${s.slug}`} className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] gap-x-8 gap-y-2 items-center py-7">
                <span className="font-display text-3xl md:text-5xl font-bold group-hover:underline decoration-dlt-yellow decoration-[6px] underline-offset-[6px]">{s.name}</span>
                <span className="hidden md:block text-lg text-dlt-muted leading-relaxed">{s.summary}</span>
                <span className="relative hidden sm:block h-20 w-32 md:h-24 md:w-40 rounded-md overflow-hidden row-span-2 md:row-span-1">
                  <Image src={s.image} alt="" fill sizes="160px" className="object-cover" />
                </span>
                <span className="md:hidden text-dlt-muted leading-relaxed">{s.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-dlt-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] max-w-2xl">How an order moves with DLT</h2>
          <OrderFlow />
        </div>
      </section>

      {/* Photos + Dasza group */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-lg overflow-hidden">
          <Image src="/images/site/truck-road.jpg" alt="Delivery truck on a highway" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
        <div className="lg:col-span-5 grid gap-6">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image src="/images/site/warehouse-yellow.jpg" alt="Warehouse floor with racked inventory" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="rounded-lg bg-dlt-paper p-6 md:p-8">
            <h2 className="font-display text-3xl font-bold leading-tight">Importing? We’re part of the Dasza group.</h2>
            <p className="mt-3 text-dlt-muted leading-relaxed">
              Dasza 3PL handles customs, IMMEX and bonded warehousing — DLT takes it the last mile. One team from the port to your customer.
            </p>
            <a href={COMPANY.daszaUrl} className="mt-5 inline-flex items-center gap-2 font-semibold underline decoration-dlt-yellow decoration-[3px] underline-offset-4">
              Visit Dasza 3PL <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Where we deliver */}
      <section className="bg-dlt-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">Out of Apodaca, across México</h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Our own fleet covers the Monterrey metro area every day. For the rest of the country, we coordinate courier and freight partners from the same warehouse.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ExportMap />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-wrap items-end justify-between gap-6 mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] max-w-2xl">Trusted by industry leaders</h2>
          <Link href="/about#clients" className="font-semibold underline decoration-dlt-yellow decoration-[3px] underline-offset-4">See all clients</Link>
        </div>
        <LogoMarquee />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dlt-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">Let’s talk deliveries</h2>
            <p className="mt-5 text-lg text-dlt-muted leading-relaxed">We reply within one business day.</p>
            <ul className="mt-8 space-y-3 text-lg">
              <li><a href={COMPANY.phoneHref} className="font-semibold whitespace-nowrap hover:underline">{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:underline">{COMPANY.email}</a></li>
            </ul>
          </div>
          <div className="lg:col-span-8 rounded-lg bg-white border border-dlt-line p-6 sm:p-8">
            <BusinessContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
