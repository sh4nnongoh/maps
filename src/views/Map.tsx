import {
  LatLngBoundsExpression,
  LatLngExpression
} from "leaflet";
import {
  MapContainer
} from "react-leaflet";
import {
  CENTER, DEFAULT_ZOOM, MAX_BOUNDS_VISCOUSITY, ONE_MAP_BOUNDS
} from "../constants";
import MapLayer from "../components/MapLayer";
const Map = () => (
  <MapContainer
    center={[CENTER.x, CENTER.y] as LatLngExpression}
    zoom={DEFAULT_ZOOM}
    maxBounds={ONE_MAP_BOUNDS as LatLngBoundsExpression}
    maxBoundsViscosity={MAX_BOUNDS_VISCOUSITY}
  >
    <MapLayer />
  </MapContainer>
);
export default Map;
