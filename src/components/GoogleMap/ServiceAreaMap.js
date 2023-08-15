import { Loader } from '@googlemaps/js-api-loader';
const { GMAPS_KEY } = require('../../../gMapsKey.js');
const mapIcon = require("../../assets/ArborCraft_circle.png");
import { mapCenter, goldenCoordinates, mapAreaCoordinates } from './mapCoordinates.js';

export default function ServiceAreaMap() {
  const markerIcon = document.createElement('img');
    markerIcon.src = mapIcon;
    markerIcon.style.height = "5em";
    markerIcon.style.width = "5em";

  const loader = new Loader({
    apiKey: GMAPS_KEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("service_map"), {
      zoom: 9.75,
      center: mapCenter,
      mapId: "GOLDEN_CO_MAP",
    });

    const serviceArea = new google.maps.Polyline({
      path: mapAreaCoordinates,
      geodesic: true,
      strokeColor: "#594A42",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: goldenCoordinates,
      title: "Golden, CO",
      content: markerIcon,
    });

    serviceArea.setMap(map);

  });
};
