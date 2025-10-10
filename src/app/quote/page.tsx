'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function QuotePage() {
  const router = useRouter()
  interface FormData {
    name: string;
    business: string;
    email: string;
    address: string;
    phone: string;
    productType: string;
    quantity: string;
    frequency: string;
    destinations: string;
    storage: string;
    transportConditions: string[];
    deliveryTiming: string;
    additionalServices: string[];
    comments: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    email: '',
    address: '',
    phone: '',
    productType: '',
    quantity: '',
    frequency: 'one-time',
    destinations: '',
    storage: 'no',
    transportConditions: [],
    deliveryTiming: 'flexible',
    additionalServices: [],
    comments: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload: Record<string, unknown> = {
      formType: 'quote',
      name: formData.name,
      company: formData.business,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      message: formData.comments,
      product: formData.productType,
      quantity: formData.quantity,
      frequency: formData.frequency,
      destinations: formData.destinations,
      timing: formData.deliveryTiming,
      storage: formData.storage,
      transportConditions: formData.transportConditions,
      additionalServices: formData.additionalServices,
    }
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      // no-op; we still take user to thank you page
    }
    router.push('/quote/thank-you')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    if (name === 'transportConditions' || name === 'additionalServices') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] as string[]), value]
          : (prev[name] as string[]).filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Distribution Services Quote Request</h1>
          <p className="text-gray-600 text-center mb-8">
            Please complete the following fields to receive a personalized quote for your distribution needs. We will contact you as soon as possible with the details.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Basic Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business/Company *</label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Product Information</h2>
              
              <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700">Product Type *</label>
                <input
                  type="text"
                  id="productType"
                  name="productType"
                  required
                  placeholder="e.g., Electronics, food, textiles, etc."
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Product Quantity *</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  required
                  placeholder="e.g., Number of units, total weight, volume, etc."
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Service Requirements */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Service Requirements</h2>
              
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">Service Frequency *</label>
                <select
                  id="frequency"
                  name="frequency"
                  required
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="one-time">One-time</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="destinations" className="block text-sm font-medium text-gray-700">Shipping Destinations *</label>
                <textarea
                  id="destinations"
                  name="destinations"
                  required
                  placeholder="e.g., Cities, regions, or specific locations"
                  value={formData.destinations}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="storage" className="block text-sm font-medium text-gray-700">Storage Requirements *</label>
                <select
                  id="storage"
                  name="storage"
                  required
                  value={formData.storage}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transport Conditions *</label>
                <div className="space-y-2">
                  {['fragile', 'hazardous', 'none', 'other'].map((condition) => (
                    <div key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`transport-${condition}`}
                        name="transportConditions"
                        value={condition}
                        checked={formData.transportConditions.includes(condition)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`transport-${condition}`} className="ml-2 block text-sm text-gray-700">
                        {condition.charAt(0).toUpperCase() + condition.slice(1)} handling
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="deliveryTiming" className="block text-sm font-medium text-gray-700">Delivery Timing *</label>
                <select
                  id="deliveryTiming"
                  name="deliveryTiming"
                  required
                  value={formData.deliveryTiming}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="24h">24-hour delivery</option>
                  <option value="48h">48-hour delivery</option>
                  <option value="3-5d">3-5 days delivery</option>
                  <option value="1w">1 week delivery</option>
                  <option value="flexible">Flexible (coordinate with client)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Services</label>
                <div className="space-y-2">
                  {['tracking', 'packaging', 'insurance', 'other'].map((service) => (
                    <div key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`service-${service}`}
                        name="additionalServices"
                        value={service}
                        checked={formData.additionalServices.includes(service)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`service-${service}`} className="ml-2 block text-sm text-gray-700">
                        {service === 'tracking' ? 'Real-time tracking'
                          : service === 'packaging' ? 'Additional packaging'
                          : service === 'insurance' ? 'Transport insurance'
                          : 'Other'}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Provide any additional information relevant to your quote request"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}