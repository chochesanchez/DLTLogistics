import PageHeader from '@/components/ui/PageHeader'
import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import BusinessContactForm from '@/components/ui/BusinessContactForm'

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeader title="Contact" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <BusinessContactForm />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      Shared campus with Dasza CEDIS<br />
                      Apodaca, N.L., México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+528119161086" className="hover:text-primary">
                        +52 811916 1086
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:jmsanchez@dasza.com" className="hover:text-primary">
                        jmsanchez@dasza.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-2">Operating Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              {/* Location (Google Maps) */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">Oatey SCS</p>
                  <p>760A, Av. Miguel Alemán, El Milagro, 66634 Cdad. Apodaca, N.L.</p>
                  <p>Plus code: QR53+XP Cdad. Apodaca, Nuevo León</p>
                  <p>
                    Phone: <a className="hover:text-primary" href="tel:+528119161086">+52 811916 1086</a>
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://maps.app.goo.gl/rijzrzc3vV5gdQ1X6?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 