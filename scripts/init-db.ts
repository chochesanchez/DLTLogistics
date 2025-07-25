import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Create a sample courier
    const courier = await prisma.courier.create({
      data: {
        name: 'Carlos Rodriguez',
        phone: '+52 55 1234 5678',
        email: 'carlos.r@dlt.mx'
      }
    })

    // Create a sample package
    const package_ = await prisma.package.create({
      data: {
        trackingNumber: 'DLT123456789',
        status: 'in_transit',
        origin: 'Monterrey Hub',
        destination: 'San Pedro Garza García',
        service: 'Same-Day Delivery',
        estimatedDelivery: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
        courierId: courier.id,
        statusHistory: {
          create: [
            {
              status: 'order_received',
              location: 'Monterrey Hub',
              timestamp: new Date(Date.now() - 60 * 60 * 1000) // 1 hour ago
            },
            {
              status: 'in_transit',
              location: 'En route to destination',
              timestamp: new Date()
            }
          ]
        }
      }
    })

    // Create a sample contact form submission
    const contact = await prisma.contact.create({
      data: {
        name: 'Juan Pérez',
        company: 'E-commerce MX',
        email: 'juan@ecommercemx.com',
        phone: '+52 81 9876 5432',
        message: 'Interested in your same-day delivery service for our online store.',
        status: 'new'
      }
    })

    console.log('Sample data created successfully:', {
      courier: courier.id,
      package: package_.id,
      contact: contact.id
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main() 