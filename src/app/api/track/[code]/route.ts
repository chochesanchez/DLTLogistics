import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  try {
    const package_ = await prisma.package.findUnique({
      where: {
        trackingNumber: params.code
      },
      include: {
        courier: true,
        statusHistory: {
          orderBy: {
            timestamp: 'desc'
          }
        },
        rating: true
      }
    })

    if (!package_) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(package_)
  } catch (error) {
    console.error('Error fetching package:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 