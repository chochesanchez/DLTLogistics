import React from 'react'
import { render, screen } from '@testing-library/react'
import TrackingPage from '../page'

// Mock the components that use external services
jest.mock('@/components/ui/MapComponent', () => ({
  MapComponent: () => <div data-testid="map-component">Map</div>
}))

jest.mock('@/components/ui/DeliveryStatus', () => ({
  DeliveryStatus: () => <div data-testid="delivery-status">Status</div>
}))

jest.mock('@/components/ui/DeliveryDetails', () => ({
  DeliveryDetails: () => <div data-testid="delivery-details">Details</div>
}))

describe('TrackingPage', () => {
  const mockParams = {
    code: 'DLT123456789'
  }

  it('renders tracking number', () => {
    render(<TrackingPage params={mockParams} />)
    expect(screen.getByText(/DLT123456789/)).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<TrackingPage params={mockParams} />)
    
    expect(screen.getByTestId('map-component')).toBeInTheDocument()
    expect(screen.getByTestId('delivery-status')).toBeInTheDocument()
    expect(screen.getByTestId('delivery-details')).toBeInTheDocument()
  })
}) 