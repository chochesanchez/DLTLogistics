import { TruckIcon, CheckIcon } from '@heroicons/react/24/solid'

// Illustrative order: plays once on load (CSS only), then rests on "Delivered".
const STOPS = [
  { label: 'Picked up', time: '09:12', at: 0 },
  { label: 'In transit', time: '11:40', at: 1 / 3 },
  { label: 'Out for delivery', time: '13:55', at: 2 / 3 },
  { label: 'Delivered', time: '14:37', at: 1 },
]
const START = 0.6
const DURATION = 4.2

export default function DeliveryTracker() {
  return (
    <div
      className="rounded-lg bg-white text-dlt-ink shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] border-2 border-dlt-ink overflow-hidden"
      role="img"
      aria-label="Example delivery: picked up at 9:12, in transit, out for delivery, delivered at 14:37 with proof of delivery."
    >
      <div className="flex items-center justify-between px-5 py-3 bg-dlt-ink text-white">
        <span className="font-display text-lg font-bold tracking-wide">Order DLT-48213</span>
        <span className="text-sm text-white/70">Apodaca to San Pedro</span>
      </div>

      <div className="px-5 sm:px-7 pt-10 pb-6">
        <div className="relative h-2 mx-3 rounded-full bg-dlt-line">
          <div className="tracker-fill absolute inset-0 rounded-full bg-dlt-yellow" />
          <div className="tracker-truck absolute -top-[22px] -translate-x-1/2">
            <span className="grid place-items-center h-11 w-11 rounded-md bg-dlt-yellow border-2 border-dlt-ink">
              <TruckIcon className="h-6 w-6" />
            </span>
          </div>
        </div>

        <ol className="mt-8 grid grid-cols-4 gap-2" aria-hidden>
          {STOPS.map((s) => (
            <li key={s.label} className="text-center">
              <span
                className="tracker-stop mx-auto grid place-items-center h-8 w-8 rounded-full border-2 text-sm font-bold"
                style={{ animationDelay: `${START + DURATION * s.at}s` }}
              >
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="block mt-2 text-[13px] sm:text-sm font-semibold leading-tight">{s.label}</span>
              <span className="block text-xs text-dlt-muted tabular-nums">{s.time}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="tracker-reveal mx-5 sm:mx-7 mb-6 rounded-md bg-dlt-paper px-4 py-3 flex items-center gap-3" style={{ animationDelay: `${START + DURATION + 0.2}s` }}>
        <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-dlt-ink text-dlt-yellow">
          <CheckIcon className="h-5 w-5" />
        </span>
        <span className="text-sm leading-snug">
          <span className="font-semibold block">Proof of delivery captured</span>
          <span className="text-dlt-muted">Signature and photo sent to you at 14:37</span>
        </span>
      </div>
    </div>
  )
}
