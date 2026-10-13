'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { MAP_W, MAP_H, MEXICO_PATH, USA_PATH, HUB, DESTINATIONS } from './mexicoMap'

type Pt = { x: number; y: number }

function curve(a: Pt, b: Pt, bend = 0.16) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  return `M${a.x},${a.y} Q${mx - dy * bend},${my + dx * bend} ${b.x},${b.y}`
}

const MAJOR = new Set(['Ciudad de México', 'Guadalajara', 'Tijuana', 'Mérida', 'Nuevo Laredo', 'Querétaro', 'Hermosillo'])
const LEFT = new Set(['Saltillo', 'Torreón', 'Chihuahua', 'Hermosillo', 'Tijuana', 'Guadalajara', 'San Luis Potosí'])

// Shipments leave the DLT hub in Apodaca for Mexico's main metros. Routes draw when the map scrolls into view.
export default function ExportMap() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const reduce = useReducedMotion()
  const routes = DESTINATIONS.map((d, i) => ({ ...d, d: curve(HUB, d, i % 2 ? 0.14 : -0.14) }))

  return (
    <div ref={ref}>
      <svg viewBox={`10 10 ${MAP_W - 30} ${MAP_H - 20}`} className="w-full h-auto" role="img" aria-labelledby="export-map-title">
        <title id="export-map-title">
          Map of Mexico showing shipments leaving the DLT hub in Apodaca, Nuevo León, for Saltillo, Nuevo Laredo, Chihuahua, Torreón, Hermosillo, Tijuana, San Luis Potosí, Guadalajara, Querétaro, Mexico City, Puebla and Mérida.
        </title>
        <path d={USA_PATH} fill="#4A5059" opacity="0.6" />
        <path d={MEXICO_PATH} fill="#545A64" stroke="#6B717C" strokeWidth="1.2" strokeLinejoin="round" />

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
            transition={{ duration: 1.1, delay: 0.2 + i * 0.09, ease: [0.6, 0.05, 0.3, 1] }}
          />
        ))}

        {inView && !reduce &&
          routes.map((r, i) => (
            <circle key={`dot-${r.label}`} r="4.5" fill="#FFFFFF" opacity="0">
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${2.6 + (i % 4) * 0.5}s`} begin={`${1.4 + i * 0.15}s`} repeatCount="indefinite" />
              <animateMotion dur={`${2.6 + (i % 4) * 0.5}s`} begin={`${1.4 + i * 0.15}s`} repeatCount="indefinite" path={r.d} />
            </circle>
          ))}

        {routes.map((r) => (
          <g key={`n-${r.label}`} className={MAJOR.has(r.label) ? '' : 'map-label-minor'}>
            <circle cx={r.x} cy={r.y} r="4.5" fill="#F2F4F8" />
            <text
              x={r.x + (LEFT.has(r.label) ? -10 : 10)}
              y={r.y + 4}
              textAnchor={LEFT.has(r.label) ? 'end' : 'start'}
              fill="#D5D9E0"
              fontSize="14"
              className="map-label"
            >
              {r.label}
            </text>
          </g>
        ))}

        <circle cx={HUB.x} cy={HUB.y} r="34" fill="#FFCC00" opacity="0.14" />
        <circle cx={HUB.x} cy={HUB.y} r="9" fill="#FFCC00" stroke="#FFFFFF" strokeWidth="2.5" />
        <text x={HUB.x + 14} y={HUB.y - 14} fill="#FFFFFF" fontSize="18" fontWeight="700" className="map-label-strong">
          DLT hub, Apodaca
        </text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
        <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-dlt-yellow ring-2 ring-white" /> Our own fleet: Monterrey metro, same or next day</span>
        <span className="flex items-center gap-2"><span className="h-0.5 w-5 bg-dlt-yellow" /> National deliveries through partner carriers</span>
      </div>
    </div>
  )
}
