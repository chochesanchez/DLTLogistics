'use client'

import React from 'react'
import Image from 'next/image'
import { BuildingOffice2Icon, ArrowsPointingOutIcon, ClockIcon, ShieldCheckIcon, CubeIcon } from '@heroicons/react/24/outline'

export default function StoragePage() {
  const features = [
    {
      title: 'Flexible & Scalable Spaces',
      description: 'From industrial racks to open areas for palletized or high-volume cargo. Space adjusts to your business growth stage.',
      icon: ArrowsPointingOutIcon
    },
    {
      title: 'Real-Time Inventory Control',
      description: 'WMS systems for monitoring inputs, outputs, stock levels, lots, expiration dates, and locations, with on-demand reporting.',
      icon: CubeIcon
    },
    {
      title: 'Scheduled Operations',
      description: 'Merchandise reception with detailed inspection, counting, and registration. Coordinated deliveries by calendar or on-demand.',
      icon: ClockIcon
    },
    {
      title: 'Product Type Storage',
      description: 'Separation and classification of merchandise: raw materials, e-commerce, retail, kits, promotional materials, or spare parts.',
      icon: BuildingOffice2Icon
    },
    {
      title: '24/7 Security',
      description: 'Continuous surveillance, restricted access, alarms, and protection protocols for sensitive or high-value merchandise.',
      icon: ShieldCheckIcon
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/Intelligent Stereoscopic Storage Frame.png"
          alt="Storage Solutions"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-white">Storage Solutions</h1>
            <p className="text-lg text-gray-200">
              At DLT Logistics, we offer efficient, secure, and customized storage solutions for each client&apos;s specific needs. Our facilities are strategically located in Apodaca, Nuevo León, a key industrial zone for logistics in northern Mexico.
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
              Why Choose Our Storage Solutions?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">📍 Strategic Location</h3>
                <p className="text-gray-600">
                  Our facilities in Apodaca provide easy access to major highways and industrial areas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔒 Enhanced Security</h3>
                <p className="text-gray-600">
                  Each loading and unloading area is equipped with cameras focused directly on the trailer space, allowing us to record and monitor every movement during merchandise reception or collection in real-time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">💻 Advanced Systems</h3>
                <p className="text-gray-600">
                  Modern WMS technology for precise inventory control and real-time visibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔄 Operational Flexibility</h3>
                <p className="text-gray-600">
                  Adaptable storage solutions for different product types and handling requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}