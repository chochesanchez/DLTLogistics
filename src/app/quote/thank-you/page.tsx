'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8">
            Your quote request has been successfully submitted. Our team will review your requirements and contact you shortly with a personalized quote.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              If you have any immediate questions, please don&apos;t hesitate to contact us:
            </p>
            <div className="text-gray-600">
              <p>Phone: <a href="tel:+528183682483" className="text-primary hover:underline">+52 (81) 8368 2483 ext. 400</a></p>
              <p>Email: <a href="mailto:dltmexico00@gmail.com" className="text-primary hover:underline">dltmexico00@gmail.com</a></p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}