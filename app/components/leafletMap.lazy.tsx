import React, {Suspense, lazy, type ReactNode} from 'react'

const LazyLeafletMap = lazy(() => import('./leafletMap'))
// @ts-ignore
const LazyMarker = lazy(async () => (await import('react-leaflet')).Marker)
// @ts-ignore
const LazyMarkerCluster = lazy(
  async () => (await import('./markerCluster')).MarkerCluster
)

import type {MapOptions} from 'leaflet'

export function LeafletMapWithClusters({center, markers, ...options}: {
  center: [number, number],
  markers: [number, number][]
}) {
  return (
    <Suspense fallback={<div className="h-[200px]"/>}>
      <LazyLeafletMap center={center} {...options}>
        <Suspense fallback={<></>}>
          <LazyMarkerCluster>
            {markers.map((position, index) => (
              <LazyMarker key={index} position={position}/>
            ))}
          </LazyMarkerCluster>
        </Suspense>
      </LazyLeafletMap>
    </Suspense>
  )
}