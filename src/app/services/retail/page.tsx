'use client'

import React from 'react'
import Image from 'next/image'
import { BuildingStorefrontIcon, TruckIcon, QrCodeIcon, ClipboardDocumentCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function RetailPage() {
  const features = [
    {
      title: 'Specialized Retail Storage',
      description: 'Inventory organization according to each commercial client\'s requirements, with lot control, expiration dates, and specific labeling.',
      icon: BuildingStorefrontIcon
    },
    {
      title: 'Store & DC Distribution',
      description: 'Coordinated deliveries to chains like Walmart, Office Depot, and BBVA, meeting delivery windows and logistics requirements.',
      icon: TruckIcon
    },
    {
      title: 'Packaging & Display Assembly',
      description: 'Product preparation according to channel specifications: promotional kits, cases, displays, barcode labeling, and retailer-specific requirements.',
      icon: QrCodeIcon
    },
    {
      title: 'Order Management',
      description: 'Proactive monitoring and follow-up to ensure smooth commercial commitments.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed reporting on delivery performance, inventory levels, and compliance metrics.',
      icon: ChartBarIcon
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/Best Logistics Company in India.jpg"
          alt="Retail Logistics"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-white">Retail Logistics Solutions</h1>
            <p className="text-lg text-gray-200">
              At DLT Logistics, we drive the logistics operations for brands selling through physical stores, retail chains, bank branches, and specialized points of sale. We understand retail channel challenges: tight schedules, precise deliveries, regulatory compliance, and impeccable product presentation.
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
              Why Choose Our Retail Solutions?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">🏢 Retail Expertise</h3>
                <p className="text-gray-600">
                  Years of experience serving major retail chains and understanding their unique requirements and processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">📦 Value-Added Services</h3>
                <p className="text-gray-600">
                  Complete solution including storage, preparation, distribution, and reverse logistics for retail operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔄 Flexible Operations</h3>
                <p className="text-gray-600">
                  Adaptable to different retail formats, from large chains to specialized stores and banking networks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">📊 Performance Tracking</h3>
                <p className="text-gray-600">
                  Comprehensive reporting and KPI monitoring to ensure service level agreements are met consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}