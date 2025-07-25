import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/40">
          {/* Add video background here later */}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From Warehouse to Doorstep
            <span className="block text-2xl md:text-4xl mt-2">Fast. Visible. Green.</span>
          </h1>
          
          {/* Tracking Input */}
          <div className="w-full max-w-2xl mt-8">
            <form action="/track" className="flex gap-2">
              <input 
                type="text"
                name="trackingCode"
                placeholder="Enter your tracking number"
                className="flex-1 px-6 py-4 rounded-lg text-neutral-dark"
                required
              />
              <button 
                type="submit"
                className="btn-secondary flex items-center gap-2 px-8"
              >
                Track
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-4xl font-bold">99.7%</div>
              <div className="text-sm opacity-80">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.8/5</div>
              <div className="text-sm opacity-80">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold">9</div>
              <div className="text-sm opacity-80">Metro Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Last-Mile Delivery',
                description: 'Same-day and next-day delivery for parcels up to 100kg.',
                icon: '🚚'
              },
              {
                title: 'Real-time Tracking',
                description: 'Track your shipments with live updates and proof of delivery.',
                icon: '📍'
              },
              {
                title: 'Green Commitment',
                description: 'Route optimization and EV pilots for sustainable delivery.',
                icon: '🌱'
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-primary transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 