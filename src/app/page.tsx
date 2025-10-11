'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/ui/ContactForm'
import BusinessContactForm from '@/components/ui/BusinessContactForm'
import logoSrc from '@/../IMAGES/DLT Logistics LOGO.png'
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
// Using pure CSS marquee for smoothness; user pan was causing micro-jitters
import heroTruck from '@/../IMAGES/hero-truck.png'
import React from 'react'
import { ShieldCheckIcon, ChartBarIcon, TruckIcon } from '@heroicons/react/24/outline'
 

export default function Home() {
  const services = [
    {
      title: 'Last Mile',
      path: 'last-mile',
      description: 'Same-day and next-day delivery for parcels up to 100kg.',
      image: '/images/new2.jpg'
    },
    {
      title: 'Storage',
      path: 'storage',
      description: 'Secure, accessible, and organized storage spaces.',
      image: '/images/Intelligent Stereoscopic Storage Frame.png'
    },
    {
      title: 'Retail',
      path: 'retail',
      description: 'Complete retail distribution solutions.',
      image: '/images/new3.jpg'
    },
    {
      title: 'Fulfillment',
      path: 'fulfillment',
      description: 'Complete e-commerce fulfillment solutions.',
      image: '/images/new1.jpg'
    }
  ]

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative h-[620px] overflow-hidden'>
        <Image
          src={heroTruck as unknown as string}
          alt='DLT Logistics Hero'
          fill
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          priority
        />
        <div className='absolute inset-0 bg-black/45' />
        <div className='relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center justify-center text-center'>
          <div>
            <Reveal as='h1' className='text-white font-bold text-5xl md:text-6xl leading-tight mb-6'>
              Complete Logistics Solutions
            </Reveal>
            <Reveal as='p' className='text-white/90 text-xl md:text-2xl'>
              <span className='text-[#FFCC00] font-bold'>Storage. Distribution. Fulfillment.</span>
            </Reveal>
          </div>
        </div>
      </div>

      {/* KPI section: vertical widgets on mobile, 3-column on md+ */}
      <div className='bg-white'>
        {/* Mobile vertical widgets */}
        <div className='sm:hidden max-w-6xl mx-auto px-4 py-8'>
          <div className='flex flex-col gap-3'>
            <div className='bg-white rounded-lg shadow-sm px-5 py-4 text-center'>
              <div className='text-2xl font-extrabold text-[#FFCC00]'>97.9%</div>
              <div className='mt-1 text-gray-700 text-xs'>On-Time Delivery</div>
            </div>
            <div className='bg-white rounded-lg shadow-sm px-5 py-4 text-center'>
              <div className='text-2xl font-extrabold text-[#FFCC00]'>4.8/5</div>
              <div className='mt-1 text-gray-700 text-xs'>Customer Rating</div>
            </div>
            <div className='bg-white rounded-lg shadow-sm px-5 py-4 text-center'>
              <div className='text-2xl font-extrabold text-[#FFCC00]'>+200,000</div>
              <div className='mt-1 text-gray-700 text-xs'>square feet areas</div>
            </div>
          </div>
        </div>
        {/* Desktop grid */}
        <div className='hidden sm:grid max-w-6xl mx-auto px-6 py-12 grid-cols-3 gap-6 text-center'>
          <div>
            <div className='text-4xl font-bold text-[#FFCC00]'>97.9%</div>
            <div className='mt-1 text-gray-700'>On-Time Delivery</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-[#FFCC00]'>4.8/5</div>
            <div className='mt-1 text-gray-700'>Customer Rating</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-[#FFCC00]'>+200,000</div>
            <div className='mt-1 text-gray-700'>square feet areas</div>
          </div>
        </div>
      </div>

      {/* About Us Inline Section */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10'>
        <div className='text-gray-700'>
          <div className='mt-2 flex items-center gap-2 justify-center'>
            <Image src={logoSrc} alt='DLT Logistics Logo' width={40} height={40} className='h-10 w-10 object-contain' />
            <span className='text-3xl md:text-4xl font-extrabold text-[#FFCC00]'>DLT</span>
            <span className='text-3xl md:text-4xl font-extrabold text-gray-800'>Logistics</span>
          </div>
          <p className='mt-3 text-lg md:text-xl leading-8'>Serving manufacturing industries in México, suppliers rely on us to handle their physical products, operational information and inventory control. We build long‑term partnerships with the manufacturing sector and operate as an extension of your team.</p>
          <div className='text-left mt-2'>
            <Link href='/about' className='text-[#FFCC00] font-semibold hover:underline'>Learn more...</Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='py-14 md:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Reveal as='h2' className='text-4xl font-bold text-center mb-10 md:mb-14'>Our Services</Reveal>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <Link 
              href={`/services/${service.path}`}
              className='block h-full'
              key={index}
            >
              <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col'>
                <div className='relative h-48 rounded-t-lg overflow-hidden flex-shrink-0'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <Reveal className='p-6 flex-grow flex flex-col'>
                  <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                  <p className='text-gray-600 flex-grow'>{service.description}</p>
                </Reveal>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className='py-24 bg-gray-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Reveal as='h2' className='text-4xl font-bold text-center mb-12'>Trusted By Industry Leaders</Reveal>
          <div className='partners-marquee-viewport'>
            <div className='partners-marquee-track'>
              {[
                { name: 'BBVA', image: '/images/partners/bbvalogo.png' },
                { name: 'Office Depot', image: '/images/partners/Office Depot Logo.webp' },
                { name: 'Walmart', image: '/images/partners/Walmart Logo 2008.png' },
                { name: 'Soriana', image: '/images/partners/Soriana Logo.webp' },
                { name: 'Rockwell', image: '/images/partners/Rockwell Automation Logo.jpg' },
                { name: 'Embraco', image: '/images/partners/Embraco Logo.png' },
                { name: 'Sanmina', image: '/images/partners/sanminalogo.png' },
                { name: 'Celestica', image: '/images/partners/Celestica Logo.png' },
                { name: 'Whirlpool', image: (whirlpoolLogo as unknown as string) },
                { name: 'Carrier', image: (carrierLogo as unknown as string) },
                { name: 'Magna', image: (magnaLogo as unknown as string) },
                { name: 'US Motors', image: (usMotorsLogo as unknown as string) },
                { name: 'RXN', image: (rxnLogo as unknown as string) },
                { name: 'Regal Beloit', image: (regalBeloitLogo as unknown as string) },
                { name: 'Fluidmaster', image: (fluidmasterLogo as unknown as string) },
                { name: 'Tuopu Group', image: (tuopuLogo as unknown as string) },
                { name: 'Superior Industries', image: (superiorIndustriesLogo as unknown as string) },
                { name: 'Dubai', image: (dubaiLogo as unknown as string) },
                { name: 'Dometic', image: (dometicLogo as unknown as string) },
                { name: 'ERD Metal Canada', image: (erdMetalCanadaLogo as unknown as string) },
                { name: 'NSK Japan', image: (nskJapanLogo as unknown as string) },
                { name: 'AutoZone', image: (autozoneLogo as unknown as string) },
                { name: 'MotoRad', image: (motoradLogo as unknown as string) },
                { name: 'Metalsa', image: (metalsaLogo as unknown as string) },
                { name: 'Pilgrim’s', image: (pilgrimsLogo as unknown as string) },
                { name: 'Munters', image: (muntersLogo as unknown as string) },
                { name: 'Nordic', image: (nordicLogo as unknown as string) },
                { name: 'Ternium', image: (terniumLogo as unknown as string) },
                { name: 'Magnesitas', image: (magnesitasLogo as unknown as string) },
                { name: 'Mitsuba', image: (mitsubaLogo as unknown as string) },
                { name: 'Elematec', image: (elematecLogo as unknown as string) },
                { name: 'Daimler Trucks', image: (daimlerTrucksLogo as unknown as string) },
                { name: 'ConMet', image: (conmetLogo as unknown as string) },
                { name: 'Toyota', image: (toyotaLogo as unknown as string) },
              // duplicate for seamless loop
                 { name: 'BBVA', image: '/images/partners/bbvalogo.png' },
                 { name: 'Office Depot', image: '/images/partners/Office Depot Logo.webp' },
                 { name: 'Walmart', image: '/images/partners/Walmart Logo 2008.png' },
                 { name: 'Soriana', image: '/images/partners/Soriana Logo.webp' },
                 { name: 'Rockwell', image: '/images/partners/Rockwell Automation Logo.jpg' },
                 { name: 'Embraco', image: '/images/partners/Embraco Logo.png' },
                 { name: 'Sanmina', image: '/images/partners/sanminalogo.png' },
                 { name: 'Celestica', image: '/images/partners/Celestica Logo.png' },
                 { name: 'Whirlpool', image: (whirlpoolLogo as unknown as string) },
                 { name: 'Carrier', image: (carrierLogo as unknown as string) },
                 { name: 'Magna', image: (magnaLogo as unknown as string) },
                 { name: 'US Motors', image: (usMotorsLogo as unknown as string) },
                 { name: 'RXN', image: (rxnLogo as unknown as string) },
                 { name: 'Regal Beloit', image: (regalBeloitLogo as unknown as string) },
                 { name: 'Fluidmaster', image: (fluidmasterLogo as unknown as string) },
                 { name: 'Tuopu Group', image: (tuopuLogo as unknown as string) },
                 { name: 'Superior Industries', image: (superiorIndustriesLogo as unknown as string) },
                 { name: 'Dubai', image: (dubaiLogo as unknown as string) },
                 { name: 'Dometic', image: (dometicLogo as unknown as string) },
                 { name: 'ERD Metal Canada', image: (erdMetalCanadaLogo as unknown as string) },
                 { name: 'NSK Japan', image: (nskJapanLogo as unknown as string) },
                 { name: 'AutoZone', image: (autozoneLogo as unknown as string) },
                 { name: 'MotoRad', image: (motoradLogo as unknown as string) },
                 { name: 'Metalsa', image: (metalsaLogo as unknown as string) },
                 { name: 'Pilgrim’s', image: (pilgrimsLogo as unknown as string) },
                 { name: 'Munters', image: (muntersLogo as unknown as string) },
                 { name: 'Nordic', image: (nordicLogo as unknown as string) },
                 { name: 'Ternium', image: (terniumLogo as unknown as string) },
                 { name: 'Magnesitas', image: (magnesitasLogo as unknown as string) },
                 { name: 'Mitsuba', image: (mitsubaLogo as unknown as string) },
                 { name: 'Elematec', image: (elematecLogo as unknown as string) },
                 { name: 'Daimler Trucks', image: (daimlerTrucksLogo as unknown as string) },
                 { name: 'ConMet', image: (conmetLogo as unknown as string) },
                 { name: 'Toyota', image: (toyotaLogo as unknown as string) },
              ].map((partner, index) => (
                <div key={index} className='partner-card'>
                  <div className='relative w-40 h-20'>
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes='160px'
                      style={{ objectFit: 'contain', backgroundColor: 'white' }}
                      className='partner-logo'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-4 text-right'>
            <Link href='/about#partners' className='inline-block text-[#FFCC00] font-semibold hover:underline text-base md:text-lg'>See all →</Link>
          </div>
        </div>
      </div>

      {/* Why us */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16'>
        <Reveal as='h2' className='text-4xl font-bold text-center mb-10'>Why us</Reveal>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-xl border border-gray-300/40 bg-white shadow-sm p-6 text-center'>
            <div className='mx-auto h-12 w-12 grid place-items-center text-[#FFCC00] mb-3'>
              <ShieldCheckIcon className='h-8 w-8 md:h-10 md:w-10' />
            </div>
            <div className='font-semibold mb-1'>Operational excellence</div>
            <p className='text-gray-600 text-sm'>Disciplined processes, traceability and KPI‑driven performance across every lane.</p>
          </div>
          <div className='rounded-xl border border-gray-300/40 bg-white shadow-sm p-6 text-center'>
            <div className='mx-auto h-12 w-12 grid place-items-center text-[#FFCC00] mb-3'>
              <ChartBarIcon className='h-8 w-8 md:h-10 md:w-10' />
            </div>
            <div className='font-semibold mb-1'>Visibility & control</div>
            <p className='text-gray-600 text-sm'>Real‑time information, inventory and SLA metrics to support informed decisions.</p>
          </div>
          <div className='rounded-xl border border-gray-300/40 bg-white shadow-sm p-6 text-center'>
            <div className='mx-auto h-12 w-12 grid place-items-center text-[#FFCC00] mb-3'>
              <TruckIcon className='h-8 w-8 md:h-10 md:w-10' />
            </div>
            <div className='font-semibold mb-1'>End‑to‑end logistics</div>
            <p className='text-gray-600 text-sm'>Storage, distribution and fulfillment integrated to your operation and systems.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-16 md:py-20 bg-[#FFCC00]'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center'>
          <Reveal as='h2' className='text-4xl font-bold mb-8'>Ready to Optimize Your Logistics?</Reveal>
          <Reveal as='p' className='text-xl mb-12' delayMs={120}>Get in touch with our team for a customized solution.</Reveal>
          <Link 
            href='/quote' 
            className='inline-block bg-white px-8 py-4 rounded-lg text-[#FFCC00] font-bold text-lg hover:bg-gray-100 transition-colors'
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Contact Us Section (before footer) */}
      <div className='bg-white py-16 md:py-20'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
          <Reveal as='h2' className='text-4xl font-bold text-center mb-3'>Contact us</Reveal>
          <Reveal as='p' className='text-center text-gray-700 mb-8'>Every business is unique. Tell us about your needs and we will find the solutions.</Reveal>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div>
              <BusinessContactForm />
            </div>
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-semibold mb-4'>Talk to our team</h3>
              <p className='text-gray-700 mb-6'>We usually respond within one business day.</p>
              <div className='space-y-3 text-gray-700'>
                <p><span className='font-medium'>Phone:</span> <a href='tel:+528119161086' className='hover:text-primary'>+52 811916 1086</a></p>
                <p><span className='font-medium'>Email:</span> <a href='mailto:jmsanchez@dasza.com' className='hover:text-primary'>jmsanchez@dasza.com</a></p>
                <p>
                  <span className='font-medium'>WhatsApp:</span> <a href='https://wa.link/5trkad' target='_blank' rel='noopener noreferrer' className='hover:text-primary'>Chat with us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
