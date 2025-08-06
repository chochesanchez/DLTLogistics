'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FulfillmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/PrimeTime Global Logistics Frame.png"
          alt="Fulfillment Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-white">Fulfillment Services</h1>
            <p className="text-lg text-gray-200">
              At DLT Logistics, we understand that the success of your business depends on an agile, accurate, and customer-centric supply chain. That&apos;s why we offer comprehensive fulfillment solutions designed specifically for entrepreneurs, online stores, and e-commerce brands looking to scale their operations without logistical complications.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-[#FFCC00]">What does our Fulfillment service include?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">🔹 Inventory Receiving</h3>
                <p className="text-gray-600">We review and record every product that arrives at our warehouse using standardized processes to ensure accuracy and traceability from the start.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔹 Smart Storage</h3>
                <p className="text-gray-600">We store your products in an organized and secure manner in our strategically located facilities in Monterrey, optimizing space and delivery times.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔹 Order Preparation (Pick & Pack)</h3>
                <p className="text-gray-600">We assemble each order with care and precision, following your specifications. We can include inserts, customized packaging, or promotional kits.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔹 Packaging and Shipping</h3>
                <p className="text-gray-600">
                  We prepare each order with secure and professional packaging, taking care of every detail so it arrives in perfect condition. We coordinate shipments through the best courier companies in the country.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• We deliver directly to logistics centers located at the Monterrey airport, allowing us to expedite the dispatch of packages to any part of the country.</li>
                  <li>• We also make direct deliveries with our own trucks to end customers within the Monterrey metropolitan area, providing a flexible, fast, and reliable service.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🔹 Returns Management</h3>
                <p className="text-gray-600">We facilitate an efficient and professional process for handling returns and exchanges, improving the end-customer experience.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-[#FFCC00]">Why choose our Fulfillment?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>No minimum volume requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Integration with your online store (Shopify, WooCommerce, Amazon, Mercado Libre, etc.)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Own deliveries with vans in Monterrey</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Direct drop-off at parcel services (including airport logistics centers)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Personalized service and real-time tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Reduction in operating costs and delivery times</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFCC00]">✅</span>
                <span>Service in Monterrey and shipping throughout Mexico</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FFCC00] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to optimize your fulfillment operations?</h2>
          <p className="mb-8">Get in touch with our team for a customized solution.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white px-8 py-4 rounded-lg text-[#FFCC00] font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
