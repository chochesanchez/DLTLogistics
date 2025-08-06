'use client'

import React from 'react'
import Image from 'next/image'
import { TruckIcon, ClockIcon, MapPinIcon, ArrowPathIcon, BellAlertIcon } from '@heroicons/react/24/outline'

export default function LastMilePage() {
  const features = [
    {
      title: 'Direct Deliveries with Own Fleet',
      description: 'Local deliveries in Monterrey and metropolitan area with trained personnel and optimized routes.',
      icon: TruckIcon
    },
    {
      title: 'Flexible Delivery Points',
      description: 'Deliveries to homes, offices, collection points, or commercial areas - adapting routes to your customers\' needs.',
      icon: MapPinIcon
    },
    {
      title: 'Real-Time Tracking',
      description: 'Full traceability from our warehouse to final delivery, building trust and transparency.',
      icon: BellAlertIcon
    },
    {
      title: 'Same-Day Delivery',
      description: 'Fast delivery service for local orders to enhance your customers\' shopping experience.',
      icon: ClockIcon
    },
    {
      title: 'Returns & Exchange Management',
      description: 'Direct product collection from customer locations, ensuring smooth after-sales service.',
      icon: ArrowPathIcon
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/Cargo Firm Depo Pic.jpg"
          alt="Last Mile Delivery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-white">Last Mile Delivery</h1>
            <p className="text-lg text-gray-200">
              At DLT Logistics, we understand that the customer experience doesn&apos;t end until the order is in their hands. That&apos;s why we offer an efficient, punctual, and reliable last-mile delivery service - the final journey a product takes from our distribution center to the end customer&apos;s location. This stage is critical for ensuring buyer satisfaction, optimizing delivery times, and reducing incidents.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Our Last Mile Service?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">🚐 Professional Fleet</h3>
                <p className="text-gray-600">
                  Our dedicated fleet of delivery vehicles and trained personnel ensure your products reach their destination safely and on time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">📍 Strategic Coverage</h3>
                <p className="text-gray-600">
                  Comprehensive coverage in Monterrey and its metropolitan area, with optimized routes for maximum efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">📱 Digital Experience</h3>
                <p className="text-gray-600">
                  Real-time tracking, instant notifications, and digital proof of delivery for a modern delivery experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">⭐ Quality Service</h3>
                <p className="text-gray-600">
                  Professional, uniformed staff trained in customer service and handling procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}