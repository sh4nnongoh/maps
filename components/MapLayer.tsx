import {
  LatLngBoundsExpression
} from "leaflet";
import {
  TileLayer
} from "react-leaflet";
import {
  ATTRIBUTION, MAX_ZOOM, MIN_ZOOM, ONE_MAP_BOUNDS, ONE_MAP_URL
} from "../utils/constants";
const MapLayer = () => (
  <TileLayer
    attribution={ATTRIBUTION}
    url={ONE_MAP_URL}
    detectRetina
    maxZoom={MAX_ZOOM}
    minZoom={MIN_ZOOM}
    bounds={ONE_MAP_BOUNDS as LatLngBoundsExpression}
  />
);
export default MapLayer;
