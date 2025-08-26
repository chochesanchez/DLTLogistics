// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock the Google Maps JavaScript API (only when window is available)
if (typeof window !== 'undefined') {
  window.google = {
    maps: {
      Marker: class {},
      Map: class {},
      LatLngBounds: class {},
      places: {
        Autocomplete: class {},
        AutocompleteService: class {},
        PlacesService: class {
          getDetails() {}
          nearbySearch() {}
        },
      },
      Size: class {},
      Point: class {},
      LatLng: class {
        constructor(lat, lng) {
          return { lat, lng }
        }
      },
      MapTypeId: {
        ROADMAP: 'roadmap',
      },
      Geocoder: class {},
    },
  }
}

// Mock Twilio
jest.mock('twilio', () => {
  return jest.fn().mockImplementation(() => ({
    messages: {
      create: jest.fn().mockResolvedValue({
        sid: 'test-message-sid',
      }),
    },
  }))
}) 