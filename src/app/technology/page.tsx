import React from 'react'
import {
  DevicePhoneMobileIcon,
  MapIcon,
  BellAlertIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'VeloxGo™ Driver App',
    description: 'Native mobile app for iOS and Android with offline support, route optimization, and real-time updates.',
    icon: DevicePhoneMobileIcon,
    details: [
      'Turn-by-turn navigation',
      'Barcode scanning',
      'Photo & signature capture',
      'Offline queue synchronization'
    ]
  },
  {
    title: 'Real-Time Tracking',
    description: 'Live package tracking with precise ETA calculations and automated notifications.',
    icon: MapIcon,
    details: [
      'GPS location updates',
      'Dynamic ETA calculation',
      'Geofencing alerts',
      'Interactive map view'
    ]
  },
  {
    title: 'Smart Notifications',
    description: 'Automated WhatsApp and SMS updates keep customers informed throughout the delivery process.',
    icon: BellAlertIcon,
    details: [
      'Delivery status updates',
      'ETA notifications',
      'Proof of delivery',
      'Rating requests'
    ]
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive reporting and analytics for operational insights and performance monitoring.',
    icon: ChartBarIcon,
    details: [
      'Real-time KPIs',
      'Performance metrics',
      'Customer satisfaction',
      'Route efficiency'
    ]
  },
  {
    title: 'API Integration',
    description: 'RESTful APIs and webhooks for seamless integration with your existing systems.',
    icon: CloudArrowUpIcon,
    details: [
      'Order creation',
      'Status updates',
      'Tracking events',
      'Custom webhooks'
    ]
  },
  {
    title: 'Smart Infrastructure',
    description: 'Cloud-native architecture ensuring high availability and scalability.',
    icon: CpuChipIcon,
    details: [
      'Auto-scaling',
      'Multi-region deployment',
      'Data redundancy',
      'Disaster recovery'
    ]
  }
]

export default function TechnologyPage() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">VeloxGo™ Platform</h1>
          <p className="text-xl text-gray-600">
            Our proprietary technology platform powering efficient, transparent,
            and sustainable last-mile delivery operations.
          </p>
        </div>

        {/* Platform Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Integrate?
            </h2>
            <p className="text-gray-600 mb-8">
              Our developer-friendly APIs and comprehensive documentation make it easy
              to integrate VeloxGo™ with your existing systems.
            </p>
            <div className="space-x-4">
              <a
                href="/api-docs"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Documentation
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Request API Access
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98.9%</div>
            <div className="text-gray-600">Platform Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              &lt; 100ms
            </div>
            <div className="text-gray-600">Average API Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25k+</div>
            <div className="text-gray-600">Daily Deliveries</div>
          </div>
        </div>
      </div>
    </div>
  )
} 