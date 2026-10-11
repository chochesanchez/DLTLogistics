'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ThankYouPage() {
  return (
    <div className="bg-dlt-paper py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-dlt-line p-8 sm:p-12">
          <CheckCircleIcon className="h-14 w-14 text-dlt-ink mb-6" />
          <h1 className="font-display text-5xl font-extrabold leading-none mb-4">Quote request sent</h1>
          <p className="text-gray-600 mb-8">
            Your quote request has been successfully submitted. Our team will review your requirements and contact you shortly with a personalized quote.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              If you have any immediate questions, please don&apos;t hesitate to contact us:
            </p>
            <div className="text-gray-600">
              <p>Phone: <a href="tel:+528119161086" className="font-semibold underline decoration-dlt-yellow decoration-2 underline-offset-4">+52 81 1916 1086</a></p>
              <p>Email: <a href="mailto:jmsanchez@dasza.com" className="font-semibold underline decoration-dlt-yellow decoration-2 underline-offset-4">jmsanchez@dasza.com</a></p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="btn-primary"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}