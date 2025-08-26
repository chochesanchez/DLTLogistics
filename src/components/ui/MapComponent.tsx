import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

interface MapComponentProps {
  center: {
    lat: number
    lng: number
  }
  zoom?: number
}

const containerStyle = {
  width: '100%',
  height: '100%'
}

export function MapComponent({ center, zoom = 12 }: MapComponentProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  if (!isLoaded) return <div>Loading map...</div>

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }}
    >
      <Marker
        position={center}
        icon={{
          url: '/images/delivery-marker.svg',
          scaledSize: new window.google.maps.Size(40, 40)
        }}
      />
    </GoogleMap>
  )
} 