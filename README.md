# DLT Logistics Platform

## Overview
DLT Logistics is a modern web application built for DLT Last-Mile & Distribution S.A. de C.V., providing logistics and warehousing solutions across Mexico's main metropolitan areas. The platform offers real-time tracking, warehouse management, and last-mile delivery services.

## Documentation
- See `docs/ARCHITECTURE.md` for architecture and structure.
- See `docs/REPLICATION_PROMPT.md` to replicate the same design in a new project.

## Tech Stack

### Frontend
- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI
- **Icons**: Heroicons
- **Maps Integration**: Google Maps API

### Backend
- **Database**: MongoDB with Prisma ORM
- **API**: REST API built with Next.js API routes
- **Real-time Updates**: Socket.IO
- **Authentication**: Next.js built-in auth
- **Notifications**: Twilio (WhatsApp/SMS)

### DevOps
- **Containerization**: Docker
- **Version Control**: Git
- **Development Environment**: Node.js

## Core Features

### 1. Package Tracking System
- Real-time tracking with live updates
- Interactive map visualization
- Status history and timeline
- Proof of delivery system
- WhatsApp/SMS notifications

### 2. Warehouse Management
- Inventory tracking and management
- Storage space optimization
- Cross-dock operations
- Break-bulk services
- Real-time stock updates

### 3. Last-Mile Delivery
- Same-day delivery service
- Next-day delivery options
- Route optimization
- EV pilot program integration
- Driver mobile app integration

### 4. E-commerce Fulfillment
- Order processing automation
- Inventory synchronization
- Shipping and handling
- Returns processing
- Multi-channel integration

## Project Structure

```
WEBPAGE/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services pages
│   │   ├── technology/        # Technology pages
│   │   └── track/             # Tracking functionality
│   ├── components/
│   │   ├── shared/            # Shared components
│   │   └── ui/                # UI components
│   ├── lib/                   # Utility functions
│   ├── styles/                # Global styles
│   └── types/                 # TypeScript types
├── prisma/                    # Database schema
├── public/                    # Static assets
└── scripts/                   # Utility scripts
```

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- MongoDB 6.x or higher
- Docker (optional)

### Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd WEBPAGE
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

Required environment variables:
\`\`\`env
# Database
DATABASE_URL="mongodb://localhost:27017/dlt"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_key"

# Twilio
TWILIO_ACCOUNT_SID="your_sid"
TWILIO_AUTH_TOKEN="your_token"
TWILIO_PHONE_NUMBER="+1234567890"
TWILIO_WHATSAPP_NUMBER="+1234567890"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="DLT Logistics"
\`\`\`

4. Configure MongoDB:
\`\`\`bash
# Start MongoDB as a replica set
mongod --config mongod.conf

# Initialize the replica set
mongosh --eval "rs.initiate()"
\`\`\`

5. Initialize the database:
\`\`\`bash
npm run db:push
npm run db:init
\`\`\`

6. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

### Docker Setup

1. Build and start containers:
\`\`\`bash
docker-compose up --build
\`\`\`

## API Documentation

### Track Package
\`\`\`typescript
GET /api/track/[code]
Response: {
  status: string;
  estimatedDelivery: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  statusHistory: Array<{
    status: string;
    timestamp: string;
    location: string;
  }>;
}
\`\`\`

### Contact Form
\`\`\`typescript
POST /api/contact
Body: {
  name: string;
  email: string;
  message: string;
  company?: string;
}
\`\`\`

## Database Schema

### Package
- trackingNumber (unique)
- status
- currentLocation
- estimatedDelivery
- statusHistory
- deliveryDetails

### Courier
- email (unique)
- name
- phone
- currentLocation
- activeDeliveries

### Contact
- name
- email
- message
- company
- createdAt

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run db:push` - Push database schema
- `npm run db:init` - Initialize database

## Deployment

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

### Docker Production
\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

© 2025 DLT Last-Mile & Distribution S.A. de C.V. All rights reserved.

## Contact

- **Head Office**: Shared campus with Dasza CEDIS – Apodaca, N.L.
- **Phone**: +52 (81) 8368 2483 ext. 400
- **Email**: info@dlt.mx 