'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { MAP_W, MAP_H, MEXICO_PATH, USA_PATH, HUB, HUB_QRO, DESTINATIONS } from './mexicoMap'
import { useI18n } from '@/i18n/I18nProvider'

type Pt = { x: number; y: number }

function curve(a: Pt, b: Pt, bend = 0.16) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  return `M${a.x},${a.y} Q${mx - dy * bend},${my + dx * bend} ${b.x},${b.y}`
}

// Cities served from Querétaro; the rest leave from Apodaca.
const FROM_QRO = new Set(['Guadalajara', 'Ciudad de México', 'Puebla', 'Mérida'])
const MAJOR = new Set(['Ciudad de México', 'Guadalajara', 'Tijuana', 'Mérida', 'Nuevo Laredo', 'Hermosillo', 'Chihuahua'])
const LEFT = new Set(['Saltillo', 'Torreón', 'Chihuahua', 'Hermosillo', 'Tijuana', 'Guadalajara', 'San Luis Potosí'])

// Shipments leave the shared Dasza / DLT warehouses for Mexico's main metros. Routes draw when the map scrolls into view.
export default function ExportMap() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const reduce = useReducedMotion()
  const routes = DESTINATIONS.map((d, i) => {
    const from = FROM_QRO.has(d.label) ? HUB_QRO : HUB
    return { ...d, d: curve(from, d, i % 2 ? 0.14 : -0.14) }
  })
  const link = curve(HUB, HUB_QRO, 0.08)

  return (
    <div ref={ref}>
      <svg viewBox={`10 -24 ${MAP_W - 30} ${MAP_H + 14}`} className="w-full h-auto" role="img" aria-labelledby="export-map-title">
        <title id="export-map-title">{t.map.title}</title>
        <path d={USA_PATH} fill="#4A5059" opacity="0.6" />
        <path d={MEXICO_PATH} fill="#545A64" stroke="#6B717C" strokeWidth="1.2" strokeLinejoin="round" />
        <text x="560" y="70" fill="#9AA0AC" fontSize="14" letterSpacing="2" className="map-label">{t.map.usa}</text>

        <motion.path
          d={link}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity={0.5}
          strokeWidth={2}
          strokeDasharray="6 6"
          initial={reduce ? false : { pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {routes.map((r, i) => (
          <motion.path
            key={r.label}
            d={r.d}
            fill="none"
            stroke="#FFCC00"
            strokeWidth={2.2}
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
            transition={{ duration: 1.1, delay: 0.4 + i * 0.09, ease: [0.6, 0.05, 0.3, 1] }}
          />
        ))}

        {inView &&
          !reduce &&
          routes.map((r, i) => (
            <circle key={`dot-${r.label}`} r="4.5" fill="#FFFFFF" opacity="0">
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${2.6 + (i % 4) * 0.5}s`} begin={`${1.6 + i * 0.15}s`} repeatCount="indefinite" />
              <animateMotion dur={`${2.6 + (i % 4) * 0.5}s`} begin={`${1.6 + i * 0.15}s`} repeatCount="indefinite" path={r.d} />
            </circle>
          ))}

        {routes.map((r) => (
          <g key={`n-${r.label}`} className={MAJOR.has(r.label) ? '' : 'map-label-minor'}>
            <circle cx={r.x} cy={r.y} r="4.5" fill="#F2F4F8" />
            <text x={r.x + (LEFT.has(r.label) ? -10 : 10)} y={r.y + (r.label === 'Puebla' ? 16 : 4)} textAnchor={LEFT.has(r.label) ? 'end' : 'start'} fill="#D5D9E0" fontSize="14" className="map-label">
              {r.label}
            </text>
          </g>
        ))}

        {[
          { p: HUB, label: t.map.hubApodaca, dx: 16, dy: -12 },
          { p: HUB_QRO, label: t.map.hubQueretaro, dx: 14, dy: -14 },
        ].map((h) => (
          <g key={h.label}>
            <circle cx={h.p.x} cy={h.p.y} r="30" fill="#FFCC00" opacity="0.14" />
            <circle cx={h.p.x} cy={h.p.y} r="9" fill="#FFCC00" stroke="#FFFFFF" strokeWidth="2.5" />
            <text x={h.p.x + h.dx} y={h.p.y + h.dy} fill="#FFFFFF" fontSize="17" fontWeight="700" className="map-label-strong">
              {h.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-4 grid gap-2 text-sm text-white/75">
        <span className="flex items-start gap-2.5"><span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-dlt-yellow ring-2 ring-white" /> {t.map.legendFleet}</span>
        <span className="flex items-start gap-2.5"><span className="mt-2 h-0.5 w-5 shrink-0 bg-dlt-yellow" /> {t.map.legendNational}</span>
      </div>
    </div>
  )
}
