'use client'

import Reveal from '@/components/ui/Reveal'
import PageHeader from '@/components/ui/PageHeader'
import Image from 'next/image'
import logoSrc from '@/../IMAGES/DLT Logistics LOGO.png'
import { UserGroupIcon } from '@heroicons/react/24/outline'
// partner logos (static imports)
import whirlpoolLogo from '@/../IMAGES/Whirlpool Logo.png'
import carrierLogo from '@/../IMAGES/Carrier Corporation Logo copy.png'
import magnaLogo from '@/../IMAGES/Magna Logo copy.png'
import usMotorsLogo from '@/../IMAGES/US Motors Logo copy.webp'
import rxnLogo from '@/../IMAGES/RXN logo copy.png'
import regalBeloitLogo from '@/../IMAGES/Regal Beloit Logo copy.png'
import fluidmasterLogo from '@/../IMAGES/fluidmaster logo copy.png'
import tuopuLogo from '@/../IMAGES/Tuopu Group Logo copy.jpeg'
import superiorIndustriesLogo from '@/../IMAGES/superior industries logo copy.png'
import dubaiLogo from '@/../IMAGES/Dubai Logo Dark copy.png'
import dometicLogo from '@/../IMAGES/Dometic Logo copy.webp'
import erdMetalCanadaLogo from '@/../IMAGES/erd-metal-canada logo copy.png'
import nskJapanLogo from '@/../IMAGES/NSK Japan Logo copy.webp'
import autozoneLogo from '@/../IMAGES/Autozone Logo copy.png'
import motoradLogo from '@/../IMAGES/MotoRad Logo copy.webp'
import metalsaLogo from '@/../IMAGES/Metalsa Logo copy.avif'
import pilgrimsLogo from '@/../IMAGES/Pilgrims Logo copy.png'
import muntersLogo from '@/../IMAGES/Munters Logo copy.webp'
import nordicLogo from '@/../IMAGES/nordic logo copy.jpg'
import terniumLogo from '@/../IMAGES/Ternium Logo copy.png'
import magnesitasLogo from '@/../IMAGES/Magnesitas Logo copy.png'
import mitsubaLogo from '@/../IMAGES/Mitsuba Corporation Logo copy.png'
import elematecLogo from '@/../IMAGES/elematec logo copy.gif'
import daimlerTrucksLogo from '@/../IMAGES/Daimler Trucks Logo copy.png'
import conmetLogo from '@/../IMAGES/Conmet Logo copy.png'
import toyotaLogo from '@/../IMAGES/Toyota Logo copy.png'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader title="About us" />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-900">We are</Reveal>
        <Reveal as="div" className="flex items-center gap-2">
          <Image src={logoSrc} alt="DLT Logistics Logo" width={40} height={40} className="h-10 w-10 object-contain" priority />
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
            (whirlpoolLogo as unknown as string),
            (carrierLogo as unknown as string),
            (magnaLogo as unknown as string),
            (usMotorsLogo as unknown as string),
            (rxnLogo as unknown as string),
            (regalBeloitLogo as unknown as string),
            (fluidmasterLogo as unknown as string),
            (tuopuLogo as unknown as string),
            (superiorIndustriesLogo as unknown as string),
            (dubaiLogo as unknown as string),
            (dometicLogo as unknown as string),
            (erdMetalCanadaLogo as unknown as string),
            (nskJapanLogo as unknown as string),
            (autozoneLogo as unknown as string),
            (motoradLogo as unknown as string),
            (metalsaLogo as unknown as string),
            (pilgrimsLogo as unknown as string),
            (muntersLogo as unknown as string),
            (nordicLogo as unknown as string),
            (terniumLogo as unknown as string),
            (magnesitasLogo as unknown as string),
            (mitsubaLogo as unknown as string),
            (elematecLogo as unknown as string),
            (daimlerTrucksLogo as unknown as string),
            (conmetLogo as unknown as string),
            (toyotaLogo as unknown as string),
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


