# DLT Logistics Web Platform

The last‑mile and domestic distribution arm of the Dasza group, delivering B2B, B2C and omnichannel parcels across México's main metropolitan areas.

## Features

- 🚚 Real-time package tracking
- 📱 Responsive design for all devices
- 🌍 Multi-language support (English/Spanish)
- 📦 Package status updates
- 📍 Live map integration
- 📸 Delivery confirmation with photos
- ✍️ Digital signature capture
- 📱 WhatsApp/SMS notifications
- ⭐ Driver rating system
- 📊 Admin dashboard

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (Database ORM)
- MongoDB
- Google Maps API
- Twilio (WhatsApp/SMS)
- Socket.io (Real-time updates)

## Prerequisites

- Node.js 18+
- MongoDB database
- Google Maps API key
- Twilio account (for WhatsApp/SMS)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/chochesanchez/veloxgo.git
   cd veloxgo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

4. Initialize the database:
   ```bash
   npm run db:push   # Create database schema
   npm run db:init   # Add sample data
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/dlt"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_google_maps_api_key"

# Twilio (WhatsApp/SMS)
TWILIO_ACCOUNT_SID="your_twilio_account_sid"
TWILIO_AUTH_TOKEN="your_twilio_auth_token"
TWILIO_PHONE_NUMBER="+1234567890"
TWILIO_WHATSAPP_NUMBER="+1234567890"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="DLT Logistics"
```

## Project Structure

```
dlt-webpage/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (auth)/         # Authentication routes
│   │   ├── (main)/         # Main application routes
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   └── shared/        # Shared components
│   ├── lib/               # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # TypeScript types
├── public/                # Static files
│   ├── images/           # Image assets
│   └── fonts/            # Font files
├── prisma/               # Database schema
├── tests/                # Test files
└── package.json          # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run db:push` - Push database schema changes
- `npm run db:init` - Initialize database with sample data

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to the branch
4. Create a Pull Request

## License

Private - All rights reserved

## Contact

For any inquiries, please contact:
- Email: info@dlt.mx
- Phone: +52 (81) 8368 2483 ext. 400 