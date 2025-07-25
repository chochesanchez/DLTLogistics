import React from 'react'
import { CheckCircleIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/solid'

interface StatusHistoryItem {
  status: string
  timestamp: string
  location: string
}

interface DeliveryStatusProps {
  status: string
  estimatedDelivery: string
  statusHistory: StatusHistoryItem[]
}

const statusConfig = {
  order_received: {
    icon: ClockIcon,
    label: 'Order Received',
    color: 'text-blue-500'
  },
  in_transit: {
    icon: TruckIcon,
    label: 'In Transit',
    color: 'text-yellow-500'
  },
  delivered: {
    icon: CheckCircleIcon,
    label: 'Delivered',
    color: 'text-green-500'
  }
}

export function DeliveryStatus({ status, estimatedDelivery, statusHistory }: DeliveryStatusProps) {
  const estimatedDate = new Date(estimatedDelivery)
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Delivery Status</h2>
      
      {/* Current Status */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {React.createElement(statusConfig[status as keyof typeof statusConfig].icon, {
            className: `w-6 h-6 ${statusConfig[status as keyof typeof statusConfig].color}`
          })}
          <span className="font-medium">
            {statusConfig[status as keyof typeof statusConfig].label}
          </span>
        </div>
        
        <div className="text-sm text-gray-600">
          Estimated delivery: {estimatedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {statusHistory.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative">
              <div className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-primary' : 'bg-gray-300'
              }`} />
              {index !== statusHistory.length - 1 && (
                <div className="absolute top-3 left-1.5 w-0.5 h-full -ml-px bg-gray-300" />
              )}
            </div>
            
            <div>
              <div className="font-medium">
                {statusConfig[item.status as keyof typeof statusConfig].label}
              </div>
              <div className="text-sm text-gray-600">
                {new Date(item.timestamp).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="text-sm text-gray-600">
                {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 