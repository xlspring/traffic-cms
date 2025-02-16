import {LeafletMapWithClusters} from "~/components/leafletMap.lazy.tsx";

export default function Map() {
  return (
    <>
      <h1>map</h1>
      <LeafletMapWithClusters center={[49.42114, 32.08008]} markers={[[49.42114, 32.08008]]}/>
    </>
  )
}