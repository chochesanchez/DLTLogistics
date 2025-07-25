import React from 'react'
import { MapComponent } from '@/components/ui/MapComponent'
import { DeliveryStatus } from '@/components/ui/DeliveryStatus'
import { DeliveryDetails } from '@/components/ui/DeliveryDetails'

type Props = {
  params: {
    code: string
  }
}

export default function TrackingPage({ params }: Props) {
  // In a real app, we would fetch the tracking data here
  const trackingData = {
    status: 'in_transit',
    estimatedDelivery: '2024-02-20T14:30:00',
    currentLocation: {
      lat: 25.6866,
      lng: -100.3161
    },
    statusHistory: [
      {
        status: 'order_received',
        timestamp: '2024-02-19T10:00:00',
        location: 'Monterrey Hub'
      },
      {
        status: 'in_transit',
        timestamp: '2024-02-19T11:30:00',
        location: 'En route to destination'
      }
    ],
    deliveryDetails: {
      trackingNumber: params.code,
      origin: 'Monterrey Hub',
      destination: 'San Pedro Garza García',
      service: 'Same-Day Delivery',
      courier: {
        name: 'Carlos R.',
        phone: '+52 55 1234 5678'
      }
    }
  }

  return (
    <div className="min-h-screen bg-neutral-light p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">
          Tracking Number: {params.code}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-sm p-4 h-[400px]">
            <MapComponent 
              center={trackingData.currentLocation}
              zoom={12}
            />
          </div>

          {/* Status Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <DeliveryStatus 
                status={trackingData.status}
                estimatedDelivery={trackingData.estimatedDelivery}
                statusHistory={trackingData.statusHistory}
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <DeliveryDetails 
                details={trackingData.deliveryDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 