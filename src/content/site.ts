// Single source of truth for DLT's public facts, services and client logos.
// Review any change here with management before publishing.

export const COMPANY = {
  name: 'DLT Logistics',
  phone: '+52 81 1916 1086',
  phoneHref: 'tel:+528119161086',
  email: 'jmsanchez@dasza.com',
  whatsapp: 'https://wa.me/5218119161086',
  address: 'Dasza CEDIS campus, Apodaca, N.L.',
  daszaUrl: 'https://www.dasza.com',
}

// These figures were on the previous site and have no source in the company documents — confirm before keeping.
export const KPIS = [
  { value: '97.9%', label: 'on-time delivery' },
  { value: '4.8/5', label: 'customer rating' },
  { value: 'Same day', label: 'delivery in the Monterrey metro area' },
]

// The order flow, start to finish — a real sequence.
export const FLOW = [
  { title: 'We receive your stock', text: 'Every inbound load is inspected, counted and registered before it’s put away.' },
  { title: 'We store it', text: 'Racks or floor space, organized by product type, lot and location.' },
  { title: 'We pick and pack orders', text: 'Orders are prepared to your packaging and labeling requirements.' },
  { title: 'We deliver', text: 'Our own fleet delivers to homes, offices, stores and plants across the metro area.' },
  { title: 'You get proof', text: 'Every delivery is tracked and closed with proof of delivery.' },
]

export type Service = {
  slug: string
  name: string
  summary: string
  image: string
  features: { title: string; text: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'last-mile',
    name: 'Last-mile delivery',
    summary: 'Same-day and next-day delivery for parcels up to 100 kg across Monterrey and its metropolitan area.',
    image: '/images/site/parcel-handoff.jpg',
    features: [
      { title: 'Our own fleet', text: 'Local deliveries in Monterrey and the metro area with trained drivers and planned routes.' },
      { title: 'Flexible delivery points', text: 'Homes, offices, pickup points or commercial areas — routes adapt to your customers.' },
      { title: 'Real-time tracking', text: 'Full traceability from our warehouse to the final delivery.' },
      { title: 'Same-day delivery', text: 'Fast delivery for local orders so your customers get them sooner.' },
      { title: 'Returns and exchanges', text: 'We collect products from your customers for a smooth after-sales experience.' },
    ],
  },
  {
    slug: 'storage',
    name: 'Storage',
    summary: 'Racked and open storage that grows with your volume, with inventory you can check any time.',
    image: '/images/site/warehouse-forklift.jpg',
    features: [
      { title: 'Space that scales', text: 'From industrial racks to open areas for palletized or high-volume cargo.' },
      { title: 'Real-time inventory', text: 'Receipts, shipments, stock, lots, expiration dates and locations, reported on demand.' },
      { title: 'Scheduled operations', text: 'Inspected, counted receipts and deliveries by calendar or on demand.' },
      { title: 'Organized by product type', text: 'Raw materials, e-commerce, retail, kits, promotional material or spare parts.' },
      { title: '24/7 security', text: 'Surveillance, restricted access and alarms for sensitive or high-value goods.' },
    ],
  },
  {
    slug: 'fulfillment',
    name: 'Fulfillment',
    summary: 'We receive, store, pick, pack and ship your e-commerce and B2B orders, and handle returns.',
    image: '/images/site/parcels.jpg',
    features: [
      { title: 'Receiving and inventory', text: 'Standard processes for accurate receipt and full traceability.' },
      { title: 'Order preparation', text: 'Orders assembled with custom packaging and promotional inserts.' },
      { title: 'Storage close to your customers', text: 'Inventory kept where delivery times are shortest.' },
      { title: 'Shipping options', text: 'Our own deliveries plus courier coordination across Mexico.' },
      { title: 'Returns', text: 'Returns and exchanges processed quickly.' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail distribution',
    summary: 'Store and distribution-center deliveries that meet each retailer’s windows, labeling and packaging rules.',
    image: '/images/site/warehouse-yellow.jpg',
    features: [
      { title: 'Retail-ready storage', text: 'Inventory organized per client, with lot control, expiration dates and labeling.' },
      { title: 'Store and DC delivery', text: 'Deliveries to retail chains within their windows and requirements.' },
      { title: 'Packaging and displays', text: 'Promotional kits, cases, displays and retailer-specific barcode labeling.' },
      { title: 'Order follow-up', text: 'Proactive monitoring so commercial commitments are met.' },
      { title: 'Performance reporting', text: 'Delivery performance, inventory levels and compliance metrics.' },
    ],
  },
]

// Same list as the previous site; "Magna" removed (DASZA's documents show the client is Magnesitas Navarras, kept below).
export const CLIENT_LOGOS: { name: string; src: string }[] = [
  { name: 'Walmart', src: 'Walmart Logo 2008.png' },
  { name: 'Soriana', src: 'Soriana Logo.webp' },
  { name: 'Office Depot', src: 'Office Depot Logo.webp' },
  { name: 'AutoZone', src: 'Autozone Logo.png' },
  { name: 'BBVA', src: 'bbvalogo.png' },
  { name: 'Whirlpool', src: 'Whirlpool Logo.png' },
  { name: 'Embraco', src: 'Embraco Logo.png' },
  { name: 'Toyota', src: 'Toyota Logo.png' },
  { name: 'Daimler Truck', src: 'Daimler Trucks Logo.png' },
  { name: 'ConMet', src: 'Conmet Logo.png' },
  { name: 'Metalsa', src: 'Metalsa Logo.avif' },
  { name: 'Ternium', src: 'Ternium Logo.png' },
  { name: 'Magnesitas Navarras', src: 'Magnesitas Logo.png' },
  { name: 'Carrier', src: 'Carrier Corporation Logo.png' },
  { name: 'Rockwell Automation', src: 'Rockwell Automation Logo.jpg' },
  { name: 'Celestica', src: 'Celestica Logo.png' },
  { name: 'Sanmina', src: 'sanminalogo.png' },
  { name: 'NSK', src: 'NSK Japan Logo.webp' },
  { name: 'Dometic', src: 'Dometic Logo.webp' },
  { name: 'Fluidmaster', src: 'fluidmaster logo.png' },
  { name: 'Munters', src: 'Munters Logo.webp' },
  { name: 'Nordic', src: 'nordic logo.jpg' },
  { name: 'Mitsuba', src: 'Mitsuba Corporation Logo.png' },
  { name: 'US Motors', src: 'US Motors Logo.webp' },
]

export const logoSrc = (file: string) => encodeURI(`/images/partners/${file}`)
