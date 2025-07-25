import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactPage from '../page'

describe('ContactPage', () => {
  it('renders contact form with all fields', () => {
    render(<ContactPage />)
    
    // Check for form fields
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<ContactPage />)
    
    // Check for contact details
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument()
    expect(screen.getByText(/Apodaca, N.L., México/i)).toBeInTheDocument()
    expect(screen.getByText(/\+52 \(81\) 8368 2483/i)).toBeInTheDocument()
    expect(screen.getByText(/info@dlt.mx/i)).toBeInTheDocument()
  })

  it('requires mandatory fields', () => {
    render(<ContactPage />)
    
    const form = screen.getByRole('form')
    const submitButton = screen.getByText(/Send Message/i)
    
    // Try to submit empty form
    fireEvent.submit(form)
    
    // Check for required field validation
    const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/Message/i) as HTMLInputElement

    expect(nameInput.required).toBe(true)
    expect(emailInput.required).toBe(true)
    expect(messageInput.required).toBe(true)
  })
}) 