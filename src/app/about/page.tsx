'use client'

import Reveal from '@/components/ui/Reveal'
import PageHeader from '@/components/ui/PageHeader'
import Image from 'next/image'
import { UserGroupIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader title="About us" />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-900">We are</Reveal>
        <Reveal as="div" className="flex items-center gap-2">
          <Image src="/images/DLT Logistics LOGO.png" alt="DLT Logistics Logo" width={40} height={40} className="h-10 w-10 object-contain" priority />
          <span className="text-3xl md:text-4xl font-extrabold text-[#FFCC00]">DLT</span>
          <span className="text-3xl md:text-4xl font-extrabold text-gray-800">Logistics</span>
        </Reveal>

        <Reveal as="p" className="text-lg leading-8 text-gray-700">
          Serving manufacturing industries in México, suppliers rely on us to handle their physical products,
          operational information and inventory control. We build long‑term partnerships with the manufacturing
          sector and operate as an extension of your team.
        </Reveal>

        <Reveal as="p" className="text-lg leading-8 text-gray-700">
          We offer a wide range of logistics solutions that can be tailored to your business and part numbers.
          Our services support day‑to‑day execution while giving leadership the visibility required for
          informed decision‑making—coverage that spans storage, distribution and fulfillment.
        </Reveal>

        <Reveal as="div" className="mt-6 border-l-4 border-[#FFCC00] pl-4 text-gray-600">
          Part of the Dasza group, DLTLogistics complements the broader capabilities of Dasza Co. across
          supply, warehousing and value‑added operations—delivering cohesive service without changing your
          current systems or data structures.
        </Reveal>
      </div>

      {/* Partners full gallery */}
      <div id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal as="div" className="flex items-center gap-2 mb-2">
            <UserGroupIcon className="h-9 w-9 text-[#FFCC00]" aria-hidden />
            <h2 className="text-2xl md:text-3xl font-bold">Our Partners</h2>
          </Reveal>
          <Reveal as="p" className="text-gray-700 mb-10 text-lg leading-8 text-left">
            We are trusted by leaders across automotive, electronics, appliances, retail and more.
            Here’s a snapshot of brands who rely on our logistics and distribution network.
          </Reveal>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            '/images/partners/bbvalogo.png',
            '/images/partners/Office Depot Logo.webp',
            '/images/partners/Walmart Logo 2008.png',
            '/images/partners/Soriana Logo.webp',
            '/images/partners/Rockwell Automation Logo.jpg',
            '/images/partners/Embraco Logo.png',
            '/images/partners/sanminalogo.png',
            '/images/partners/Celestica Logo.png',
            '/images/partners/Whirlpool Logo.png',
            '/images/partners/Carrier Corporation Logo.png',
            '/images/partners/Magna Logo.png',
            '/images/partners/US Motors Logo.webp',
            '/images/partners/RXN logo.png',
            '/images/partners/Regal Beloit Logo.png',
            '/images/partners/fluidmaster logo.png',
            '/images/partners/Tuopu Group Logo.jpeg',
            '/images/partners/superior industries logo.png',
            '/images/partners/Dubai Logo Dark.png',
            '/images/partners/Dometic Logo.webp',
            '/images/partners/erd-metal-canada logo.png',
            '/images/partners/NSK Japan Logo.webp',
            '/images/partners/Autozone Logo.png',
            '/images/partners/MotoRad Logo.webp',
            '/images/partners/Metalsa Logo.avif',
            '/images/partners/Pilgrims Logo.png',
            '/images/partners/Munters Logo.webp',
            '/images/partners/nordic logo.jpg',
            '/images/partners/Ternium Logo.png',
            '/images/partners/Magnesitas Logo.png',
            '/images/partners/Mitsuba Corporation Logo.png',
            '/images/partners/elematec logo.gif',
            '/images/partners/Daimler Trucks Logo.png',
            '/images/partners/Conmet Logo.png',
            '/images/partners/Toyota Logo.png',
          ].map((src, i) => (
            <div key={i} className="partner-card">
              <div className="relative w-40 h-20">
                <Image src={src} alt="Partner" fill sizes="160px" style={{ objectFit: 'contain', backgroundColor: 'white' }} className="partner-logo" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner CTA */}
      <div className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <Reveal as="h3" className="text-2xl md:text-3xl font-bold mb-2">You can be here, too</Reveal>
        <Reveal as="p" className="text-gray-700 mb-6">
          Join a growing network of industry leaders who trust our logistics, warehousing and last‑mile
          solutions. Let’s explore how we can support your operation.
        </Reveal>
        <a href="/contact" className="btn-primary inline-block">Contact us</a>
      </div>
    </div>
  )
}


