import { NextRequest } from 'next/server'
import { GET } from '../track/[code]/route'

// Mock Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    package: {
      findUnique: jest.fn().mockImplementation(({ where }) => {
        if (where.trackingNumber === 'DLT123456789') {
          return Promise.resolve({
            id: '1',
            trackingNumber: 'DLT123456789',
            status: 'in_transit',
            origin: 'Monterrey Hub',
            destination: 'San Pedro Garza García',
            service: 'Same-Day Delivery',
            estimatedDelivery: new Date(),
            courier: {
              name: 'Carlos R.',
              phone: '+52 55 1234 5678'
            },
            statusHistory: [
              {
                status: 'order_received',
                location: 'Monterrey Hub',
                timestamp: new Date()
              }
            ]
          })
        }
        return Promise.resolve(null)
      })
    }
  }))
}))

describe('/api/track/[code]', () => {
  it('returns package data for valid tracking number', async () => {
    const request = new NextRequest('http://localhost:3000/api/track/DLT123456789')
    const response = await GET(request, { params: { code: 'DLT123456789' } })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.trackingNumber).toBe('DLT123456789')
    expect(data.status).toBe('in_transit')
  })

  it('returns 404 for invalid tracking number', async () => {
    const request = new NextRequest('http://localhost:3000/api/track/INVALID')
    const response = await GET(request, { params: { code: 'INVALID' } })
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data.error).toBe('Package not found')
  })
}) 