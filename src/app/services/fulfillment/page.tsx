'use client'

import React from 'react'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'
import { CubeIcon, TruckIcon, ClipboardDocumentCheckIcon, ArrowPathIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function FulfillmentPage() {
  const features = [
    {
      title: 'Inventory Receiving & Management',
      description: 'Standardized processes for accurate product reception and tracking with complete traceability.',
      icon: CubeIcon
    },
    {
      title: 'Order Processing & Preparation',
      description: 'Careful assembly of orders with custom packaging options and promotional materials.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: 'Smart Storage Solutions',
      description: 'Organized and secure storage in strategic locations for optimized delivery times.',
      icon: ShoppingCartIcon
    },
    {
      title: 'Flexible Shipping Options',
      description: 'Direct deliveries and courier service coordination across Mexico.',
      icon: TruckIcon
    },
    {
      title: 'Returns Management',
      description: 'Efficient handling of returns and exchanges to enhance customer satisfaction.',
      icon: ArrowPathIcon
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Fulfillment Services"
        image="/images/PrimeTime Global Logistics Frame.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Fulfillment' }
        ]}
      />

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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Fulfillment Service?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  No minimum volume requirements and flexible scaling options to match your business growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">E-commerce Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with major platforms including Shopify, WooCommerce, Amazon, and Mercado Libre.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Real-time Visibility</h3>
                <p className="text-gray-600">
                  Complete transparency with real-time tracking and inventory management systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-600">
                  Reduce operational costs while improving delivery times and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#FFCC00] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to optimize your fulfillment operations?</h2>
          <p className="mb-8">Get in touch with our team for a customized solution.</p>
          <Link
            href="/quote"
            className="inline-block bg-white px-8 py-4 rounded-lg text-[#FFCC00] font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
