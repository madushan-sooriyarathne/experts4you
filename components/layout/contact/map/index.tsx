import { useEffect } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import { MapBox } from "./styles";

const MapSection: React.FC = (): JSX.Element => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.MAP_BOX_API_TOKEN as string;
    const map: Map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/light-v10",
      //   style: "mapbox://styles/mapbox/streets-v11",
      center: { lng: 79.85571272371061, lat: 6.930831024966724 },
      zoom: 13,
      minZoom: 10,
    });

    const markerElement: HTMLDivElement = document.createElement("div");

    // styling the element
    // styles will be added in the google styles file
    markerElement.className = "marker-element";

    new mapboxgl.Marker(markerElement)
      .setLngLat({
        lat: 6.930831024966724,
        lng: 79.85571272371061,
      })
      .addTo(map);
  }, []);

  return <MapBox id="map-container" />;
};

export default MapSection;
