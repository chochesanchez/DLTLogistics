'use client'
import { TruckIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/i18n/I18nProvider'

// Illustrative order: plays once when it scrolls into view (CSS animation), then rests on "Delivered".
const STOPS = [
  { time: '09:12', at: 0 },
  { time: '11:40', at: 1 / 3 },
  { time: '13:55', at: 2 / 3 },
  { time: '14:37', at: 1 },
]
const START = 0.6
const DURATION = 4.2

export default function DeliveryTracker() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <div
      ref={ref}
      className={`${inView ? 'tracker-run ' : ''}rounded-lg bg-white text-dlt-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] border border-dlt-line overflow-hidden`}
      role="img"
      aria-label={t.tracker.aria}
    >
      <div className="flex items-center justify-between px-4 sm:px-5 py-2 sm:py-3 bg-dlt-ink text-white">
        <span className="font-display text-base sm:text-lg font-bold tracking-wide">{t.tracker.order}</span>
        <span className="text-xs sm:text-sm text-white/70">{t.tracker.route}</span>
      </div>

      <div className="px-4 sm:px-7 pt-7 sm:pt-10 pb-4 sm:pb-6">
        <div className="relative h-2 mx-3 rounded-full bg-dlt-line">
          <div className="tracker-fill absolute inset-0 rounded-full bg-dlt-yellow" />
          <div className="tracker-truck absolute -top-[22px] -translate-x-1/2">
            <span className="grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-dlt-yellow border-2 border-dlt-ink">
              <TruckIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
          </div>
        </div>

        <ol className="mt-6 sm:mt-8 grid grid-cols-4 gap-1 sm:gap-2" aria-hidden>
          {STOPS.map((s, i) => (
            <li key={s.time} className="text-center">
              <span
                className="tracker-stop mx-auto grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 text-sm font-bold"
                style={{ animationDelay: `${START + DURATION * s.at}s` }}
              >
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="block mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-semibold leading-tight">{t.tracker.stops[i]}</span>
              <span className="block text-[10px] sm:text-xs text-dlt-muted tabular-nums">{s.time}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="tracker-reveal hidden sm:flex mx-7 mb-6 rounded-md bg-dlt-paper px-4 py-3 items-center gap-3" style={{ animationDelay: `${START + DURATION + 0.2}s` }}>
        <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-dlt-ink text-dlt-yellow">
          <CheckIcon className="h-5 w-5" />
        </span>
        <span className="text-sm leading-snug">
          <span className="font-semibold block">{t.tracker.pod}</span>
          <span className="text-dlt-muted">{t.tracker.podText}</span>
        </span>
      </div>
    </div>
  )
}
