import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DLT Logistics</h3>
            <p className="text-gray-600 text-sm">
              The last‑mile and domestic distribution arm of the Dasza group, delivering B2B, B2C and omnichannel parcels across México&apos;s main metropolitan areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-600 hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Last-Mile Delivery</li>
              <li className="text-gray-600">Same-Day Delivery</li>
              <li className="text-gray-600">Cross-Dock & Break-Bulk</li>
              <li className="text-gray-600">E-commerce Fulfillment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                <strong>Head Office:</strong><br />
                Shared campus with Dasza CEDIS – Apodaca, N.L.
              </li>
              <li className="text-gray-600">
                <strong>Phone:</strong><br />
                <a href="tel:+528183682483" className="hover:text-primary">
                  +52 (81) 8368 2483 ext. 400
                </a>
              </li>
              <li className="text-gray-600">
                <strong>Email:</strong><br />
                <a href="mailto:dltmexico00@gmail.com" className="hover:text-primary">
                  dltmexico00@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} DLT Last‑Mile & Distribution S.A. de C.V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 