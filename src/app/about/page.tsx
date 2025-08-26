'use client'

import Reveal from '@/components/ui/Reveal'
import PageHeader from '@/components/ui/PageHeader'
import Image from 'next/image'
import logoSrc from '@/../IMAGES/DLT Logistics LOGO.png'

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
    </div>
  )
}


