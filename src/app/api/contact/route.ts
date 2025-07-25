import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import twilio from 'twilio'

const prisma = new PrismaClient()
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Store in database
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        company: data.company || '',
        email: data.email,
        phone: data.phone || '',
        message: data.message,
      }
    })

    // Send notification via WhatsApp to admin
    await client.messages.create({
      body: `New contact form submission:
Name: ${data.name}
Company: ${data.company || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Message: ${data.message}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${process.env.ADMIN_WHATSAPP_NUMBER}`
    })

    // Send confirmation email (placeholder)
    // TODO: Implement email confirmation using SendGrid

    return NextResponse.json({
      message: 'Contact form submitted successfully',
      contact
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 