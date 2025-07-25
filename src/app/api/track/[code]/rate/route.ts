import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(
  request: Request,
  { params }: { params: { code: string } }
) {
  try {
    const { stars, comment } = await request.json()

    // Validate input
    if (!stars || stars < 1 || stars > 5) {
      return NextResponse.json(
        { error: 'Invalid rating' },
        { status: 400 }
      )
    }

    // Find the package
    const package_ = await prisma.package.findUnique({
      where: {
        trackingNumber: params.code
      },
      include: {
        rating: true
      }
    })

    if (!package_) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      )
    }

    // Create or update rating
    const rating = await prisma.rating.upsert({
      where: {
        packageId: package_.id
      },
      update: {
        stars,
        comment
      },
      create: {
        stars,
        comment,
        packageId: package_.id
      }
    })

    // If rating is less than 4 stars, create a support ticket (placeholder)
    if (stars < 4) {
      // TODO: Integrate with support ticket system
      console.log('Low rating received, creating support ticket...')
    }

    return NextResponse.json(rating)
  } catch (error) {
    console.error('Error submitting rating:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 