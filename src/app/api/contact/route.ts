import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

    // Send notification via WhatsApp to admin (temporarily disabled)
    console.log('New contact form submission:', {
      name: data.name,
      company: data.company || 'N/A',
      email: data.email,
      phone: data.phone || 'N/A',
      message: data.message
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