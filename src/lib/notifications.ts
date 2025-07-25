import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

interface NotificationOptions {
  to: string
  type: 'sms' | 'whatsapp'
  template: 'delivery' | 'rating'
  data: {
    trackingNumber: string
    courierName?: string
    courierPhone?: string
    estimatedDelivery?: string
    [key: string]: any
  }
}

export async function sendNotification({
  to,
  type,
  template,
  data
}: NotificationOptions) {
  try {
    const from = type === 'whatsapp'
      ? `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`
      : process.env.TWILIO_PHONE_NUMBER

    const templates = {
      delivery: `Your DLT package #${data.trackingNumber} has been delivered by ${data.courierName}. 
        If you need assistance, contact your courier at ${data.courierPhone}.
        Rate your delivery experience: ${process.env.NEXT_PUBLIC_APP_URL}/track/${data.trackingNumber}`,
      
      rating: `Thank you for using DLT Logistics! Please rate your delivery experience:
        ${process.env.NEXT_PUBLIC_APP_URL}/track/${data.trackingNumber}/rate`
    }

    const message = await client.messages.create({
      body: templates[template],
      from,
      to: type === 'whatsapp' ? `whatsapp:${to}` : to
    })

    return message
  } catch (error) {
    console.error('Error sending notification:', error)
    throw error
  }
} 