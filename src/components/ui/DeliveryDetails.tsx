import React from 'react'
import { PhoneIcon, MapPinIcon, TruckIcon, UserIcon } from '@heroicons/react/24/outline'

interface DeliveryDetailsProps {
  details: {
    trackingNumber: string
    origin: string
    destination: string
    service: string
    courier: {
      name: string
      phone: string
    }
  }
}

export function DeliveryDetails({ details }: DeliveryDetailsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>
      
      <div className="space-y-4">
        {/* Tracking Number */}
        <div className="flex items-start gap-3">
          <TruckIcon className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Tracking Number</div>
            <div className="font-medium">{details.trackingNumber}</div>
          </div>
        </div>

        {/* Origin */}
        <div className="flex items-start gap-3">
          <MapPinIcon className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <div className="text-sm text-gray-600">From</div>
            <div className="font-medium">{details.origin}</div>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start gap-3">
          <MapPinIcon className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <div className="text-sm text-gray-600">To</div>
            <div className="font-medium">{details.destination}</div>
          </div>
        </div>

        {/* Service Type */}
        <div className="flex items-start gap-3">
          <TruckIcon className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Service</div>
            <div className="font-medium">{details.service}</div>
          </div>
        </div>

        {/* Courier Info */}
        <div className="mt-6 pt-6 border-t">
          <div className="text-lg font-medium mb-4">Courier Information</div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <UserIcon className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="text-sm text-gray-600">Name</div>
                <div className="font-medium">{details.courier.name}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="text-sm text-gray-600">Phone</div>
                <a 
                  href={`tel:${details.courier.phone}`}
                  className="font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {details.courier.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 