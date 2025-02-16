import type {MapOptions} from 'leaflet'
import type {FC, ReactNode} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'

export default function LeafletMap({children, center, ...options}: {
  children: ReactNode,
  center: [number, number]
}): ReactNode {
  return (
    <MapContainer
      className="h-[200px] w-full relative"
      maxZoom={18}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  )
}

// const LeafletMap: ReactNode = ({children}: { children: ReactNode }) => {
//   return (
//     <MapContainer
//       className="h-[200px] w-full relative"
//       maxZoom={18}
//       {...options}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//       />
//       {children}
//     </MapContainer>
//   )
// }
//
// export default LeafletMap