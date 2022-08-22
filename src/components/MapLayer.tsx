import {
  Icon,
  LatLngBoundsExpression,
  LatLngExpression,
  point
} from "leaflet";
import { useState } from "react";
import {
  Marker,
  TileLayer,
  useMapEvents
} from "react-leaflet";
import {
  ALT_TEXT_MAP_PRIMARY_PIN,
  ATTRIBUTION, MAP_CLICK_ZOOM, MAX_ZOOM, MIN_ZOOM, ONE_MAP_BOUNDS, ONE_MAP_URL
} from "../constants";
const MapLayer = () => {
  const [primaryPin, setPrimaryPin] = useState<LatLngExpression | null>(null);
  const map = useMapEvents({
    click(event) {
      const { layerPoint } = event;
      const offsetLayerPoint = point(layerPoint.x - 18, layerPoint.y - 30);
      const latlng = map.layerPointToLatLng(offsetLayerPoint);
      setPrimaryPin(latlng);
      map.flyTo(latlng, MAP_CLICK_ZOOM);
    }
  });
  return (
    <>
      <TileLayer
        attribution={ATTRIBUTION}
        url={ONE_MAP_URL}
        detectRetina
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        bounds={ONE_MAP_BOUNDS as LatLngBoundsExpression}
      />
      {primaryPin && (
        <Marker
          alt={ALT_TEXT_MAP_PRIMARY_PIN}
          icon={new Icon({
            iconUrl: "/primary-pin.png"
          })}
          position={primaryPin}
        />
      )}
    </>
  );
};
export default MapLayer;
