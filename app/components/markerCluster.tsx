// @ts-expect-error Missing type definitions
import BaseMarkerCluster from '@changey/react-leaflet-markercluster'
import {divIcon, point} from 'leaflet'
import type {FC, ReactNode} from 'react'

const createClusterCustomIcon = (cluster: any) => {
  return divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className:
      'bg-[#e74c3c] bg-opacity-100 text-white font-bold !flex items-center justify-center rounded-3xl border-white border-4 border-opacity-50',
    iconSize: point(40, 40, true),
  })
}

export function MarkerCluster({children}: { children: ReactNode }) {
  return (
    <BaseMarkerCluster
      iconCreateFunction={createClusterCustomIcon}
      showCoverageOnHover={false}
    >
      {children}
    </BaseMarkerCluster>
  )
}
