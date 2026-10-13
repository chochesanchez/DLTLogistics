// Structural data for DLT's public site: images, slugs, numbers and client logos.
// All visible text lives in src/i18n/dictionaries/{en,es}.ts.
// Review any change here with management before publishing.

export const COMPANY = {
  name: 'DLT Logistics',
  phone: '+52 81 1916 1086',
  phoneHref: 'tel:+528119161086',
  email: 'jmsanchez@dasza.com',
  whatsapp: 'https://wa.me/5218119161086',
  daszaUrl: 'https://www.dasza.com',
  mapsUrl: 'https://maps.google.com/?q=QR53%2BXP+Apodaca,+Nuevo+Le%C3%B3n',
}

// KPI values, in the same order as `kpis` in the dictionaries.
// 97.9% and 4.8/5 were on the previous site and have no source in the company documents — confirm before keeping.
export const KPI_VALUES: { value: string | null; count: boolean }[] = [
  { value: '97.9%', count: true },
  { value: '4.8/5', count: true },
  { value: null, count: false }, // "Same day" text comes from the dictionary
]

export type ServiceSlug = 'last-mile' | 'storage' | 'fulfillment' | 'retail'

export const SERVICES: { slug: ServiceSlug; image: string }[] = [
  { slug: 'last-mile', image: '/images/site/parcel-handoff.jpg' },
  { slug: 'storage', image: '/images/site/warehouse-forklift.jpg' },
  { slug: 'fulfillment', image: '/images/site/parcels.jpg' },
  { slug: 'retail', image: '/images/site/warehouse-yellow.jpg' },
]

// Client logos — same list and order as the original site.
export const CLIENT_LOGOS: { name: string; src: string }[] = [
  { name: 'BBVA', src: 'bbvalogo.png' },
  { name: 'Office Depot', src: 'Office Depot Logo.webp' },
  { name: 'Walmart', src: 'Walmart Logo 2008.png' },
  { name: 'Soriana', src: 'Soriana Logo.webp' },
  { name: 'Rockwell Automation', src: 'Rockwell Automation Logo.jpg' },
  { name: 'Embraco', src: 'Embraco Logo.png' },
  { name: 'Sanmina', src: 'sanminalogo.png' },
  { name: 'Celestica', src: 'Celestica Logo.png' },
  { name: 'Whirlpool', src: 'Whirlpool Logo.png' },
  { name: 'Carrier', src: 'Carrier Corporation Logo.png' },
  { name: 'Magna', src: 'Magna Logo.png' },
  { name: 'US Motors', src: 'US Motors Logo.webp' },
  { name: 'RXN', src: 'RXN logo.png' },
  { name: 'Regal Beloit', src: 'Regal Beloit Logo.png' },
  { name: 'Fluidmaster', src: 'fluidmaster logo.png' },
  { name: 'Tuopu Group', src: 'Tuopu Group Logo.jpeg' },
  { name: 'Superior Industries', src: 'superior industries logo.png' },
  { name: 'Dubal', src: 'Dubai Logo Dark.png' },
  { name: 'Dometic', src: 'Dometic Logo.webp' },
  { name: 'ERD Metal', src: 'erd-metal-canada logo.png' },
  { name: 'NSK', src: 'NSK Japan Logo.webp' },
  { name: 'AutoZone', src: 'Autozone Logo.png' },
  { name: 'MotoRad', src: 'MotoRad Logo.webp' },
  { name: 'Metalsa', src: 'Metalsa Logo.avif' },
  { name: 'Pilgrim’s', src: 'Pilgrims Logo.png' },
  { name: 'Munters', src: 'Munters Logo.webp' },
  { name: 'Nordic', src: 'nordic logo.jpg' },
  { name: 'Ternium', src: 'Ternium Logo.png' },
  { name: 'Magnesitas Navarras', src: 'Magnesitas Logo.png' },
  { name: 'Mitsuba', src: 'Mitsuba Corporation Logo.png' },
  { name: 'Elematec', src: 'elematec logo.gif' },
  { name: 'Daimler Truck', src: 'Daimler Trucks Logo.png' },
  { name: 'ConMet', src: 'Conmet Logo.png' },
  { name: 'Toyota', src: 'Toyota Logo.png' },
]

export const logoSrc = (file: string) => encodeURI(`/images/partners/${file}`)
