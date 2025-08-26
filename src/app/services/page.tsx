import PageHeader from '@/components/ui/PageHeader'
import React from 'react'
import Link from 'next/link'
import { TruckIcon, ClockIcon, BuildingStorefrontIcon, ArrowPathIcon, CubeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Last-Mile Parcel Delivery',
    description: 'Same-day (≤ 50 km) and next-day (≤ 300 km) delivery for packages up to 100 kg.',
    icon: TruckIcon,
    features: [
      'Real-time tracking',
      'Proof of delivery with photo',
      'WhatsApp notifications',
      'Customer rating system'
    ]
  },
  {
    title: 'LTL & Milk-Run Distribution',
    description: 'Retail DC replenishment and store door-to-door delivery services.',
    icon: ClockIcon,
    features: [
      'Scheduled deliveries',
      'Route optimization',
      'Temperature monitoring',
      'Multi-stop efficiency'
    ]
  },
  {
    title: 'Cross-Dock & Break-Bulk',
    description: '2–6 hour dwell time with maximum 48-hour storage.',
    icon: BuildingStorefrontIcon,
    features: [
      'Quick turnaround',
      'Inventory visibility',
      'Load consolidation',
      'Flexible scheduling'
    ]
  },
  {
    title: 'E-commerce Fulfillment',
    description: 'Pick/pack services in Dasza CEDIS with nightly line-haul to city hubs.',
    icon: CubeIcon,
    features: [
      'Inventory management',
      'Order processing',
      'Returns handling',
      'API integration'
    ]
  },
  {
    title: 'Managed Returns & Refurb',
    description: 'Complete reverse logistics solution including inspection and triage.',
    icon: ArrowPathIcon,
    features: [
      'Return authorization',
      'Quality inspection',
      'Restock processing',
      'Disposal management'
    ]
  },
  {
    title: 'White-Glove Services',
    description: 'Premium delivery service including installation and debris removal.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Inside delivery',
      'Assembly service',
      'Packaging removal',
      'Site cleanup'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHeader title="Our Services" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">What we do</h2>
          <p className="text-xl text-gray-600">
            Comprehensive logistics solutions tailored to your business needs, from last-mile delivery to complete supply chain management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-gray-600">
                {service.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/quote" className="btn-primary inline-block">Get Quote</Link>
        </div>
      </div>
    </div>
  )
}

