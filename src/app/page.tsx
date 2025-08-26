'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
 

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
          src='/images/White Truck Scenic Highway.png'
          alt='DLT Logistics Hero'
          fill
          style={{ objectFit: 'cover' }}
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

      {/* KPI section separated for cleaner composition */}
      <div className='bg-white'>
        <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-3 gap-6 text-center'>
          <Reveal>
            <div className='text-4xl font-bold text-[#FFCC00]'>97.9%</div>
            <div className='mt-1 text-gray-700'>On-Time Delivery</div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className='text-4xl font-bold text-[#FFCC00]'>4.8/5</div>
            <div className='mt-1 text-gray-700'>Customer Rating</div>
          </Reveal>
          <Reveal delayMs={200}>
            <div className='text-4xl font-bold text-[#FFCC00]'>9</div>
            <div className='mt-1 text-gray-700'>Metro Areas</div>
          </Reveal>
        </div>
      </div>

      {/* Services Section */}
      <div className='py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Reveal as='h2' className='text-4xl font-bold text-center mb-16'>Our Services</Reveal>
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
          <Reveal as='h2' className='text-4xl font-bold text-center mb-16'>Trusted By Industry Leaders</Reveal>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
            {[
              // First row
              { name: 'BBVA', image: '/images/partners/bbvalogo.png' },
              { name: 'Office Depot', image: '/images/partners/Office Depot Logo.webp' },
              { name: 'Walmart', image: '/images/partners/Walmart Logo 2008.png' },
              { name: 'Soriana', image: '/images/partners/Soriana Logo.webp' },
              // Second row
              { name: 'Rockwell', image: '/images/partners/Rockwell Automation Logo.jpg' },
              { name: 'Embraco', image: '/images/partners/Embraco Logo.png' },
              { name: 'Sanmina', image: '/images/partners/sanminalogo.png' },
              { name: 'Celestica', image: '/images/partners/Celestica Logo.png' }
            ].map((partner, index) => (
              <div key={index} className='bg-white shadow-lg rounded-lg p-6 flex items-center justify-center'>
                <div className='relative w-full h-20'>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className='partner-logo'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-24 bg-[#FFCC00]'>
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
    </div>
  )
}
